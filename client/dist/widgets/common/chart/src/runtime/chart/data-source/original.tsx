import { React, type DataSource, DataSourceComponent, type ImmutableObject, type QueriableDataSource, type QueryParams, type UseDataSource, hooks } from 'jimu-core'
import { useChartRuntimeDispatch, useChartRuntimeState } from '../../state'

interface OriginDataSourceManagerProps {
  widgetId: string
  useDataSource: ImmutableObject<UseDataSource>
  onQueryRequired?: () => void
}

const OriginDataSourceManager = (props: OriginDataSourceManagerProps) => {
  const { widgetId, useDataSource, onQueryRequired } = props
  const { queryVersion, dataSource, filter } = useChartRuntimeState()
  const dataSourceRef = hooks.useLatest(dataSource)
  const dispatch = useChartRuntimeDispatch()

  //When the filter is modified, update it to the data source
  React.useEffect(() => {
    if (dataSourceRef.current) {
      (dataSourceRef.current as QueriableDataSource).updateQueryParams({
        where: filter?.sql ?? '1=1',
        sqlExpression: filter ?? null // TODO: test
      } as QueryParams, widgetId)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter])

  const handleCreated = (dataSouce: DataSource) => {
    dispatch({ type: 'SET_DATA_SOURCE', value: dataSouce })
  }

  const handleQueryRequired = () => {
    dispatch({ type: 'SET_QUERY_VERSION', value: queryVersion + 1 })
    onQueryRequired?.()
  }

  return <DataSourceComponent
    widgetId={widgetId}
    useDataSource={useDataSource}
    onDataSourceCreated={handleCreated}
    onQueryRequired={handleQueryRequired}
  />
}

export default OriginDataSourceManager
