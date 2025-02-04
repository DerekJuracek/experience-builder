/** @jsx jsx */
import {
  React, type AllWidgetProps, jsx, type DataSource, ReactResizeDetector, MultipleDataSourceComponent, type IMDataSourceInfo, DataSourceStatus,
  type MapServiceDataSource, DataSourceManager, Immutable, DataSourceTypes, AllDataSourceTypes, css, hooks, getAppStore
} from 'jimu-core'
import { type FeatureLayerDataSource, type JimuLayerView, type JimuMapView, loadArcGISJSAPIModules, MapViewManager } from 'jimu-arcgis'
import { Alert, WidgetPlaceholder } from 'jimu-ui'
import { type IMConfig, TimeDisplayStrategy } from '../config'
import TimeLine from './components/timeline'
import { getCalculatedTimeSettings, getInsideLayersFromWebmap, getTimeSettingsFromHonoredWebMap } from '../utils/utils'
import { type MapDataSourceImpl } from 'jimu-arcgis/arcgis-data-source'
import defaultMessages from './translations/default'
import { versionManager } from '../version-manager'

const widgetIcon = require('../../icon.svg')
const WIDGET_HEIGHT = '156px'
type TimelineProps = AllWidgetProps<IMConfig>
const Widget = (props: TimelineProps) => {
  const {
    useDataSources, theme, id, config, intl, autoWidth, autoHeight
  } = props
  const {
    enablePlayControl, autoPlay, timeSettings, honorTimeSettings, dataSourceType,
    timeStyle, foregroundColor, backgroundColor, sliderColor
  } = config
  const { speed: _speed } = timeSettings || {}
  const [timeExtent, setTimeExtent] = React.useState(null)
  const [applied, setApplied] = React.useState(true)
  const [speed, setSpeed] = React.useState(_speed)

  // Used to store all layer useDss from widget dataSources
  const [layerUseDss, setLayerUseDss] = React.useState(null)

  const [reactiveUtils, setReactiveUtils]: [typeof __esri.reactiveUtils, any] = React.useState(null)
  const [dataSources, setDataSources] = React.useState(null)
  const [isDsUpdating, setDsUpdating] = React.useState(true)
  const [isDsLoading, setDsLoading] = React.useState(true)
  const [width, setWidth] = React.useState(null)
  const [timeSettingsForRuntime, setDataSourcesForRuntime] = React.useState(null)
  const widgetRef = React.useRef<HTMLDivElement>(null)

  const mvManager = React.useMemo(() => MapViewManager.getInstance(), [])
  const dsManager = React.useMemo(() => DataSourceManager.getInstance(), [])

  React.useEffect(() => {
    setWidth(widgetRef.current?.clientWidth)
    loadArcGISJSAPIModules([
      'esri/core/reactiveUtils'
    ]).then(modules => {
      setReactiveUtils(modules[0])
    })

    return () => {
      onTimeChanged(null, null, true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  React.useEffect(() => {
    setDataSources(null)
    if (dataSourceType !== DataSourceTypes.FeatureLayer) {
      let _layerUseDss = null
      if (useDataSources?.length > 0) {
        _layerUseDss = []
        const promises = []
        useDataSources.forEach(useDs => {
          // If is data source set, will wait util all child data sources are created.
          promises.push(dsManager.createDataSourceByUseDataSource(Immutable(useDs)).then(ds => ds.isDataSourceSet && !ds.areChildDataSourcesCreated() ? ds.childDataSourcesReady().then(() => ds) : ds))
        })
        Promise.all(promises).then(dataSources => { // maps, or mapServices
          const _dataSources = {}
          dataSources.forEach(ds => {
            _dataSources[ds.id] = ds
          })
          dataSources.forEach(ds => {
            ds.getAllChildDataSources().forEach(layerDs => { // inside layers
              if (layerDs.type === DataSourceTypes.FeatureLayer && layerDs.supportTime()) {
                _layerUseDss.push({
                  dataSourceId: layerDs.id,
                  mainDataSourceId: layerDs.getMainDataSource()?.id,
                  dataViewId: layerDs.dataViewId,
                  rootDataSourceId: layerDs.getRootDataSource()?.id
                })
              }
            })
          })
          setDataSources(_dataSources)
          setLayerUseDss(Immutable(_layerUseDss))
        }).catch(err => {})
      }
    } else {
      setLayerUseDss(useDataSources)
    }
  }, [useDataSources, dsManager, dataSourceType, setLayerUseDss, setDataSources])

  React.useEffect(() => {
    if (dataSources && reactiveUtils) {
      if (honorTimeSettings) {
        const settings = getTimeSettingsFromHonoredWebMap(dataSources)
        setSpeed(settings?.speed)
        setDataSourcesForRuntime(settings)
      } else {
        const _timeSettings = getCalculatedTimeSettings(timeSettings, dataSources, true)
        setSpeed(_speed)
        setDataSourcesForRuntime(_timeSettings)
      }
    }
  }, [dataSources, reactiveUtils, honorTimeSettings, _speed, timeSettings])

  /** Call it when timeline plays for each extent since mapViewIds could be updated.
   *  1. Map widgets are created or rendered after timeline is ready. (Runtime & Builder)
   *  2. Selected webMap, or WebMap including selected mapServices or layers are used/removed by map widgets. (Builder)
   */
  const watchDsUpdating = () => {
    let layerIds = []
    let mapDs = null
    const allMapViewIds = mvManager.getAllJimuMapViewIds()
    if (dataSourceType === AllDataSourceTypes.WebMap) {
      mapDs = dataSources[Object.keys(dataSources)[0]] as MapDataSourceImpl
      layerIds = mapDs.getAllChildDataSources().map(layerDs => layerDs.id)
    } else { // MapService, Feature layers
      layerIds = Object.keys(dataSources)
    }

    const requests = []
    layerIds.forEach(layerId => {
      const rootDs = mapDs || dataSources[layerId].getRootDataSource()
      if (rootDs?.type === AllDataSourceTypes.WebMap) {
        const mapViewIds = allMapViewIds.filter(id => mvManager.getJimuMapViewById(id).dataSourceId === rootDs.id)
        mapViewIds.forEach(mapViewId => {
          const mapView = mvManager.getJimuMapViewById(mapViewId)
          const layerView = getLayerViewByLayerId(mapView, layerId)
          layerView?.view && requests.push(reactiveUtils.whenOnce(
            () => !layerView.view.updating
          ))
        })
      }
    })

    Promise.all(requests).then((result) => {
      setDsUpdating(false)
    })
  }

  const getLayerViewByLayerId = (mapView: JimuMapView, layerId: string): JimuLayerView => {
    let layerView = null
    Object.keys(mapView.jimuLayerViews).forEach(vid => {
      if (mapView.jimuLayerViews[vid].layerDataSourceId === layerId) {
        layerView = mapView.jimuLayerViews[vid]
      }
    })
    return layerView
  }

  const onTimeChanged = hooks.useEventCallback((startTime: number, endTime: number, unmount = false) => {
    if (!dataSources) {
      return
    }
    const queryParams = { time: unmount ? null : [startTime, endTime] } as any
    if (!unmount) {
      watchDsUpdating()
    }
    if (dataSourceType === AllDataSourceTypes.WebMap) {
      const layers = getInsideLayersFromWebmap(dataSources, config.timeSettings?.layerList)
      Object.keys(layers).forEach(lyId => {
        updateLayerQueryParams(layers[lyId], queryParams, id)
      })
    } else {
      Object.keys(dataSources).forEach(dsId => {
        updateLayerQueryParams(dataSources[dsId], queryParams, id)
      })
    }
  })

  React.useEffect(() => {
    if (timeExtent) {
      onTimeChanged(timeExtent[0], timeExtent[1], !applied)
    }
  }, [timeExtent, applied, onTimeChanged])

  const updateLayerQueryParams = (layerDs, queryParams, id) => {
    if (layerDs.type === DataSourceTypes.MapService) {
      layerDs = layerDs as MapServiceDataSource
      if (layerDs.supportTime?.()) {
        queryParams = getTimeOffsetedQueryParams(layerDs, queryParams)
        layerDs.changeTimeExtent?.(queryParams.time, id)
      }
    } else if (layerDs.type === DataSourceTypes.FeatureLayer) {
      layerDs = layerDs as FeatureLayerDataSource
      if (layerDs.supportTime?.()) {
        queryParams = getTimeOffsetedQueryParams(layerDs, queryParams)
        layerDs.updateQueryParams?.(queryParams, id)
      }
    }
  }

  const getTimeOffsetedQueryParams = (layerDs, queryParams) => {
    const exportOptions = layerDs.getTimeInfo().exportOptions || {}
    const { TimeOffset: offset = 0, timeOffsetUnits } = exportOptions
    if (queryParams?.time && offset !== 0) {
      let startTime = queryParams.time[0]
      let endTime = queryParams.time[1]
      const startDate = new Date(startTime)
      const endDate = new Date(endTime)
      switch (timeOffsetUnits) {
        case 'esriTimeUnitsCenturies':
        case 'esriTimeUnitsDecades':
        case 'esriTimeUnitsYears':
          const offsetedYear = timeOffsetUnits === 'esriTimeUnitsCenturies' ? 100 : timeOffsetUnits === 'esriTimeUnitsDecades' ? 10 : 1
          startTime = startDate.setFullYear(startDate.getFullYear() - offset * offsetedYear)
          endTime = endDate.setFullYear(endDate.getFullYear() - offset * offsetedYear)
          break
        case 'esriTimeUnitsMonths':
          startTime = startDate.setMonth(startDate.getMonth() - offset)
          endTime = endDate.setMonth(endDate.getMonth() - offset)
          break
        case 'esriTimeUnitsWeeks':
        case 'esriTimeUnitsDays':
          const offsetedDay = timeOffsetUnits === 'esriTimeUnitsWeeks' ? 7 : 1
          startTime = startDate.setDate(startDate.getDate() - offset * offsetedDay)
          endTime = endDate.setDate(endDate.getDate() - offset * offsetedDay)
          break
        case 'esriTimeUnitsHours':
          startTime = startDate.setHours(startDate.getHours() - offset)
          endTime = endDate.setHours(endDate.getHours() - offset)
          break
        case 'esriTimeUnitsMinutes':
          startTime = startDate.setMinutes(startDate.getMinutes() - offset)
          endTime = endDate.setMinutes(endDate.getMinutes() - offset)
          break
        case 'esriTimeUnitsSeconds':
          startTime = startDate.setSeconds(startDate.getSeconds() - offset)
          endTime = endDate.setSeconds(endDate.getSeconds() - offset)
          break
        case 'esriTimeUnitsMilliseconds':
          startTime = startDate.setMilliseconds(startDate.getMilliseconds() - offset)
          endTime = endDate.setMilliseconds(endDate.getMilliseconds() - offset)
          break
        default:
          break
      }
      queryParams.time = [startTime, endTime]
    }
    return queryParams
  }

  const onResize = (width) => {
    if (autoWidth) { // get bbox.width from layout for autoWidth
      const { layoutId, layoutItemId } = props
      const runtimeState = getAppStore().getState()
      const layoutItem = runtimeState?.appConfig?.layouts?.[layoutId]?.content?.[layoutItemId]
      if (!layoutItem) {
        return
      }
      const w = layoutItem.bbox.width
      if (w.includes('px')) {
        width = w
      } else {
        const selector = `div.layout[data-layoutid=${layoutId}]`
        const parentElement = document.querySelector(selector)
        const { clientWidth = 480 } = parentElement || {}
        width = clientWidth * parseInt(w.split('%')[0]) / 100
      }
    }
    setWidth(width)
  }

  if (!useDataSources || useDataSources.length === 0) {
    return <WidgetPlaceholder
      icon={widgetIcon} widgetId={id}
      css={css`height: ${autoHeight ? WIDGET_HEIGHT : '100%'};`}
      message={intl.formatMessage({ id: '_widgetLabel', defaultMessage: defaultMessages._widgetLabel })}
    />
  } else if ((dataSources && reactiveUtils && timeSettingsForRuntime === null) || timeSettingsForRuntime?.startTime?.value > timeSettingsForRuntime?.endTime?.value) {
    const noTlFromHonoredMap = intl.formatMessage({ id: 'noTlFromHonoredMapWarning', defaultMessage: defaultMessages.noTlFromHonoredMapWarning })
    const dateExtentError = intl.formatMessage({ id: 'invalidTimeSpanWarning', defaultMessage: defaultMessages.invalidTimeSpanWarning })
    return <div className='placeholder-container w-100 h-100 position-relative'>
      <WidgetPlaceholder
        icon={widgetIcon} widgetId={id}
        css={css`height: ${autoHeight ? WIDGET_HEIGHT : '100%'};`}
        message={intl.formatMessage({ id: '_widgetLabel', defaultMessage: defaultMessages._widgetLabel })}
      />
      <Alert
        buttonType='tertiary' form='tooltip' size='small' type='warning' withIcon={true} className='position-absolute'
        style={{ bottom: 10, right: 10, backgroundColor: 'var(--warning-100)', border: '1px solid var(--warning-300)' }}
        text={ timeSettingsForRuntime === null ? noTlFromHonoredMap : dateExtentError}
      />
    </div>
  } else {
    return (
      <div
        className='timeline-widget'
        css={css`
          width: ${autoWidth ? width + 'px' : 'unset'};
          height: ${autoHeight && !dataSources ? WIDGET_HEIGHT : 'unset'};
          background: ${backgroundColor || theme.colors.white};
        `}
        ref={el => (widgetRef.current = el)}>
        <ReactResizeDetector handleWidth onResize={onResize} />
        {
          layerUseDss?.length > 0 && <MultipleDataSourceComponent useDataSources={layerUseDss}>
            {(dss: { [dataSourceId: string]: DataSource }, infos: { [dataSourceId: string]: IMDataSourceInfo }) => {
              // set ds
              if (dataSourceType === DataSourceTypes.FeatureLayer) {
                const isCreated = Object.keys(infos).filter(dsId => [DataSourceStatus.Created, DataSourceStatus.CreateError].includes(infos[dsId]?.instanceStatus)).length === useDataSources.length
                if (!dataSources && isCreated && Object.keys(dss).length === useDataSources.length) {
                  setTimeout(() => {
                    setDataSources(dss)
                  }, 0)
                }
              }
              // set loading
              const isDsNotLoading = Object.keys(infos).filter(dsId => infos[dsId] && infos[dsId].status !== DataSourceStatus.Loading).length === Object.keys(infos).length
              setTimeout(() => {
                setDsLoading(!isDsNotLoading)
              }, 0)
              return null
            }}
          </MultipleDataSourceComponent>
        }
        {
          dataSources === null
            ? <div className='jimu-secondary-loading' css={css`position: 'absolute';left: '50%';top: '50%';`} />
            : timeSettingsForRuntime && width && <TimeLine
              theme={theme}
              width={width}
              updating={isDsLoading || isDsUpdating}
              startTime={timeSettingsForRuntime.startTime?.value}
              endTime={timeSettingsForRuntime.endTime?.value}
              accuracy={timeSettingsForRuntime.accuracy}
              stepLength={timeSettingsForRuntime.stepLength}
              dividedCount={timeSettingsForRuntime.dividedCount}
              cumulatively={timeSettingsForRuntime.timeDisplayStrategy === TimeDisplayStrategy.cumulatively}
              timeStyle={timeStyle}
              foregroundColor={foregroundColor}
              backgroundColor={backgroundColor}
              sliderColor={sliderColor}
              enablePlayControl={enablePlayControl}
              speed={speed}
              autoPlay={autoPlay}
              applied={applied}
              onTimeChanged={(sTime, eTime) => { setTimeExtent([sTime, eTime]) }}
              onApplyStateChanged={applied => { setApplied(applied) }}
            />
        }
      </div>
    )
  }
}
Widget.versionManager = versionManager

export default Widget
