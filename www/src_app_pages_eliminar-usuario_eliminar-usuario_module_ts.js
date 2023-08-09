"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_eliminar-usuario_eliminar-usuario_module_ts"],{

/***/ 9562:
/*!***************************************************************************!*\
  !*** ./src/app/pages/eliminar-usuario/eliminar-usuario-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EliminarUsuarioPageRoutingModule": () => (/* binding */ EliminarUsuarioPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _eliminar_usuario_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eliminar-usuario.page */ 9286);




const routes = [
    {
        path: '',
        component: _eliminar_usuario_page__WEBPACK_IMPORTED_MODULE_0__.EliminarUsuarioPage
    }
];
let EliminarUsuarioPageRoutingModule = class EliminarUsuarioPageRoutingModule {
};
EliminarUsuarioPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EliminarUsuarioPageRoutingModule);



/***/ }),

/***/ 3478:
/*!*******************************************************************!*\
  !*** ./src/app/pages/eliminar-usuario/eliminar-usuario.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EliminarUsuarioPageModule": () => (/* binding */ EliminarUsuarioPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _eliminar_usuario_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eliminar-usuario-routing.module */ 9562);
/* harmony import */ var _eliminar_usuario_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eliminar-usuario.page */ 9286);







let EliminarUsuarioPageModule = class EliminarUsuarioPageModule {
};
EliminarUsuarioPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _eliminar_usuario_routing_module__WEBPACK_IMPORTED_MODULE_0__.EliminarUsuarioPageRoutingModule
        ],
        declarations: [_eliminar_usuario_page__WEBPACK_IMPORTED_MODULE_1__.EliminarUsuarioPage]
    })
], EliminarUsuarioPageModule);



/***/ }),

/***/ 9286:
/*!*****************************************************************!*\
  !*** ./src/app/pages/eliminar-usuario/eliminar-usuario.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EliminarUsuarioPage": () => (/* binding */ EliminarUsuarioPage)
/* harmony export */ });
/* harmony import */ var _home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _eliminar_usuario_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eliminar-usuario.page.html?ngResource */ 2729);
/* harmony import */ var _eliminar_usuario_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eliminar-usuario.page.scss?ngResource */ 5365);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_model_Message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/Message */ 730);
/* harmony import */ var src_app_model_MessageEnum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/MessageEnum */ 2854);
/* harmony import */ var src_app_model_Usuario__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/Usuario */ 2844);
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/database.service */ 4382);










let EliminarUsuarioPage = class EliminarUsuarioPage {
  constructor(router, db) {
    this.router = router;
    this.db = db;
    this.usuarios = new Array();
    this.cantidad = 0;
  }

  ionViewWillEnter() {
    this.getUsuarios();
  }

  getUserId(index, item) {
    return item.correo;
  }

  getUsuarios() {
    var _this = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const rs = yield _this.db.readUsers();
        (0,src_app_model_Message__WEBPACK_IMPORTED_MODULE_3__.log)('DeleteUserPage.getUsuarios', `Cantidad de usuarios: ${rs.values.length}`);
        _this.cantidad = rs.values.length;
        _this.usuarios = new Array();
        rs.values.forEach((value, index) => {
          let usu = new src_app_model_Usuario__WEBPACK_IMPORTED_MODULE_5__.Usuario();
          usu.setUser(value.correo, value.password, value.nombre, value.preguntaSecreta, value.respuestaSecreta, '', false);

          _this.usuarios.push(usu);
        });
      } catch (err) {
        (0,src_app_model_Message__WEBPACK_IMPORTED_MODULE_3__.showAlertError)('DeleteUserPage.getUsuarios', err);
      }
    })();
  }

  eliminarUsuario($event) {
    var _this2 = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const correo = $event.correo;

      const usuToDelete = _this2.usuarios.find(usu => usu.correo === correo);

      const resp = yield (0,src_app_model_Message__WEBPACK_IMPORTED_MODULE_3__.showAlertYesNoDUOC)(`¿Está seguro que desea eliminar el usuario ${usuToDelete.nombre}?`);

      if (resp === src_app_model_MessageEnum__WEBPACK_IMPORTED_MODULE_4__.MessageEnum.YES) {
        yield _this2.db.deleteUser(correo);

        _this2.getUsuarios();
      }
    })();
  }

  volver() {
    this.router.navigate(['login']);
  }

};

EliminarUsuarioPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_6__.DatabaseService
}];

EliminarUsuarioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-eliminar-usuario',
  template: _eliminar_usuario_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_eliminar_usuario_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], EliminarUsuarioPage);


/***/ }),

/***/ 5365:
/*!******************************************************************************!*\
  !*** ./src/app/pages/eliminar-usuario/eliminar-usuario.page.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbGltaW5hci11c3VhcmlvLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 2729:
/*!******************************************************************************!*\
  !*** ./src/app/pages/eliminar-usuario/eliminar-usuario.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      <img alt=\"logo\" height=\"70\" src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Logo_DuocUC.svg/2560px-Logo_DuocUC.svg.png\" > \n    <h4 class=\"ion-text-center\"></h4>\n    </ion-title>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-title>\n      Eliminación de usuarios\n      <br>\n      <span class=\"cantidad-usuarios\" *ngIf=\"cantidad === 0\">\n        No existen usuarios en la base de datos\n      </span>\n      <span class=\"cantidad-usuarios\" *ngIf=\"cantidad === 1\">\n        Existe 1 usuario en la base de datos\n      </span>\n      <span class=\"cantidad-usuarios\" *ngIf=\"cantidad > 1\">\n        Existen {{cantidad}} usuario en la base de datos\n      </span>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <a id=\"topOfPage\" href=\"#topOfPage\"></a>\n \n  <ion-card *ngFor=\"let u of usuarios; let i=index; trackBy: getUserId\">\n\n    <ion-card-header>\n      <h4>{{u.nombre}}</h4>\n    </ion-card-header>\n  \n    <ion-card-content>\n      <ion-grid fixed>\n        <ion-row>\n          <ion-col size=\"6\">Correo</ion-col>\n          <ion-col size=\"6\">{{u.correo}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\">Contraseña</ion-col>\n          <ion-col size=\"6\">{{u.password}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\">Pregunta secreta</ion-col>\n          <ion-col size=\"6\">{{u.preguntaSecreta}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\">Respuesta secreta</ion-col>\n          <ion-col size=\"6\">{{u.respuestaSecreta}}</ion-col>\n        </ion-row>\n      </ion-grid>\n      \n    </ion-card-content>\n\n    <!-- <ion-button (click)=\"editarUsuario(u)\">\n      <ion-icon slot=\"icon-only\" name=\"pencil-outline\"></ion-icon>\n    </ion-button> -->\n\n    <ion-button (click)=\"eliminarUsuario(u)\">\n      <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n    </ion-button>\n\n  </ion-card>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-button (click)=\"volver()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n      Volver\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_eliminar-usuario_eliminar-usuario_module_ts.js.map