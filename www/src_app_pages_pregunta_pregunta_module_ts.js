"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_pregunta_pregunta_module_ts"],{

/***/ 3334:
/*!***********************************************************!*\
  !*** ./src/app/pages/pregunta/pregunta-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreguntaPageRoutingModule": () => (/* binding */ PreguntaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pregunta_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pregunta.page */ 902);




const routes = [
    {
        path: '',
        component: _pregunta_page__WEBPACK_IMPORTED_MODULE_0__.PreguntaPage
    }
];
let PreguntaPageRoutingModule = class PreguntaPageRoutingModule {
};
PreguntaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PreguntaPageRoutingModule);



/***/ }),

/***/ 8278:
/*!***************************************************!*\
  !*** ./src/app/pages/pregunta/pregunta.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreguntaPageModule": () => (/* binding */ PreguntaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _pregunta_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pregunta-routing.module */ 3334);
/* harmony import */ var _pregunta_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pregunta.page */ 902);







let PreguntaPageModule = class PreguntaPageModule {
};
PreguntaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _pregunta_routing_module__WEBPACK_IMPORTED_MODULE_0__.PreguntaPageRoutingModule
        ],
        declarations: [_pregunta_page__WEBPACK_IMPORTED_MODULE_1__.PreguntaPage]
    })
], PreguntaPageModule);



/***/ }),

/***/ 902:
/*!*************************************************!*\
  !*** ./src/app/pages/pregunta/pregunta.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreguntaPage": () => (/* binding */ PreguntaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _pregunta_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pregunta.page.html?ngResource */ 7084);
/* harmony import */ var _pregunta_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pregunta.page.scss?ngResource */ 6047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);





let PreguntaPage = class PreguntaPage {
    constructor(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.respuesta = '';
        this.activatedRoute.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.usuario = this.router.getCurrentNavigation().extras.state.usuario;
            }
            else {
                this.router.navigate(['/login']);
            }
        });
    }
    ngOnInit() {
    }
    ValidarRespuestaSecreta() {
        if (this.usuario.respuestaSecreta == this.respuesta) { //usuario.respuestaSecreta
            const navigationExtras = {
                state: {
                    pass: this.usuario
                }
            };
            this.router.navigate(['/correcto'], navigationExtras);
            /*alert('Correcto !!! tu clave es ' + this.usuario.password)*/
        }
        else {
            this.router.navigate(['/incorrecto']);
        }
    }
};
PreguntaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
PreguntaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-pregunta',
        template: _pregunta_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_pregunta_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PreguntaPage);



/***/ }),

/***/ 6047:
/*!**************************************************************!*\
  !*** ./src/app/pages/pregunta/pregunta.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n  --padding-end: 20px;\n  --padding-start: 20px;\n  --background: url(https://www.sabbagharquitectos.com/wp-content/thumbgen_cache/2e14ef5af6a6edae46fffe694e60751e.jpg) 0 0/100% 100% no-repeat;\n}\n\nion-button {\n  --background:#3c8ed5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZWd1bnRhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNElBQUE7QUFDSjs7QUFFQTtFQUNJLG9CQUFBO0FBQ0oiLCJmaWxlIjoicHJlZ3VudGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDIwcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybChodHRwczovL3d3dy5zYWJiYWdoYXJxdWl0ZWN0b3MuY29tL3dwLWNvbnRlbnQvdGh1bWJnZW5fY2FjaGUvMmUxNGVmNWFmNmE2ZWRhZTQ2ZmZmZTY5NGU2MDc1MWUuanBnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbntcclxuICAgIC0tYmFja2dyb3VuZDojM2M4ZWQ1O1xyXG59Il19 */";

/***/ }),

/***/ 7084:
/*!**************************************************************!*\
  !*** ./src/app/pages/pregunta/pregunta.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"ion-padding-top ion-text-center\">\n      <div id=\"cabecera\">\n      <ion-label>\n        <img alt=\"logo\" height=\"70\" src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Logo_DuocUC.svg/2560px-Logo_DuocUC.svg.png\" > \n        <p>Sistema De Asistencia DuocUC</p>\n      </ion-label>\n    </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"ion-text-center ion-padding-vertical\">\n    <ion-card-subtitle>{{ usuario.preguntaSecreta }}</ion-card-subtitle>\n    <ion-input type=\"text\" [(ngModel)]= \"respuesta\" placeholder=\"Ingresa tu Respuesta\"></ion-input>\n    <ion-col size=\"12\">\n      <ion-button #botonIngresar shape=\"block\" (click)=\"ValidarRespuestaSecreta()\">Recuperar Contraseña</ion-button>\n      </ion-col>\n  </ion-card>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_pregunta_pregunta_module_ts.js.map