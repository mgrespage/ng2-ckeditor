/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../src/ckeditor.module';
import * as import2 from '@angular/core/src/di/injector';
class CKEditorModuleInjector extends import0.NgModuleInjector<import1.CKEditorModule> {
  _CKEditorModule_0:import1.CKEditorModule;
  constructor(parent:import2.Injector) {
    super(parent,([] as any[]),([] as any[]));
  }
  createInternal():import1.CKEditorModule {
    this._CKEditorModule_0 = new import1.CKEditorModule();
    return this._CKEditorModule_0;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import1.CKEditorModule)) { return this._CKEditorModule_0; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const CKEditorModuleNgFactory:import0.NgModuleFactory<import1.CKEditorModule> = new import0.NgModuleFactory(CKEditorModuleInjector,import1.CKEditorModule);