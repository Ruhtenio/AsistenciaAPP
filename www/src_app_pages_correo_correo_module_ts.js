"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_correo_correo_module_ts"],{

/***/ 1892:
/*!*******************************************************!*\
  !*** ./src/app/pages/correo/correo-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CorreoPageRoutingModule": () => (/* binding */ CorreoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _correo_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./correo.page */ 5290);




const routes = [
    {
        path: '',
        component: _correo_page__WEBPACK_IMPORTED_MODULE_0__.CorreoPage
    }
];
let CorreoPageRoutingModule = class CorreoPageRoutingModule {
};
CorreoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CorreoPageRoutingModule);



/***/ }),

/***/ 9424:
/*!***********************************************!*\
  !*** ./src/app/pages/correo/correo.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CorreoPageModule": () => (/* binding */ CorreoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _correo_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./correo-routing.module */ 1892);
/* harmony import */ var _correo_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./correo.page */ 5290);







let CorreoPageModule = class CorreoPageModule {
};
CorreoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _correo_routing_module__WEBPACK_IMPORTED_MODULE_0__.CorreoPageRoutingModule
        ],
        declarations: [_correo_page__WEBPACK_IMPORTED_MODULE_1__.CorreoPage]
    })
], CorreoPageModule);



/***/ }),

/***/ 5290:
/*!*********************************************!*\
  !*** ./src/app/pages/correo/correo.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CorreoPage": () => (/* binding */ CorreoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _correo_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./correo.page.html?ngResource */ 8072);
/* harmony import */ var _correo_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./correo.page.scss?ngResource */ 6117);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ 7053);
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/database.service */ 4382);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/storage.service */ 1188);








let CorreoPage = class CorreoPage {
    constructor(router, auth, db, storage) {
        this.router = router;
        this.auth = auth;
        this.db = db;
        this.storage = storage;
        this.correo = '';
    }
    ngOnInit() {
    }
    ingresarValidarRespuestaSecreta() {
        this.db.buscarCorreo(this.correo).then((res) => {
            if (res.length > 0) {
                this.storage.setItem('USER_DATA', JSON.stringify(res));
                this.router.navigate(['correcto']);
            }
            else {
                this.router.navigate(['incorrecto']);
            }
        });
    }
    iniciarSesion() {
        this.auth.logout();
    }
};
CorreoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_3__.DatabaseService },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService }
];
CorreoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-correo',
        template: _correo_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_correo_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CorreoPage);



/***/ }),

/***/ 6117:
/*!**********************************************************!*\
  !*** ./src/app/pages/correo/correo.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n  --padding-end: 20px;\n  --padding-start: 20px;\n  --background: url(https://www.sabbagharquitectos.com/wp-content/thumbgen_cache/2e14ef5af6a6edae46fffe694e60751e.jpg) 0 0/100% 100% no-repeat;\n}\n\nion-button {\n  --background:#3c8ed5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcnJlby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDRJQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQkFBQTtBQUNKIiwiZmlsZSI6ImNvcnJlby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0tcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMjBweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMjBweDtcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vd3d3LnNhYmJhZ2hhcnF1aXRlY3Rvcy5jb20vd3AtY29udGVudC90aHVtYmdlbl9jYWNoZS8yZTE0ZWY1YWY2YTZlZGFlNDZmZmZlNjk0ZTYwNzUxZS5qcGcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG59XHJcblxyXG5pb24tYnV0dG9ue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiMzYzhlZDU7XHJcbn0iXX0= */";

/***/ }),

/***/ 8072:
/*!**********************************************************!*\
  !*** ./src/app/pages/correo/correo.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"ion-padding-top ion-text-center\">\n      <div id=\"cabecera\">\n      <ion-label>\n        <img alt=\"logo\" height=\"70\" src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Logo_DuocUC.svg/2560px-Logo_DuocUC.svg.png\" > \n        <p>Sistema De Asistencia DuocUC</p>\n      </ion-label>\n    </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n<ion-card class=\"ion-text-center ion-padding-vertical\">\n  <ion-card-subtitle>Ingresar Correo</ion-card-subtitle>\n  <ion-input type=\"text\" placeholder=\"Ingresa tu Correo\" [(ngModel)]= \"correo\"></ion-input>\n  <ion-col size=\"12\">\n  <ion-button #botonIngresar shape=\"block\" (click)=\"ingresarValidarRespuestaSecreta()\">Recuperar Contraseña</ion-button>\n  </ion-col>\n</ion-card>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_correo_correo_module_ts.js.map