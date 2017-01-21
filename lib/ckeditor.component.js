"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Imports
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var CKEditorLibrary = require('ckeditor/index');
var CKEditor = (function () {
    function CKEditor() {
        this.ckeditor = CKEditorLibrary;
    }
    CKEditor.prototype.initialize = function () {
        return this.ckeditor;
    };
    return CKEditor;
}());
CKEditor = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], CKEditor);
exports.CKEditor = CKEditor;
/**
 * CKEditor component
 * Usage :
 *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500"></ckeditor>
 */
var CKEditorComponent = CKEditorComponent_1 = (function () {
    /**
     * Constructor
     */
    function CKEditorComponent(zone, ckeditor) {
        this.change = new core_1.EventEmitter();
        this.ready = new core_1.EventEmitter();
        this.blur = new core_1.EventEmitter();
        this.focus = new core_1.EventEmitter();
        this._value = '';
        this.zone = zone;
        this.editor = ckeditor.initialize();
    }
    Object.defineProperty(CKEditorComponent.prototype, "value", {
        get: function () { return this._value; },
        set: function (v) {
            if (v !== this._value) {
                this._value = v;
                this.onChange(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     * On component destroy
     */
    CKEditorComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        if (this.instance) {
            setTimeout(function () {
                _this.instance.removeAllListeners();
                _this.instance.destroy();
                _this.instance = null;
            });
        }
    };
    /**
     * On component view init
     */
    CKEditorComponent.prototype.ngAfterViewInit = function () {
        // Configuration
        this.ckeditorInit(this.config || {});
    };
    /**
     * Value update process
     */
    CKEditorComponent.prototype.updateValue = function (value) {
        var _this = this;
        this.zone.run(function () {
            _this.value = value;
            _this.onChange(value);
            _this.onTouched();
            _this.change.emit(value);
        });
    };
    /**
     * CKEditor init
     */
    CKEditorComponent.prototype.ckeditorInit = function (config) {
        var _this = this;
        if (!this.editor) {
            console.error('Please include CKEditor in your page');
            return;
        }
        // CKEditor replace textarea
        this.instance = this.editor.replace(this.host.nativeElement, config);
        // Set initial value
        this.instance.setData(this.value);
        // listen for instanceReady event
        this.instance.on('instanceReady', function (evt) {
            // send the evt to the EventEmitter
            _this.ready.emit(evt);
        });
        // CKEditor change event
        this.instance.on('change', function () {
            _this.onTouched();
            var value = _this.instance.getData();
            // Debounce update
            if (_this.debounce) {
                if (_this.debounceTimeout)
                    clearTimeout(_this.debounceTimeout);
                _this.debounceTimeout = setTimeout(function () {
                    _this.updateValue(value);
                    _this.debounceTimeout = null;
                }, parseInt(_this.debounce));
            }
            else {
                _this.updateValue(value);
            }
        });
        // CKEditor blur event
        this.instance.on('blur', function (evt) {
            _this.blur.emit(evt);
        });
        // CKEditor focus event
        this.instance.on('focus', function (evt) {
            _this.focus.emit(evt);
        });
        // CKEditor fileUploadRequest event
        this.instance.on('fileUploadRequest', function (evt) {
            _this.focus.emit(evt);
        });
        // CKEditor fileUploadResponse event
        this.instance.on('fileUploadResponse', function (evt) {
            _this.focus.emit(evt);
        });
    };
    /**
     * Implements ControlValueAccessor
     */
    CKEditorComponent.prototype.writeValue = function (value) {
        this._value = value;
        if (this.instance)
            this.instance.setData(value);
    };
    CKEditorComponent.prototype.onChange = function (_) { };
    CKEditorComponent.prototype.onTouched = function () { };
    CKEditorComponent.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    CKEditorComponent.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    return CKEditorComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CKEditorComponent.prototype, "config", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CKEditorComponent.prototype, "debounce", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CKEditorComponent.prototype, "change", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CKEditorComponent.prototype, "ready", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CKEditorComponent.prototype, "blur", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CKEditorComponent.prototype, "focus", void 0);
__decorate([
    core_1.ViewChild('host'),
    __metadata("design:type", Object)
], CKEditorComponent.prototype, "host", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], CKEditorComponent.prototype, "value", null);
CKEditorComponent = CKEditorComponent_1 = __decorate([
    core_1.Component({
        selector: 'ckeditor',
        providers: [
            {
                provide: forms_1.NG_VALUE_ACCESSOR,
                useExisting: core_1.forwardRef(function () { return CKEditorComponent_1; }),
                multi: true
            }
        ],
        template: "<textarea #host></textarea>",
    }),
    __metadata("design:paramtypes", [core_1.NgZone, CKEditor])
], CKEditorComponent);
exports.CKEditorComponent = CKEditorComponent;
var CKEditorComponent_1;
//# sourceMappingURL=ckeditor.component.js.map