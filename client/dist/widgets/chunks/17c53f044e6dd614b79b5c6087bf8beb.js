/*! For license information please see 17c53f044e6dd614b79b5c6087bf8beb.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[33944],{33944:(e,r,t)=>{t.r(r),t.d(r,{arcgis_new_item_pages_tile_layer_from_existing:()=>m});var a=t(28384),i=t(41171),l=t(76134),s=t(83129),o=t(86739),n=t(72796),c=t(58892),y=t(54871),d=t(24552),u=t(71120);t(66716),t(62381),t(27010),t(65508),t(82463),t(48507),t(48333),t(31546),t(86274),t(99274),t(85142),t(72022),t(96729),t(58728),t(83397),t(18869),t(46220);const m=class{constructor(e){(0,a.r)(this,e),this.newItemUpdatePage=(0,a.c)(this,"newItemUpdatePage",7),this.selectedItem=void 0,this.error=void 0,this.isProcessing=!1}async handleNext(){var e;if("3dTiles"===c.a.tileLayerPublishType)return;this.error=null;const{selectedItem:r}=this;if(!r)return(0,u.f)("No layer selected"),void(this.error="noLayerSelected");const{id:t,url:a,title:y}=r;try{const u=c.a.tileLayerPublishType;this.isProcessing=!0;const m=l.c.portal,[{layers:p,tables:v,serviceInfo:g},{total:h,relatedItems:f}]=await Promise.all([(0,s.g)(a,(0,i.g)(m),!0),(0,o.b)(t,"Service2Service")]),{result:b}=await(0,n.f)({itemId:t,itemUrl:a,publishType:"vectorTiles"===c.a.tileLayerPublishType?"vector":"raster",portal:m,fullLayers:p});if(h>0&&("vectorTiles"===u&&f.some((e=>"Vector Tile Service"===e.type))||"tiles"===u&&f.some((e=>"Map Service"===e.type))))return void(this.error="tileLayerAlreadyExist");const L=e=>(null!=e?e:[]).some((e=>{var r,t;const{drawingInfo:a,fields:i,layerDefinition:l}=e,s=null==l?void 0:l.drawingInfo,o=null!==(r=null==s?void 0:s.renderer)&&void 0!==r?r:null==a?void 0:a.renderer;return o&&i?!(0,n.c)(o,e.geometryType,i)||(0,n.l)(e):null!==(t=(0,n.l)(e))&&void 0!==t&&t}));if(L(p)||L(b.layers))return void(this.error="badRenderer");const w=e=>(0,n.a)(e,!0);if(!p.some(w)||(null===(e=null==b?void 0:b.layers)||void 0===e?void 0:e.length)>0&&!b.layers.some(w))return void(this.error="badLayer");c.a.sourceTitle=y,(0,d.s)(r),c.a.tileAutoCreation=!0,c.a.tileLayerBasemapType="standard",c.a.tileLayerBasemapUrl="",c.a.tileLayerFromFeatureLayer=!0,c.a.tileLayerLayers=p,c.a.tileLayerTables=v,c.a.tileLayerServiceInfo=g,c.a.tileLayerData=b,c.a.item=r,this.isProcessing=!1,this.newItemUpdatePage.emit("tileLayerSettings")}catch(e){console.error(e)}}onError(){this.isProcessing=!1}componentWillLoad(){c.a.serviceInfo=null,c.a.selectedServiceInfoLayersNames=null,this.i18n=y.u.i18n.tileLayerFromExisting}render(){var e,r;const{error:t,i18n:i,isProcessing:l}=this;return(0,a.h)(a.H,null,(0,a.h)("arcgis-new-item-loader",{active:l}),(0,a.h)("arcgis-new-item-feature-layer-browser",{itemBrowserBucket:["my"],onItemSelected:({detail:e})=>this.selectedItem=e,query:'type:"Feature Service" AND typekeywords:"Hosted Service" NOT typekeywords:"Spatiotemporal"'}),(0,a.h)("arcgis-new-item-alert",{heading:"badLayer"===t?i.error.tileLayerAlreadyExist.title:null===(e=i.error[t])||void 0===e?void 0:e.title,description:"badLayer"===t||null===(r=i.error[t])||void 0===r?void 0:r.description,active:null!=t,onAlertDismiss:()=>{this.error=null}}))}static get watchers(){return{error:["onError"]}}}},71120:(e,r,t)=>{t.d(r,{a:()=>u,b:()=>y,c:()=>d,e:()=>n,f:()=>m,i:()=>c});var a=t(76134),i=t(58892);const l="create feature layer",s="my content",o=e=>{switch(e){case"build":return"blank";case"existing":return"fs";case"template":return"template";case"link":return"url"}},n=e=>{const r=a.c.telemetry;null==r||r.stepWorkflow(l,"enable "+("captureGPS"===e?"gps":"enableZDefaults"===e?"z":"m"),{category:l,attribute:o(i.a.addFeatureLayerType),pageName:s})},c=e=>{const r=a.c.telemetry;null==r||r.stepWorkflow(l,`expand ${e} details`,{category:l,attribute:o(i.a.addFeatureLayerType),pageName:s})},y=()=>{const e=a.c.telemetry;null==e||e.stepWorkflow(l,"filter",{category:l,attribute:o(i.a.addFeatureLayerType),pageName:s})},d=e=>{const r=o(e),t=a.c.telemetry;null==t||t.stepWorkflow(l,"from option",{category:l,attribute:r,pageName:s})},u=()=>{const{addFeatureLayerType:e,serviceInfo:r}=i.a,t=r,n=a.c.telemetry;null==n||n.endWorkflow(l,{category:l,attribute:o(e),pageName:s,count:t.layers.length,number:t.tables.length})},m=e=>{var r;null===(r=a.c.telemetry)||void 0===r||r.logError({category:l,error:e})}}}]);