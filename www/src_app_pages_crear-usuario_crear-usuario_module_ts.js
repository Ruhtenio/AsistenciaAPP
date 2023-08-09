"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_crear-usuario_crear-usuario_module_ts"],{

/***/ 710:
/*!*********************************************************************!*\
  !*** ./src/app/pages/crear-usuario/crear-usuario-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrearUsuarioPageRoutingModule": () => (/* binding */ CrearUsuarioPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _crear_usuario_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crear-usuario.page */ 4842);




const routes = [
    {
        path: '',
        component: _crear_usuario_page__WEBPACK_IMPORTED_MODULE_0__.CrearUsuarioPage
    }
];
let CrearUsuarioPageRoutingModule = class CrearUsuarioPageRoutingModule {
};
CrearUsuarioPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CrearUsuarioPageRoutingModule);



/***/ }),

/***/ 5501:
/*!*************************************************************!*\
  !*** ./src/app/pages/crear-usuario/crear-usuario.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrearUsuarioPageModule": () => (/* binding */ CrearUsuarioPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _crear_usuario_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crear-usuario-routing.module */ 710);
/* harmony import */ var _crear_usuario_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crear-usuario.page */ 4842);







let CrearUsuarioPageModule = class CrearUsuarioPageModule {
};
CrearUsuarioPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _crear_usuario_routing_module__WEBPACK_IMPORTED_MODULE_0__.CrearUsuarioPageRoutingModule
        ],
        declarations: [_crear_usuario_page__WEBPACK_IMPORTED_MODULE_1__.CrearUsuarioPage]
    })
], CrearUsuarioPageModule);



/***/ }),

/***/ 4842:
/*!***********************************************************!*\
  !*** ./src/app/pages/crear-usuario/crear-usuario.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrearUsuarioPage": () => (/* binding */ CrearUsuarioPage)
/* harmony export */ });
/* harmony import */ var _home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _crear_usuario_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crear-usuario.page.html?ngResource */ 4885);
/* harmony import */ var _crear_usuario_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crear-usuario.page.scss?ngResource */ 5376);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_model_Message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/Message */ 730);
/* harmony import */ var src_app_model_Usuario__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/Usuario */ 2844);
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/database.service */ 4382);









let CrearUsuarioPage = class CrearUsuarioPage {
  constructor(router, db) {
    this.router = router;
    this.db = db;
    this.correo = '';
    this.password = '';
    this.nombreUsuario = '';
    this.preguntaSecreta = '';
    this.respuesta = '';
    this.sesionActiva = '';
    this.cantidad = 0;
  }

  ionViewWillEnter() {
    this.setUsersLength();
  }

  setUsersLength() {
    this.db.readUsers().then(resp => {
      this.cantidad = resp.values.length;
    }).catch(err => {
      (0,src_app_model_Message__WEBPACK_IMPORTED_MODULE_3__.showAlertError)('CreateUserPage.setUsersLenght', err);
    });
  }

  registrarUsuario() {
    var _this = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const usu = new src_app_model_Usuario__WEBPACK_IMPORTED_MODULE_4__.Usuario();
      const msg = usu.validarCamposUsuario(_this.correo, _this.password, _this.nombreUsuario, _this.preguntaSecreta, _this.respuesta);

      if (msg !== '') {
        (0,src_app_model_Message__WEBPACK_IMPORTED_MODULE_3__.showAlertDUOC)(msg);
        return;
      }

      yield _this.db.createUser(_this.correo, _this.password, _this.nombreUsuario, _this.preguntaSecreta, _this.respuesta, 'N').then(resp => {
        if (resp.changes.changes === 1) {
          (0,src_app_model_Message__WEBPACK_IMPORTED_MODULE_3__.showAlertDUOC)('Su cuenta fue creada con éxito');

          _this.router.navigate(['login']);
        } else {
          (0,src_app_model_Message__WEBPACK_IMPORTED_MODULE_3__.showAlertDUOC)('Su cuenta no pudo ser creada con éxito. Comuníquese con el Administrador del Sistema o intente nuevamente más tarde');
        }
      }).catch(err => {
        (0,src_app_model_Message__WEBPACK_IMPORTED_MODULE_3__.showAlertError)('CreateUserPage.registerNewUser', err);
      });
    })();
  }

  volverAtras() {
    this.router.navigate(['login']);
  }

};

CrearUsuarioPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_5__.DatabaseService
}];

CrearUsuarioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-crear-usuario',
  template: _crear_usuario_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_crear_usuario_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], CrearUsuarioPage);


/***/ }),

/***/ 5376:
/*!************************************************************************!*\
  !*** ./src/app/pages/crear-usuario/crear-usuario.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhci11c3VhcmlvLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 4885:
/*!************************************************************************!*\
  !*** ./src/app/pages/crear-usuario/crear-usuario.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      <img alt=\"logo\" height=\"70\" src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Logo_DuocUC.svg/2560px-Logo_DuocUC.svg.png\" > \n    <h4 class=\"ion-text-center\"></h4>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" class=\"background\">\n  <div class=\"ion-padding-vertical\">\n    <ion-card class=\"ion-text-center\" class=\"filter\">\n      <ion-card-title class=\"ion-text-center\">\n        <ion-label>\n          <h1>Ingresa tus datos</h1>\n        </ion-label>\n      </ion-card-title>\n      <ion-card-content>\n        <ion-item>\n          <ion-label position=\"floating\">Correo</ion-label>\n          <ion-input class=\"title-inputs\" type=\"text\" placeholder=\"Ingrese su Correo\" [(ngModel)]=\"correo\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Contraseña</ion-label>\n          <ion-input class=\"title-inputs\" type=\"password\" placeholder=\"Ingrese su Contraseña\" [(ngModel)]=\"password\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Nombre</ion-label>\n          <ion-input class=\"title-inputs\" type=\"text\" placeholder=\"Ingrese su Nombre\" [(ngModel)]=\"nombreUsuario\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Pregunta secreta</ion-label>\n          <ion-input class=\"title-inputs\" type=\"text\" placeholder=\"Ingrese su Pregunta secreta\" [(ngModel)]=\"preguntaSecreta\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Respuesta secreta</ion-label>\n          <ion-input class=\"title-inputs\" type=\"text\" placeholder=\"Ingrese su Respuesta secreta\" [(ngModel)]=\"respuesta\"></ion-input>\n        </ion-item>\n      </ion-card-content>\n      <ion-button shape=\"block\" (click)=\"registrarUsuario()\">Registrar</ion-button>\n      <ion-button shape=\"block\" (click)=\"volverAtras()\">Volver</ion-button>\n    </ion-card>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_crear-usuario_crear-usuario_module_ts.js.map