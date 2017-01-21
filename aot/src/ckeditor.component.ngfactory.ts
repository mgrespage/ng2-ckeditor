/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../src/ckeditor.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/core/src/zone/ng_zone';
import * as import10 from '@angular/forms/src/directives/control_value_accessor';
import * as import11 from '@angular/core/src/linker/query_list';
import * as import12 from '@angular/core/src/linker/element_ref';
export class Wrapper_CKEditorComponent {
  /*private*/ _eventHandler:Function;
  context:import0.CKEditorComponent;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  subscription0:any;
  subscription1:any;
  subscription2:any;
  subscription3:any;
  subscription4:any;
  subscription5:any;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import0.CKEditorComponent(p0);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    this.context.ngOnDestroy();
    (this.subscription0 && this.subscription0.unsubscribe());
    (this.subscription1 && this.subscription1.unsubscribe());
    (this.subscription2 && this.subscription2.unsubscribe());
    (this.subscription3 && this.subscription3.unsubscribe());
    (this.subscription4 && this.subscription4.unsubscribe());
    (this.subscription5 && this.subscription5.unsubscribe());
  }
  check_config(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.config = currValue;
      this._expr_0 = currValue;
    }
  }
  check_debounce(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.debounce = currValue;
      this._expr_1 = currValue;
    }
  }
  check_value(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.value = currValue;
      this._expr_2 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any,emit0:boolean,emit1:boolean,emit2:boolean,emit3:boolean,emit4:boolean,emit5:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.change.subscribe(_eventHandler.bind(view,'change'))); }
    if (emit1) { (this.subscription1 = this.context.ready.subscribe(_eventHandler.bind(view,'ready'))); }
    if (emit2) { (this.subscription2 = this.context.blur.subscribe(_eventHandler.bind(view,'blur'))); }
    if (emit3) { (this.subscription3 = this.context.focus.subscribe(_eventHandler.bind(view,'focus'))); }
    if (emit4) { (this.subscription4 = this.context.fileUploadRequest.subscribe(_eventHandler.bind(view,'fileUploadRequest'))); }
    if (emit5) { (this.subscription5 = this.context.fileUploadResponse.subscribe(_eventHandler.bind(view,'fileUploadResponse'))); }
  }
}
var renderType_CKEditorComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_CKEditorComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.CKEditorComponent>;
  _CKEditorComponent_0_3:Wrapper_CKEditorComponent;
  __NG_VALUE_ACCESSOR_0_4:any[];
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_CKEditorComponent_Host0,renderType_CKEditorComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  get _NG_VALUE_ACCESSOR_0_4():any[] {
    if ((this.__NG_VALUE_ACCESSOR_0_4 == null)) { (this.__NG_VALUE_ACCESSOR_0_4 = [this._CKEditorComponent_0_3.context]); }
    return this.__NG_VALUE_ACCESSOR_0_4;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'ckeditor',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_CKEditorComponent0(this.viewUtils,this,0,this._el_0);
    this._CKEditorComponent_0_3 = new Wrapper_CKEditorComponent(this.injectorGet(import9.NgZone,this.parentIndex));
    this.compView_0.create(this._CKEditorComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._CKEditorComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.CKEditorComponent) && (0 === requestNodeIndex))) { return this._CKEditorComponent_0_3.context; }
    if (((token === import10.NG_VALUE_ACCESSOR) && (0 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._CKEditorComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._CKEditorComponent_0_3.context.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._CKEditorComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const CKEditorComponentNgFactory:import8.ComponentFactory<import0.CKEditorComponent> = new import8.ComponentFactory<import0.CKEditorComponent>('ckeditor',View_CKEditorComponent_Host0,import0.CKEditorComponent);
const styles_CKEditorComponent:any[] = ([] as any[]);
var renderType_CKEditorComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_CKEditorComponent,{});
export class View_CKEditorComponent0 extends import2.AppView<import0.CKEditorComponent> {
  _viewQuery_host_0:import11.QueryList<any>;
  _el_0:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_CKEditorComponent0,renderType_CKEditorComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._viewQuery_host_0 = new import11.QueryList<any>();
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'textarea',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._viewQuery_host_0.reset([new import12.ElementRef(this._el_0)]);
    this.context.host = this._viewQuery_host_0.first;
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return (null as any);
  }
}