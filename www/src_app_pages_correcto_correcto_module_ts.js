"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_correcto_correcto_module_ts"],{

/***/ 9:
/*!***********************************************************!*\
  !*** ./src/app/pages/correcto/correcto-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CorrectoPageRoutingModule": () => (/* binding */ CorrectoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _correcto_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./correcto.page */ 6957);




const routes = [
    {
        path: '',
        component: _correcto_page__WEBPACK_IMPORTED_MODULE_0__.CorrectoPage
    }
];
let CorrectoPageRoutingModule = class CorrectoPageRoutingModule {
};
CorrectoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CorrectoPageRoutingModule);



/***/ }),

/***/ 5231:
/*!***************************************************!*\
  !*** ./src/app/pages/correcto/correcto.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CorrectoPageModule": () => (/* binding */ CorrectoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _correcto_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./correcto-routing.module */ 9);
/* harmony import */ var _correcto_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./correcto.page */ 6957);







let CorrectoPageModule = class CorrectoPageModule {
};
CorrectoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _correcto_routing_module__WEBPACK_IMPORTED_MODULE_0__.CorrectoPageRoutingModule
        ],
        declarations: [_correcto_page__WEBPACK_IMPORTED_MODULE_1__.CorrectoPage]
    })
], CorrectoPageModule);



/***/ }),

/***/ 6957:
/*!*************************************************!*\
  !*** ./src/app/pages/correcto/correcto.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CorrectoPage": () => (/* binding */ CorrectoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _correcto_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./correcto.page.html?ngResource */ 142);
/* harmony import */ var _correcto_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./correcto.page.scss?ngResource */ 3925);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_model_Usuario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/Usuario */ 2844);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/storage.service */ 1188);







let CorrectoPage = class CorrectoPage {
    constructor(activeroute, router, storage) {
        this.activeroute = activeroute;
        this.router = router;
        this.storage = storage;
        const user = new src_app_model_Usuario__WEBPACK_IMPORTED_MODULE_2__.Usuario;
    }
    ngOnInit() {
        this.getPassword();
        this.storage.clear();
    }
    getPassword() {
        this.storage.getItem('USER_DATA').then(resultado => {
            console.log(eval(resultado.value)[0].password);
            this.password = eval(resultado.value)[0].password;
        });
    }
    iniciarSesion() {
        this.router.navigate(['/login']);
    }
};
CorrectoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService }
];
CorrectoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-correcto',
        template: _correcto_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_correcto_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CorrectoPage);



/***/ }),

/***/ 3925:
/*!**************************************************************!*\
  !*** ./src/app/pages/correcto/correcto.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3JyZWN0by5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 142:
/*!**************************************************************!*\
  !*** ./src/app/pages/correcto/correcto.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"ion-padding-top ion-text-center\">\n      <div id=\"cabecera\">\n      <ion-label>\n        <img alt=\"logo\" height=\"70\" src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Logo_DuocUC.svg/2560px-Logo_DuocUC.svg.png\" > \n        <p>Sistema De Asistencia DuocUC</p>\n      </ion-label>\n    </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <img alt=\"logo\" height=\"fullscreen\" src=\"https://image.isu.pub/160104185053-9336257c03e9a1ff69b7ffca53c5baba/jpg/page_1.jpg\">\n  <ion-card-subtitle class=\"subtitulo\">\n    <h5>CORRECTO TU CONTRASEÑA ES </h5>\n  </ion-card-subtitle>\n  <ion-card-subtitle class=\"contrasenna\">\n    <p>{{this.password}}</p>\n  </ion-card-subtitle>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_correcto_correcto_module_ts.js.map