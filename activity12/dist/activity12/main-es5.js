(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"row\">\n                <div class=\"col-lg-12 bg-info p-3\">\n                    <h1>Camile Joy V. Dela Cruz</h1>\n                </div>\n            </div>\n            <div class=\"row mx-auto mt-3\">\n                <div class=\"col-lg-2\"></div>\n                <div class=\"col-lg-8\">\n                    <button class=\"btn btn-outline-info btn-lg hvr-grow\" (click)=\"addUserModal(addUser)\">Add New User\n                            <span><i class=\"fa fa-plus\"></i></span>\n                    </button>\n                    <!-- <table mdbTable hover=\"true\" class=\"mt-2\"> \n                        <col width=\"200\"> \n                        <col width=\"200\"> \n                        <col width=\"300\"> \n                        <thead class=\"black white-text\">\n                            <tr>\n                                <th>Name</th>\n                                <th>Age</th>\n                                <th>Action</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let user of users\">\n                                <td class=\"text-light\">{{user.name}}</td>\n                                <td class=\"text-light\">{{user.age}}</td>\n                                <td>\n                                    <button class=\"btn btn-outline-warning btn-md mr-3 hvr-grow\" (click)=\"editUserModal(editUser, user._id)\">Edit\n                                        <span><i class=\"fa fa-edit\"></i></span>\n                                    </button>\n                                    <button class=\"btn btn-outline-danger btn-md hvr-buzz\" (click)=\"deleteModal(del, user._id)\">Delete\n                                        <span><i class=\"fa fa-trash\"></i></span>\n                                    </button>   \n                                </td>\n                            </tr>\n                        </tbody>\n                    </table> -->\n\n                    <table mdbTable #tableEl=\"mdbTable\" class=\"z-depth-1\" hover=\"true\"> \n                            <col width=\"200\"> \n                            <col width=\"200\"> \n                            <col width=\"300\">\n                        <thead class=\"black white-text\">\n                            <tr>\n                                <th *ngFor=\"let head of headElements; let i = index\" scope=\"col\">{{head}}</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let user of users; let i = index\">\n                                <th class=\"text-light\" *ngIf=\"i+1 >= mdbTablePagination.firstItemIndex && i < mdbTablePagination.lastItemIndex\"\n                                    scope=\"row\">{{user.name}}</th>\n                                <td class=\"text-light\" *ngIf=\"i+1 >= mdbTablePagination.firstItemIndex && i < mdbTablePagination.lastItemIndex\">{{user.age}}</td>\n                                <td *ngIf=\"i+1 >= mdbTablePagination.firstItemIndex && i < mdbTablePagination.lastItemIndex\">\n                                    <button class=\"btn btn-outline-warning btn-md mr-3 hvr-grow\" (click)=\"editUserModal(editUser, user._id)\">Edit\n                                        <span><i class=\"fa fa-edit\"></i></span>\n                                    </button>\n                                    <button class=\"btn btn-outline-danger btn-md hvr-buzz\" (click)=\"deleteModal(del, user._id)\">Delete\n                                        <span><i class=\"fa fa-trash\"></i></span>\n                                    </button>   \n                                </td>\n                            </tr>\n                        </tbody>\n                        <tfoot class=\"grey lighten-5 w-100\">\n                            <tr>\n                                <td colspan=\"4\">\n                                    <mdb-table-pagination [tableEl]=\"tableEl\" [searchDataSource]=\"users\"></mdb-table-pagination>\n                                </td>\n                            </tr>\n                        </tfoot>\n                    </table>\n                </div>\n                <div class=\"col-lg-2\"></div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-template #addUser let-modal>\n    <div class=\"modal-header bg-info\">\n        <h4 class=\"modal-title\">Add User</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click'); myform.reset()\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <form [formGroup]=\"myform\">\n            <div class=\"md-form form-md form-group\">\n                <input mdbInput type=\"text\" id=\"form1\" [ngClass]=\"{\n                    'border-bottom border-danger': name.invalid && (name.dirty || name.touched),\n                    'border-bottom border-success': name.valid && (name.dirty || name.touched)\n                }\" class=\"form-control form-control-md\" formControlName=\"name\" [(ngModel)]=\"addname\" name=\"addname\" required>\n                <label for=\"form1\" class=\"\">Name</label>\n                <div class=\"form-control-feedback\" *ngIf=\"name.errors && (name.dirty || name.touched)\">\n                    <small *ngIf=\"name.errors.required\" class=\"text-danger\">**Required</small>\n                </div>\n            </div>\n            <div class=\"md-form form-md form-group\">\n                <input mdbInput type=\"text\" id=\"form2\" [ngClass]=\"{\n                    'border-bottom border-danger': age.invalid && (age.dirty || age.touched),\n                    'border-bottom border-success': age.valid && (age.dirty || age.touched)\n                }\" class=\"form-control form-control-md\" formControlName=\"age\" [(ngModel)]=\"addage\" name=\"addage\" required>\n                <label for=\"form2\" class=\"\">Age</label>\n                <div class=\"form-control-feedback\" *ngIf=\"age.errors && (age.dirty || age.touched)\">\n                    <small *ngIf=\"age.errors.required\" class=\"text-danger\">**Required</small>\n                </div>\n            </div>\n            <button [hidden]=\"!myform.valid\" mdbBtn block=\"true\" type=\"button\" color=\"info\" class=\"form-control p-1 mb-1\" (click)=\"addNewUser(deletedModal)\" mdbWavesEffect><h3>Add</h3></button>\n        </form>\n    </div>\n</ng-template>\n\n<ng-template #editUser let-modal>\n    <div class=\"modal-header bg-warning\">\n        <h4 class=\"modal-title\">Edit User</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <form [formGroup]=\"myform\">\n            <div class=\"md-form form-md\">\n                <input mdbInput type=\"text\" id=\"form1\" [ngClass]=\"{\n                    'border-bottom border-danger': name.invalid && (name.dirty || name.touched),\n                    'border-bottom border-success': name.valid && (name.dirty || name.touched)\n                }\" class=\"form-control form-control-md\" formControlName=\"name\" [(ngModel)]=\"edtname\" name=\"edtname\" required>\n                <label for=\"form1\" class=\"\">Name</label>\n                <div class=\"form-control-feedback\" *ngIf=\"name.errors && (name.dirty || name.touched)\">\n                    <small *ngIf=\"name.errors.required\" class=\"text-danger\">**Required</small>\n                </div>\n            </div>\n            <div class=\"md-form form-md\">\n                <input mdbInput type=\"text\" id=\"form2\" [ngClass]=\"{\n                    'border-bottom border-danger': age.invalid && (age.dirty || age.touched),\n                    'border-bottom border-success': age.valid && (age.dirty || age.touched)\n                }\" class=\"form-control form-control-md\" formControlName=\"age\" [(ngModel)]=\"edtage\" name=\"edtage\" required>\n                <label for=\"form2\" class=\"\">Age</label>\n                <div class=\"form-control-feedback\" *ngIf=\"age.errors && (age.dirty || age.touched)\">\n                    <small *ngIf=\"age.errors.required\" class=\"text-danger\">**Required</small>\n                </div>\n            </div>\n            <button [hidden]=\"!myform.valid\" mdbBtn type=\"button\" color=\"warning\" outline=\"true\" (click)=\"editNewUser(deletedModal)\" class=\"form-control p-1 mb-1\" mdbWavesEffect><h3>Save</h3></button>\n        </form>\n    </div>\n</ng-template>\n\n<ng-template #del let-modal>\n    <div class=\"modal-header bg-danger text-light\">\n        <h5 class=\"modal-title\">Are you sure you want to delete?</h5>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body d-flex justify-content-center\">\n        <button type=\"button\" (click)=\"deleteSeed(deletedModal)\" class=\"btn btn-danger hvr-buzz\">OK</button>\n    </div>\n</ng-template>\n\n<ng-template #deletedModal let-modal>\n    <div class=\"modal-header bg-danger\">\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body d-flex justify-content-center\" [ngSwitch]=\"action\">\n        <h5 class=\"modal-title\" *ngSwitchCase=\"'delete'\">Record successfully deleted!</h5>\n        <h5 class=\"modal-title\" *ngSwitchCase=\"'update'\">Record successfully Updated!</h5>\n        <h5 class=\"modal-title\" *ngSwitchCase=\"'add'\">Record successfully Added!</h5>\n        <h5 class=\"modal-title\" *ngSwitchCase=\"'exist'\">User Name Already Exists!</h5>\n    </div>\n</ng-template>\n<router-outlet></router-outlet>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var routes = [];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user */ "./src/app/user.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent(userService, modalService, cdRef) {
                    this.userService = userService;
                    this.modalService = modalService;
                    this.cdRef = cdRef;
                    this.title = 'activity12';
                    this.elements = [];
                    this.previous = [];
                    this.headElements = ['Name', 'Age', 'Action'];
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.getUsers();
                    this.createFormControls();
                    this.createForm();
                };
                AppComponent.prototype.ngAfterViewInit = function () {
                    this.mdbTablePagination.setMaxVisibleItemsNumberTo(4);
                    this.mdbTablePagination.calculateFirstItemIndex();
                    this.mdbTablePagination.calculateLastItemIndex();
                    this.cdRef.detectChanges();
                };
                AppComponent.prototype.createFormControls = function () {
                    this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern("[^@#$*<>~`{}+=]*")]);
                    this.age = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern("[0-9]*"), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(2)]);
                };
                AppComponent.prototype.createForm = function () {
                    this.myform = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
                        name: this.name,
                        age: this.age
                    });
                };
                AppComponent.prototype.getUsers = function () {
                    var _this = this;
                    this.userService.getUsers().subscribe(function (data) {
                        _this.users = data;
                        _this.user = data;
                        _this.mdbTable.setDataSource(_this.users);
                        _this.users = _this.mdbTable.getDataSource();
                        _this.previous = _this.mdbTable.getDataSource();
                        _this.mdbTablePagination.setMaxVisibleItemsNumberTo(4);
                        _this.mdbTablePagination.calculateFirstItemIndex();
                        _this.mdbTablePagination.calculateLastItemIndex();
                    });
                };
                AppComponent.prototype.addNewUser = function (deletedModal) {
                    var _this = this;
                    var bool = true;
                    for (var i = 0; i < this.users.length; i++) {
                        if (this.users[i].name == this.addname) {
                            bool = false;
                        }
                    }
                    if (bool) {
                        var user = new _user__WEBPACK_IMPORTED_MODULE_4__["User"]();
                        user.name = this.addname;
                        user.age = this.addage;
                        this.userService.addUser(user).subscribe(function (data) {
                            _this.getUsers();
                        });
                        this.myform.reset();
                        this.modalService.dismissAll();
                        this.deletedModal(deletedModal, "add");
                    }
                    else {
                        this.deletedModal(deletedModal, "exist");
                    }
                };
                AppComponent.prototype.editNewUser = function (deletedModal) {
                    var _this = this;
                    var bool = true;
                    for (var i = 0; i < this.users.length; i++) {
                        if (this.users[i].name == this.edtname) {
                            bool = false;
                        }
                    }
                    if (bool) {
                        var user = new _user__WEBPACK_IMPORTED_MODULE_4__["User"]();
                        user.name = this.edtname;
                        user.age = this.edtage;
                        this.userService.updateUser(user, this.id).subscribe(function (data) {
                            _this.getUsers();
                        });
                        this.myform.reset();
                        this.modalService.dismissAll();
                        this.deletedModal(deletedModal, "update");
                    }
                    else {
                        this.deletedModal(deletedModal, "exist");
                    }
                };
                AppComponent.prototype.deleteSeed = function (deletedModal) {
                    var _this = this;
                    this.userService.deleteUser(this.id).subscribe(function (data) {
                        _this.getUsers();
                    });
                    this.modalService.dismissAll();
                    this.deletedModal(deletedModal, "delete");
                };
                AppComponent.prototype.addUserModal = function (addUser) {
                    this.modalService.open(addUser, { centered: true });
                };
                AppComponent.prototype.editUserModal = function (editUser, id) {
                    var _this = this;
                    this.id = id;
                    this.userService.getUser(id).subscribe(function (data) {
                        _this.user = data;
                        _this.getUsers();
                    });
                    for (var i = 0; i < this.user.length; i++) {
                        if (this.id == this.user[i]._id) {
                            this.edtname = this.user[i].name;
                            this.edtage = this.user[i].age;
                        }
                    }
                    this.modalService.open(editUser, { centered: true });
                };
                AppComponent.prototype.deleteModal = function (del, id) {
                    this.id = id;
                    this.modalService.open(del, { centered: true });
                };
                AppComponent.prototype.deletedModal = function (deletedModal, action) {
                    this.modalService.open(deletedModal, { centered: true });
                    this.action = action;
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
                { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbTablePaginationComponent"], { static: true })
            ], AppComponent.prototype, "mdbTablePagination", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbTableDirective"], { static: true })
            ], AppComponent.prototype, "mdbTable", void 0);
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["MDBBootstrapModule"].forRoot()
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/user.service.ts": 
        /*!*********************************!*\
          !*** ./src/app/user.service.ts ***!
          \*********************************/
        /*! exports provided: UserService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function () { return UserService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var UserService = /** @class */ (function () {
                function UserService(http) {
                    this.http = http;
                    this.url = "http://localhost:90";
                    this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
                }
                UserService.prototype.getUsers = function () {
                    return this.http.get(this.url + "/users");
                };
                UserService.prototype.getUser = function (id) {
                    return this.http.get(this.url + "/user/" + id);
                };
                UserService.prototype.addUser = function (user) {
                    return this.http.post(this.url + "/user", user, { headers: this.headers });
                };
                UserService.prototype.updateUser = function (user, id) {
                    return this.http.put(this.url + "/user/" + id, user, { headers: this.headers });
                };
                UserService.prototype.deleteUser = function (id) {
                    return this.http.delete(this.url + "/user/" + id);
                };
                return UserService;
            }());
            UserService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], UserService);
            /***/ 
        }),
        /***/ "./src/app/user.ts": 
        /*!*************************!*\
          !*** ./src/app/user.ts ***!
          \*************************/
        /*! exports provided: User */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function () { return User; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var User = /** @class */ (function () {
                function User() {
                }
                return User;
            }());
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\camil\Desktop\mean\activity12\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map