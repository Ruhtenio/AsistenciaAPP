"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 3403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 1053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 3403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3058);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var _home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.html?ngResource */ 6752);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 8433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ 7053);
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/database.service */ 4382);
/* harmony import */ var src_app_model_Message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/Message */ 730);





 // Las clases Router y NavigationExtras son necesarias para que la página login le pase
// el nombre de usuario a la página home

 // La clase ToastController sirve para mostrar mensajes emergente que duran un par de segundos





let LoginPage = class LoginPage {
  constructor(router, toastController, animationController, auth, db) {
    this.router = router;
    this.toastController = toastController;
    this.animationController = animationController;
    this.auth = auth;
    this.db = db;
    this.correo = '';
    this.password = '';
    this.correo = 'atorres@duocuc.cl';
    this.password = '1234';
  }

  ngOnInit() {
    this.botonIn();
    /*
      Las siguientes 3 líneas de código sirven para lo siguiente:
        Caso 1: Si las comentas, la página quedará lista para ingresar el nombre de usuario y la password
        Caso 2: Si dejas las instrucciones sin comentar, entonces entrará inmediatamente a la página home,
          usando el usuario por defecto "cgomezvega" con la password "123". Lo anterior es muy útil
          para el caso en que ya quedó lista la página de login y me interesa probar las otras páginas,
          de este modo se saltará el login y no tendrás que estar digitando los datos todo el tiempo.
    */
    // this.usuario.correo = 'cgomez';
    // this.usuario.password = '5678';
    // this.ingresar();
  }

  botonIn() {
    const animation = this.animationController.create().addElement(this.botonIngresar.nativeElement).duration(1500).iterations(Infinity).keyframes([{
      offset: 0,
      boxShadow: "0 0 0 0 rgba(44, 103, 255, 0.4)"
    }, {
      offset: 0.7,
      boxShadow: "0 0 0 10px rgba(44, 103, 255, 0)"
    }, {
      offset: 1,
      boxShadow: "0 0 0 0 rgba(44, 103, 255, 0)"
    }]);
    animation.play();
  }

  ingresar() {
    var _this = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.auth.login(_this.correo, _this.password); //this.mostrarMensaje('¡Bienvenido!');


      const navigationExtras = {
        state: {
          usuario: _this.usuario
        }
      };

      _this.router.navigate(['/home'], navigationExtras); // Navegamos hacia el Home y enviamos la información extra

    })();
  }
  /**
   * Muestra un toast al usuario
   *
   * @param mensaje Mensaje a presentar al usuario
   * @param duracion Duración el toast, este es opcional
   */


  mostrarMensaje(mensaje, duracion) {
    var _this2 = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this2.toastController.create({
        message: mensaje,
        duration: duracion ? duracion : 2000
      });
      toast.present();
    })();
  }

  ingresarValidarCorreo() {
    //this.auth.login(this.correo, this.password);
    this.router.navigate(['/correo']);
  }

  eliminar() {
    var _this3 = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      (0,src_app_model_Message__WEBPACK_IMPORTED_MODULE_5__.log)('LoginPage.eliminar', 'Navegar a página de eliminar usuarios');

      _this3.router.navigate(['eliminar-usuario']);
    })();
  }

  registrar() {
    (0,src_app_model_Message__WEBPACK_IMPORTED_MODULE_5__.log)('LoginPage.registrar', 'Navegar a página crear usuario nuevo');
    this.router.navigate(['crear-usuario']);
  }

};

LoginPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AnimationController
}, {
  type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
}, {
  type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_4__.DatabaseService
}];

LoginPage.propDecorators = {
  botonIngresar: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
    args: ['botonIngresar', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef,
      static: true
    }]
  }]
};
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-login',
  template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], LoginPage);


/***/ }),

