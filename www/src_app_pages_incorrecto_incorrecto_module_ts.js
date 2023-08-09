"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_incorrecto_incorrecto_module_ts"],{

/***/ 6716:
/*!***************************************************************!*\
  !*** ./src/app/pages/incorrecto/incorrecto-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncorrectoPageRoutingModule": () => (/* binding */ IncorrectoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _incorrecto_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./incorrecto.page */ 8869);




const routes = [
    {
        path: '',
        component: _incorrecto_page__WEBPACK_IMPORTED_MODULE_0__.IncorrectoPage
    }
];
let IncorrectoPageRoutingModule = class IncorrectoPageRoutingModule {
};
IncorrectoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], IncorrectoPageRoutingModule);



/***/ }),

/***/ 6627:
/*!*******************************************************!*\
  !*** ./src/app/pages/incorrecto/incorrecto.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncorrectoPageModule": () => (/* binding */ IncorrectoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _incorrecto_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./incorrecto-routing.module */ 6716);
/* harmony import */ var _incorrecto_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./incorrecto.page */ 8869);







let IncorrectoPageModule = class IncorrectoPageModule {
};
IncorrectoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _incorrecto_routing_module__WEBPACK_IMPORTED_MODULE_0__.IncorrectoPageRoutingModule
        ],
        declarations: [_incorrecto_page__WEBPACK_IMPORTED_MODULE_1__.IncorrectoPage]
    })
], IncorrectoPageModule);



/***/ }),

/***/ 8869:
/*!*****************************************************!*\
  !*** ./src/app/pages/incorrecto/incorrecto.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncorrectoPage": () => (/* binding */ IncorrectoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _incorrecto_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./incorrecto.page.html?ngResource */ 2138);
/* harmony import */ var _incorrecto_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./incorrecto.page.scss?ngResource */ 1864);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let IncorrectoPage = class IncorrectoPage {
    constructor() { }
    ngOnInit() {
    }
};
IncorrectoPage.ctorParameters = () => [];
IncorrectoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-incorrecto',
        template: _incorrecto_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_incorrecto_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], IncorrectoPage);



/***/ }),

/***/ 1864:
/*!******************************************************************!*\
  !*** ./src/app/pages/incorrecto/incorrecto.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmNvcnJlY3RvLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 2138:
/*!******************************************************************!*\
  !*** ./src/app/pages/incorrecto/incorrecto.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"ion-padding-top ion-text-center\">\n      <div id=\"cabecera\">\n      <ion-label>\n        <img alt=\"logo\" height=\"70\" src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Logo_DuocUC.svg/2560px-Logo_DuocUC.svg.png\" > \n        <p>Sistema De Asistencia DuocUC</p>\n      </ion-label>\n    </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <p class=\"ion-text-center\">Reingrese su correo o la respuesta correspondiente</p>\n  <img alt = \"logo\" height=\"fullscreen\" src=\"https://www.duoc.cl/wp-content/uploads/2020/07/46398690441_cf0955b62b_c.jpg\">\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_incorrecto_incorrecto_module_ts.js.map