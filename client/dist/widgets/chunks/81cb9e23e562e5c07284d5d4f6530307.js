/*! For license information please see 81cb9e23e562e5c07284d5d4f6530307.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[36799],{36799:(e,i,t)=>{t.r(i),t.d(i,{arcgis_symbol_styler_inline_input:()=>o});var n=t(28384);const o=class{constructor(e){(0,n.r)(this,e),this.arcgisSymbolStylerInlineInputClose=(0,n.c)(this,"arcgisSymbolStylerInlineInputClose",7),this.arcgisSymbolStylerInlineInputOpen=(0,n.c)(this,"arcgisSymbolStylerInlineInputOpen",7),this.handlePanelDismissedChange=e=>{const i=e.currentTarget;i.closed&&(this.close(),i.closed=!1),e.stopPropagation()},this.handleTriggerClick=()=>{this.open=!this.open,this.open&&setTimeout((()=>{this.panelElement.setFocus()}),300)},this.handleDone=()=>{this.close()},this.handlePopoverOpen=e=>{this.arcgisSymbolStylerInlineInputOpen.emit(),e.stopPropagation()},this.handlePopoverClose=e=>{this.arcgisSymbolStylerInlineInputClose.emit(),e.stopPropagation()},this.handlePopoverKeyUp=({key:e})=>{"Escape"===e&&this.close()},this.setTriggerRef=e=>{this.triggerEl=e},this.setPreviewContainerRef=e=>{this.previewContainerEl=e},this.disabled=!1,this.heading=void 0,this.iconEnd="pencil",this.intlDone=void 0,this.label=void 0,this.popoverProps=void 0,this.open=!1}disabledChanged(e){e&&this.open&&this.close()}onInlineInputOpen(e){this.open&&(e.composedPath().includes(this.el)||(this.open=!1))}async setFocus(){var e;null===(e=this.triggerEl)||void 0===e||e.focus()}async close(){this.open=!1,this.arcgisSymbolStylerInlineInputClose.emit(),await this.setFocus()}render(){const{popoverProps:e}=this;return(0,n.h)(n.H,null,(0,n.h)("calcite-popover",{pointerDisabled:!0,onKeyUp:this.handlePopoverKeyUp,label:this.label,offsetDistance:(null==e?void 0:e.offsetDistance)||0,offsetSkidding:(null==e?void 0:e.offsetSkidding)||0,flipDisabled:(null==e?void 0:e.flipDisabled)||!1,open:this.open,overlayPositioning:(null==e?void 0:e.overlayPositioning)||"fixed",referenceElement:(null==e?void 0:e.refElement)||this.previewContainerEl,onCalcitePopoverClose:this.handlePopoverClose,onCalcitePopoverOpen:this.handlePopoverOpen,placement:(null==e?void 0:e.placement)||"bottom",triggerDisabled:!0},(0,n.h)("calcite-panel",{closable:!0,onCalcitePanelClose:this.handlePanelDismissedChange,heading:this.heading,style:(null==e?void 0:e.maxHeight)&&{maxHeight:e.maxHeight},ref:e=>this.panelElement=e},(0,n.h)("slot",{name:"content"}),(0,n.h)("calcite-button",{appearance:"solid",scale:"m",slot:"footer",width:"full",label:this.intlDone,onClick:this.handleDone},this.intlDone))),(0,n.h)("div",{class:"container"},(0,n.h)("div",{class:"preview",ref:this.setPreviewContainerRef},(0,n.h)("button",{disabled:this.disabled,onClick:this.handleTriggerClick,ref:this.setTriggerRef,type:"button","aria-label":this.label},(0,n.h)("slot",{name:"preview"}),this.iconEnd?(0,n.h)("calcite-icon",{icon:this.iconEnd,scale:"s"}):null)),(0,n.h)("slot",{name:"content-end"})))}get el(){return(0,n.d)(this)}static get watchers(){return{disabled:["disabledChanged"]}}};o.style=":host{--arcgis-symbol-styler-inline-input-trigger-background-color:var(--arcgis-app-background);display:flex}:host([disabled]){opacity:var(--arcgis-app-disabled-opacity);pointer-events:none}button{overflow:hidden;background-color:var(--arcgis-symbol-styler-inline-input-trigger-background-color);align-items:center;border:none;border-radius:0;box-sizing:border-box;cursor:pointer;display:flex;font-family:inherit;gap:8px;height:100%;justify-content:center;outline-color:transparent;outline-offset:0;padding:3px 0;padding-inline:3px 8px;position:relative;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;text-align:center;-webkit-appearance:none;width:100%}button:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}button:hover{text-decoration:none}.preview{border:1px solid #949494;display:flex;align-items:center;flex-grow:1}.container{display:flex;gap:16px;width:100%}::slotted([slot=preview]){flex-grow:1;display:flex}calcite-icon{color:var(--calcite-ui-text-3)}"}}]);