/***/ 8433:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n  --padding-end: 20px;\n  --padding-start: 20px;\n  --background: url(https://www.sabbagharquitectos.com/wp-content/thumbgen_cache/2e14ef5af6a6edae46fffe694e60751e.jpg) 0 0/100% 100% no-repeat;\n}\n\nion-item {\n  --padding-bottom: 10px;\n}\n\nion-button {\n  --background:#3c8ed5;\n}\n\nion-toolbar {\n  --background:#ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNElBQUE7QUFDSjs7QUFFQTtFQUNJLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksb0JBQUE7QUFDSiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0tcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMjBweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMjBweDtcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vd3d3LnNhYmJhZ2hhcnF1aXRlY3Rvcy5jb20vd3AtY29udGVudC90aHVtYmdlbl9jYWNoZS8yZTE0ZWY1YWY2YTZlZGFlNDZmZmZlNjk0ZTYwNzUxZS5qcGcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG5cclxufVxyXG5pb24taXRlbXtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1idXR0b257XHJcbiAgICAtLWJhY2tncm91bmQ6IzNjOGVkNTtcclxufVxyXG5cclxuaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6I2ZmZmZmZjtcclxufSJdfQ== */";

/***/ }),

/***/ 6752:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <!-- \n    Se establece un título que este separado de <ion-content>\n    mediante el class ion-padding-top\n    y que el texto <ion-label> y su contenido este centrado\n    mediante el class ion-text-center\n    Ver: https://ionicframework.com/docs/layout/css-utilities#text-alignment\n    Ver: https://ionicframework.com/docs/layout/css-utilities#element-padding\n  -->\n  <ion-toolbar>\n  <ion-title class=\"ion-padding-top ion-text-center\">\n    <div id=\"cabecera\">\n    <ion-label>\n      <img alt=\"logo\" height=\"70\" src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Logo_DuocUC.svg/2560px-Logo_DuocUC.svg.png\" > \n      <p>Sistema De Asistencia DuocUC</p>\n    </ion-label>\n  </div>\n  </ion-title>\n</ion-toolbar>\n  <!--\n    Se genera una división donde estará el contenido del login,\n    para esto se utilizara ion-padding-vertical que aplica un\n    relleno arriba y abajo de 16px por defecto\n    Ver: https://ionicframework.com/docs/layout/css-utilities#element-padding\n  -->\n  <div class=\"ion-padding-vertical\">\n    <!--\n      Se establece un card que contendrá un título\n      y un contenido\n    -->\n    <ion-card class=\"ion-text-center ion-padding-vertical\">\n\n      <ion-card-title class=\"ion-text-center\">\n        <ion-label>\n          <h2>¡Bienvenido!</h2>\n        </ion-label>\n      </ion-card-title>\n\n      <ion-card-content>\n        <ion-item>\n          <ion-label position=\"floating\">Correo</ion-label>\n          <!-- Usamos ngModel para indicarle al input con que propiedad del controlador va a trabajar -->\n          <ion-input type=\"text\" [(ngModel)]=\"correo\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\" >Contraseña</ion-label>\n          <!--\n            El type Password inmediatamente pasa lo que uno\n            escribe a *****\n            Nuevamente usamos ngModel para indicarle al input que propiedad a utilizar\n          -->\n          <ion-input type=\"password\" [(ngModel)]=\"password\"></ion-input>\n        </ion-item>\n        <ion-row>\n          <ion-col size=\"12\">\n            <!-- \n              Para usar un método de la clase controladora, hay que escribir el evento del control entre paréntesis y luego\n              indicar cual es el método a ejecutar; en este caso se trata de ingresar()\n            -->\n            <ion-button #botonIngresar shape=\"block\" (click)=\"ingresar()\">Ingresar</ion-button>\n            <ion-button class=\"login\" shape=\"block\" (click)=\"registrar()\">Registrar</ion-button>\n            <ion-button class=\"login\" shape=\"block\" (click)=\"eliminar()\">Eliminar</ion-button>\n            <br>\n            \n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n      \n      <ion-label>\n        <br>\n        <a (click)=\"ingresarValidarCorreo()\">Recuperar Contraseña</a>\n        \n        <br>\n\n      </ion-label>\n    </ion-card>\n  </div>\n  \n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map