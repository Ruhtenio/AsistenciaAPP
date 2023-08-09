(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/auth-guard.service */ 8968);
/* harmony import */ var _services_login_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/login-guard.service */ 4881);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);





const routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home/home.module */ 7994)).then(m => m.HomePageModule),
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService]
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 1053)).then(m => m.LoginPageModule),
        canActivate: [_services_login_guard_service__WEBPACK_IMPORTED_MODULE_1__.LoginGuardService]
    },
    /*{
      path: '**',
      loadChildren: () => import('./pages/page-not-found/page-not-found-routing.module').then( m => m.PageNotFoundPageRoutingModule)
    },
    {
      path: 'page-not-found',
      loadChildren: () => import('./pages/page-not-found/page-not-found.module').then( m => m.PageNotFoundPageModule)
    },*/
    {
        path: 'correo',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_correo_correo_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/correo/correo.module */ 9424)).then(m => m.CorreoPageModule)
    },
    {
        path: 'pregunta',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_pregunta_pregunta_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pregunta/pregunta.module */ 8278)).then(m => m.PreguntaPageModule)
    },
    {
        path: 'correo',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_correo_correo_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/correo/correo.module */ 9424)).then(m => m.CorreoPageModule)
    },
    {
        path: 'incorrecto',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_incorrecto_incorrecto_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/incorrecto/incorrecto.module */ 6627)).then(m => m.IncorrectoPageModule)
    },
    {
        path: 'correcto',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_correcto_correcto_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/correcto/correcto.module */ 5231)).then(m => m.CorrectoPageModule)
    },
    {
        path: 'eliminar-usuario',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_eliminar-usuario_eliminar-usuario_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/eliminar-usuario/eliminar-usuario.module */ 3478)).then(m => m.EliminarUsuarioPageModule)
    },
    {
        path: 'crear-usuario',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_crear-usuario_crear-usuario_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/crear-usuario/crear-usuario.module */ 5501)).then(m => m.CrearUsuarioPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_4__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _model_Message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model/Message */ 730);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/authentication.service */ 7053);
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/database.service */ 4382);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/storage.service */ 1188);











let AppComponent = class AppComponent {
  constructor(platform, db, auth, router, storage) {
    this.platform = platform;
    this.db = db;
    this.auth = auth;
    this.router = router;
    this.storage = storage;
    this.StartApp();
  }

  StartApp() {
    var _this = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      (0,_model_Message__WEBPACK_IMPORTED_MODULE_3__.log)('StartApp', 'Iniciando aplicación');

      _this.platform.ready().then( /*#__PURE__*/(0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        (0,_model_Message__WEBPACK_IMPORTED_MODULE_3__.log)('StartApp', 'Plataforma lista');
        yield _this.db.StartDatabaseService(true).then( /*#__PURE__*/function () {
          var _ref2 = (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (isRunning) {
            (0,_model_Message__WEBPACK_IMPORTED_MODULE_3__.log)('StartApp', isRunning ? 'Servicio de BD iniciado' : 'Servicio de BD no iniciado');
          });

          return function (_x) {
            return _ref2.apply(this, arguments);
          };
        }());
      }));
    })();
  }

};

AppComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform
}, {
  type: _services_database_service__WEBPACK_IMPORTED_MODULE_5__.DatabaseService
}, {
  type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__.AuthService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
}, {
  type: _services_storage_service__WEBPACK_IMPORTED_MODULE_6__.StorageService
}];

AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AppComponent);


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage-angular */ 7566);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/storage.service */ 1188);
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth-guard.service */ 8968);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/authentication.service */ 7053);
/* harmony import */ var _services_sqlite_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/sqlite.service */ 636);
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/database.service */ 4382);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 8987);














let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule.forRoot(),
            _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_11__.IonicStorageModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
        ],
        providers: [
            _services_database_service__WEBPACK_IMPORTED_MODULE_6__.DatabaseService,
            _services_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService,
            _services_sqlite_service__WEBPACK_IMPORTED_MODULE_5__.SQLiteService,
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__.AuthService,
            _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__.AuthGuardService,
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicRouteStrategy }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 730:
/*!**********************************!*\
  !*** ./src/app/model/Message.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "log": () => (/* binding */ log),
/* harmony export */   "mostrarEjemplosDeMensajes": () => (/* binding */ mostrarEjemplosDeMensajes),
/* harmony export */   "showAlert": () => (/* binding */ showAlert),
/* harmony export */   "showAlertDUOC": () => (/* binding */ showAlertDUOC),
/* harmony export */   "showAlertError": () => (/* binding */ showAlertError),
/* harmony export */   "showAlertYesNo": () => (/* binding */ showAlertYesNo),
/* harmony export */   "showAlertYesNoDUOC": () => (/* binding */ showAlertYesNoDUOC),
/* harmony export */   "showToast": () => (/* binding */ showToast)
/* harmony export */ });
/* harmony import */ var _home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _MessageEnum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MessageEnum */ 2854);



var showLogs = true;
function log(source, message, returnValue) {
  if (showLogs) {
    const red = 'color: red;';
    const green = 'color: dark green;';
    const blue = 'color: blue;';
    const black = 'color: blue;';
    const yellow = 'background-color: yellow;';
    const cyan = 'background-color: cyan;';
    const magenta = 'background-color: magenta;';
    let color1 = 'color: gray';
    let color2 = 'color: gray';

    if (source === 'StartSQLiteService') {
      color1 = yellow;
      color2 = black;
    }

    if (source === 'StorageService') {
      color1 = red;
      color2 = black;
    }

    if (source === 'isLogged') {
      color1 = blue;
      color2 = black;
    }

    if (source === 'isAuthenticated') {
      color1 = green;
      color2 = black;
    }

    if (source === 'LoginGuardService') {
      color1 = cyan;
      color2 = black;
    }

    if (source === 'AuthGuardService') {
      color1 = magenta;
      color2 = black;
    }

    console.log(`%c${source}:%c ${message}`, color1, color2);
  }

  if (returnValue) return returnValue;
}
function showToast(_x, _x2) {
  return _showToast.apply(this, arguments);
}

function _showToast() {
  _showToast = (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (message, duration) {
    const controler = new _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ToastController();
    const toast = yield controler.create({
      message: message,
      duration: duration ? duration : 2000
    });
    toast.present();
  });
  return _showToast.apply(this, arguments);
}

function showAlert(_x3, _x4) {
  return _showAlert.apply(this, arguments);
}

function _showAlert() {
  _showAlert = (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (header, message) {
    return new Promise(resolve => {
      let alert = new _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController().create({
        header,
        message,
        cssClass: 'custom-alert',
        buttons: [{
          text: 'Aceptar',
          handler: () => resolve()
        }]
      }).then(value => value.present());
    });
  });
  return _showAlert.apply(this, arguments);
}

function showAlertYesNo(_x5, _x6) {
  return _showAlertYesNo.apply(this, arguments);
}

function _showAlertYesNo() {
  _showAlertYesNo = (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (header, message) {
    return new Promise(resolve => {
      let alert = new _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController().create({
        header,
        message,
        buttons: [{
          text: 'Sí',
          handler: () => {
            resolve(_MessageEnum__WEBPACK_IMPORTED_MODULE_1__.MessageEnum.YES);
          }
        }, {
          text: 'No',
          handler: () => {
            resolve(_MessageEnum__WEBPACK_IMPORTED_MODULE_1__.MessageEnum.NO);
          }
        }, {
          text: 'Cancelar',
          handler: () => {
            resolve(_MessageEnum__WEBPACK_IMPORTED_MODULE_1__.MessageEnum.CANCEL);
          }
        }]
      }).then(value => value.present());
    });
  });
  return _showAlertYesNo.apply(this, arguments);
}

function showAlertDUOC(_x7) {
  return _showAlertDUOC.apply(this, arguments);
}

function _showAlertDUOC() {
  _showAlertDUOC = (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (message) {
    return new Promise(resolve => {
      if (message.trim() === '') resolve();
      let alert = new _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController().create({
        header: 'App Estoy Presente',
        message,
        buttons: [{
          text: 'Aceptar',
          handler: () => resolve()
        }]
      }).then(value => value.present());
    });
  });
  return _showAlertDUOC.apply(this, arguments);
}

function showAlertYesNoDUOC(_x8) {
  return _showAlertYesNoDUOC.apply(this, arguments);
}

function _showAlertYesNoDUOC() {
  _showAlertYesNoDUOC = (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (message) {
    return new Promise(resolve => {
      if (message.trim() === '') resolve(_MessageEnum__WEBPACK_IMPORTED_MODULE_1__.MessageEnum.CANCEL);
      let alert = new _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController().create({
        header: 'App Estoy Presente',
        message,
        buttons: [{
          text: 'Sí',
          handler: () => {
            resolve(_MessageEnum__WEBPACK_IMPORTED_MODULE_1__.MessageEnum.YES);
          }
        }, {
          text: 'No',
          handler: () => {
            resolve(_MessageEnum__WEBPACK_IMPORTED_MODULE_1__.MessageEnum.NO);
          }
        }, {
          text: 'Cancelar',
          handler: () => {
            resolve(_MessageEnum__WEBPACK_IMPORTED_MODULE_1__.MessageEnum.CANCEL);
          }
        }]
      }).then(value => value.present());
    });
  });
  return _showAlertYesNoDUOC.apply(this, arguments);
}

function showAlertError(_x9, _x10) {
  return _showAlertError.apply(this, arguments);
}

function _showAlertError() {
  _showAlertError = (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (source, err) {
    return new Promise(resolve => {
      const erroMessage = `Error en ${source}. ${err.message}. ` + `Comuníquese con el Administrador del Sistema o intente nuevamente más tarde.`;
      if (showLogs) console.log(erroMessage);
      let alert = new _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController().create({
        header: 'Error del Sistema',
        message: erroMessage,
        buttons: [{
          text: 'Aceptar',
          handler: () => resolve()
        }]
      }).then(value => value.present());
    });
  });
  return _showAlertError.apply(this, arguments);
}

function mostrarEjemplosDeMensajes() {
  return _mostrarEjemplosDeMensajes.apply(this, arguments);
}

function _mostrarEjemplosDeMensajes() {
  _mostrarEjemplosDeMensajes = (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
    yield showToast('Este es un mensaje toast');
    yield showAlertDUOC('Este es un mensaje alert');
    let response = yield showAlertYesNoDUOC('Este es un mensaje de prueba de la función "showAlertYesNoDUOC" ' + 'que permite escoger entre las alternativas: Sí, No y Cancelar. Escoja una opción.');
    if (response == _MessageEnum__WEBPACK_IMPORTED_MODULE_1__.MessageEnum.YES) yield showAlertDUOC('El usuario ha contestado Yes');
    if (response == _MessageEnum__WEBPACK_IMPORTED_MODULE_1__.MessageEnum.NO) yield showAlertDUOC('El usuario ha contestado No');
    if (response == _MessageEnum__WEBPACK_IMPORTED_MODULE_1__.MessageEnum.CANCEL) yield showAlertDUOC('El usuario ha contestado Cancel');
  });
  return _mostrarEjemplosDeMensajes.apply(this, arguments);
}

/***/ }),

/***/ 2854:
/*!**************************************!*\
  !*** ./src/app/model/MessageEnum.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageEnum": () => (/* binding */ MessageEnum)
/* harmony export */ });
var MessageEnum;
(function (MessageEnum) {
    MessageEnum[MessageEnum["OK"] = 0] = "OK";
    MessageEnum[MessageEnum["YES"] = 1] = "YES";
    MessageEnum[MessageEnum["NO"] = 2] = "NO";
    MessageEnum[MessageEnum["CANCEL"] = 3] = "CANCEL";
})(MessageEnum || (MessageEnum = {}));


/***/ }),

/***/ 2844:
/*!**********************************!*\
  !*** ./src/app/model/Usuario.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Usuario": () => (/* binding */ Usuario)
/* harmony export */ });
/* harmony import */ var _home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Message */ 730);


class Usuario {
  constructor() {
    this.correo = '';
    this.password = '';
    this.nombre = '';
    this.preguntaSecreta = '';
    this.respuestaSecreta = '';
    this.sesionActiva = '';
  }

  setUser(correo, password, nombre, preguntaSecreta, respuestaSecreta, sesionActiva, hideSecrets) {
    this.correo = correo;
    this.nombre = nombre;
    this.sesionActiva = sesionActiva;

    if (hideSecrets) {
      this.password = '';
      this.preguntaSecreta = '';
      this.respuestaSecreta = '';
    } else {
      this.password = password;
      this.preguntaSecreta = preguntaSecreta;
      this.respuestaSecreta = respuestaSecreta;
    }
  }

  validateEmail(correo) {
    if (correo.trim() === '') return 'Para ingresar al sistema debe ingresar el correo del usuario.';
    return '';
  }

  validatePassword(password) {
    if (password.trim() === '') return 'Para entrar al sistema debe ingresar la contraseña.';
    return '';
  }

  validateName(nombre) {
    if (nombre.trim() === '') return 'Debe ingresar su nombre.';
    return '';
  }

  validateSecretQuestion(question) {
    if (question.trim() === '') return 'Debe ingresar su pregunta secreta.';
    return '';
  }

  validateSecretAnswer(answer) {
    if (answer.trim() === '') return 'Debe ingresar su respuesta secreta.';
    return '';
  }

  validateUser(correo, password, db) {
    var _this = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref = (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          let msg = _this.validateEmail(correo);

          if (msg) {
            yield (0,_Message__WEBPACK_IMPORTED_MODULE_1__.showAlertDUOC)(msg);
            return Promise.resolve(false);
          }

          msg = _this.validatePassword(password);

          if (msg) {
            yield (0,_Message__WEBPACK_IMPORTED_MODULE_1__.showAlertDUOC)(msg);
            return Promise.resolve(false);
          }

          const usu = yield db.readUser(correo, password, true);

          if (usu === null) {
            yield (0,_Message__WEBPACK_IMPORTED_MODULE_1__.showAlertDUOC)('El correo o la contraseña no son correctos');
            return Promise.resolve(null);
          }

          _this.correo = usu.correo;
          _this.nombre = usu.nombre;
          _this.sesionActiva = usu.sesionActiva;
          _this.password = usu.password;
          _this.preguntaSecreta = usu.preguntaSecreta;
          _this.respuestaSecreta = usu.respuestaSecreta;
          return Promise.resolve(usu);
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }

  validarCamposUsuario(correo, password, name, secretQuestion, secretAnswer) {
    return this.validateEmail(correo) || this.validatePassword(password) || this.validateName(name) || this.validateSecretQuestion(secretQuestion) || this.validateSecretAnswer(secretAnswer);
  }

}

/***/ }),

/***/ 8968:
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuardService": () => (/* binding */ AuthGuardService)
/* harmony export */ });
/* harmony import */ var _home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _model_Message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/Message */ 730);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.service */ 7053);






let AuthGuardService = class AuthGuardService {
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
  }

  canActivate() {
    var _this = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      (0,_model_Message__WEBPACK_IMPORTED_MODULE_1__.log)('AuthGuardService', 'Ejecutando guardián');
      const autenticado = yield _this.auth.isAuthenticated();
      (0,_model_Message__WEBPACK_IMPORTED_MODULE_1__.log)('AuthGuardService', autenticado ? 'Usuario autenticado quedarse en HomePage' : 'Usuario no autenticado navegar a LoginPage');
      return autenticado ? true : _this.router.parseUrl('/login');
    })();
  }

};

AuthGuardService.ctorParameters = () => [{
  type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
}];

AuthGuardService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
  providedIn: 'root'
})], AuthGuardService);


/***/ }),

/***/ 7053:
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _model_Message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/Message */ 730);
/* harmony import */ var _model_Usuario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/Usuario */ 2844);
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./database.service */ 4382);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage.service */ 1188);









let AuthService = class AuthService {
  constructor(router, storage, db) {
    this.router = router;
    this.storage = storage;
    this.db = db;
    this.authState = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(false);
    this.loginState = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(false);
  }

  StartAuthService() {
    var _this = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this.storage.StartStorageService('StartAuthenticationService');
    })();
  }

  isLogged() {
    var _this2 = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      (0,_model_Message__WEBPACK_IMPORTED_MODULE_1__.log)('isLogged', 'Revisar si el usuario inició sesión');
      return yield _this2.storage.authUserExists().then(autenticado => {
        (0,_model_Message__WEBPACK_IMPORTED_MODULE_1__.log)('isLogged', autenticado ? 'El usuario ha iniciado sesión' : 'El usuario no ha iniciado sesión');

        if (autenticado) {
          _this2.authState.next(true);
        }

        return true;
      });
    })();
  }

  isAuthenticated() {
    (0,_model_Message__WEBPACK_IMPORTED_MODULE_1__.log)('isAuthenticated', 'Iniciar servicio de autenticación');
    this.StartAuthService();
    (0,_model_Message__WEBPACK_IMPORTED_MODULE_1__.log)('isAuthenticated', 'Revisar si el usuario inició sesión');
    return this.storage.authUserExists().then(autenticado => {
      (0,_model_Message__WEBPACK_IMPORTED_MODULE_1__.log)('isAuthenticated', autenticado ? 'El usuario ha iniciado sesión' : 'El usuario no ha iniciado sesión');
      return autenticado;
    });
  }

  login(correo, password) {
    var _this3 = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('Iniciando login');

      try {
        yield _this3.StartAuthService();
        (0,_model_Message__WEBPACK_IMPORTED_MODULE_1__.log)('login', `Obteniendo datos del usuario`);
        const data = yield _this3.storage.getItem("USER_DATA");

        if (data !== null) {
          if (data.value !== '') {
            const usu = JSON.parse(data.value);
            console.log(`USUARIO ${usu.nombre} HA INICIADO SESION (isLogged)`);

            _this3.authState.next(true);

            _this3.router.navigate(['home']);

            return;
          }
        }

        const usu = new _model_Usuario__WEBPACK_IMPORTED_MODULE_2__.Usuario();
        usu.validateUser(correo, password, _this3.db);

        if (usu === null) {
          console.log('AuthenticationService.login El usuario no fue autenticado');
          return;
        }

        console.log('AuthenticationService.login El usuario fue autenticado');
        const resp = yield _this3.db.updateActiveSession(correo, 'S');

        if (resp.changes.changes === 1) {
          (0,_model_Message__WEBPACK_IMPORTED_MODULE_1__.showToast)(`¡Bienvenido(a) ${usu.nombre}!`);
          yield _this3.storage.setItem('USER_DATA', JSON.stringify(usu));
          yield _this3.db.logUsers();

          _this3.authState.next(true);

          _this3.router.navigate(['home']);
        } else {
          console.log(`No fue posible actualizar la sesión`);
        }
      } catch (err) {
        yield (0,_model_Message__WEBPACK_IMPORTED_MODULE_1__.showAlertError)('AuthenticationService.login', err);
      }
    })();
  } //AKI


  logout() {
    var _this4 = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('Iniciando logout');

      try {
        const data = yield _this4.storage.getItem('USER_DATA');

        if (data !== null) {
          if (data.value !== '') {
            const usu = JSON.parse(data.value);
            const response = yield _this4.db.updateActiveSession(usu.correo, 'N');

            if (response.changes.changes === 1) {
              (0,_model_Message__WEBPACK_IMPORTED_MODULE_1__.showToast)(`¡Hasta pronto ${usu.nombre}!`);
              yield _this4.storage.removeItem('USER_DATA');
              yield _this4.db.logUsers();

              _this4.router.navigate(['login']);

              _this4.authState.next(false);
            } else {
              console.log(`No fue posible actualizar la sesión`);
            }
          }
        }
      } catch (err) {
        yield (0,_model_Message__WEBPACK_IMPORTED_MODULE_1__.showAlertError)('AuthenticationService.logout', err);
      }
    })();
  }

};

AuthService.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: _storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService
}, {
  type: _database_service__WEBPACK_IMPORTED_MODULE_3__.DatabaseService
}];

AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)()], AuthService);


/***/ }),

/***/ 4382:
/*!**********************************************!*\
  !*** ./src/app/services/database.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatabaseService": () => (/* binding */ DatabaseService)
/* harmony export */ });
/* harmony import */ var _home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _model_Usuario__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/Usuario */ 2844);
/* harmony import */ var _sqlite_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sqlite.service */ 636);





let DatabaseService = class DatabaseService {
  constructor(sqlite) {
    this.sqlite = sqlite;
    this.createSchema = `
        CREATE TABLE IF NOT EXISTS USUARIO (
            correo TEXT PRIMARY KEY NOT NULL,
            password TEXT NOT NULL,
            nombre TEXT NOT NULL,
            preguntaSecreta TEXT NOT NULL,
            respuestaSecreta TEXT NOT NULL,
            sesionActiva TEXT NOT NULL
        );
        
        CREATE TABLE IF NOT EXISTS QR
        (
            idAsignatura TEXT PRIMARY KEY,
            bloqueInicio TEXT NOT NULL,
            bloqueTermino TEXT NOT NULL,
            dia TEXT NOT NULL,
            horaFin TEXT,
            horaInicio TEXT NOT NULL,
            nombreAsignatura TEXT NOT NULL,
            nombreProfesor TEXT NOT NULL,
            seccion TEXT NOT NULL,
            sede TEXT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS CERTIFICACION
        (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT NOT NULL,
            fecha TEXT NOT NULL,
            vencimiento INTEGER NOT NULL,
            fechaVencimiento TEXT
        );
    `;
    this.sqlInsertUser = 'INSERT INTO Usuario (correo, password, nombre, preguntaSecreta, respuestaSecreta, sesionActiva) VALUES (?,?,?,?,?,?)';
    this.sqlSelectUser = 'SELECT * FROM Usuario WHERE correo=? AND password=? LIMIT 1';
    this.sqlSelectAllUsers = 'SELECT * FROM Usuario';
    this.sqlUpdateActiveSesion = 'UPDATE Usuario SET sesionActiva=? WHERE correo=?';
    this.sqlSelectActiveSession = `SELECT correo, sesionActiva FROM Usuario WHERE sesionActiva = 'S' LIMIT 1`;
    this.sqlUpdateUser = `UPDATE USUARIO SET 
                password = ?, 
                nombre = ?, 
                preguntaSecreta = ?, 
                respuestaSecreta = ?, 
                sesionActiva = ?
            WHERE 
                correo = ?`;
    this.sqlDeleteUser = 'DELETE FROM USUARIO WHERE correo = ?';
    this.sqlSelectUserMail = 'SELECT * FROM Usuario WHERE correo=? LIMIT 1';
  }

  StartDatabaseService(createDatabaseFromScratch) {
    return this.sqlite.StartSQLiteService(this.createSchema, createDatabaseFromScratch, 'StartDatabaseService');
  }

  createUser(correo, password, nombre, preguntaSecreta, respuestaSecreta, sesionActiva) {
    var _this = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this.sqlite.run(_this.sqlInsertUser, [correo, password, nombre, preguntaSecreta, respuestaSecreta, sesionActiva]);
    })();
  }

  readUsers() {
    var _this2 = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this2.sqlite.query(_this2.sqlSelectAllUsers);
    })();
  }

  readUser(correo, password, hideSecrets) {
    var _this3 = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const rs = yield _this3.sqlite.query(_this3.sqlSelectUser, [correo, password]);
      if (rs.values.length === 0) return Promise.resolve(null);
      const usu = new _model_Usuario__WEBPACK_IMPORTED_MODULE_1__.Usuario();
      const r = rs.values[0];
      usu.setUser(r.correo, r.password, r.nombre, r.preguntaSecreta, r.respuestaSecreta, r.sesionActiva, hideSecrets);
      return Promise.resolve(usu);
    })();
  }

  logUsers() {
    var _this4 = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const rs = yield _this4.readUsers();
      console.log(`Cantidad de usuarios: ${rs.values.length}`);
      rs.values.forEach((value, index) => {
        console.log(`Usuario ${index}: ${value.correo}, ${value.password}, ` + `${value.nombre}, ${value.preguntaSecreta}, ` + `${value.respuestaSecreta}, ` + `${value.sesionActiva}`);
      });
    })();
  }

  readActiveSession() {
    var _this5 = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this5.sqlite.db.query(_this5.sqlSelectActiveSession, []);
    })();
  }

  updateActiveSession(correo, sesionActiva) {
    var _this6 = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this6.sqlite.run(_this6.sqlUpdateActiveSesion, [sesionActiva, correo]);
    })();
  } //akiii


  userList(hideSecrets) {
    var _this7 = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const lista = [];
      const rs = yield _this7.readUsers();
      rs.values.forEach((r, index) => {
        let usu = new _model_Usuario__WEBPACK_IMPORTED_MODULE_1__.Usuario();

        if (hideSecrets) {
          r.password = '';
          r.preguntaSecreta = '';
          r.respuestaSecreta = '';
        }

        usu.setUser(r.correo, r.password, r.nombre, r.preguntaSecreta, r.respuestaSecreta, r.sesionActiva, hideSecrets);
        lista.push(usu);
      });
      return lista;
    })();
  }

  updateUser(usuario) {
    var _this8 = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this8.sqlite.run(_this8.sqlUpdateUser, [usuario.password, usuario.nombre, usuario.preguntaSecreta, usuario.respuestaSecreta, usuario.sesionActiva, usuario.correo]);
    })();
  }

  deleteUser(correo) {
    var _this9 = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this9.sqlite.run(_this9.sqlDeleteUser, [correo]);
    })();
  }

  buscarCorreo(correo) {
    var _this10 = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        values
      } = yield _this10.sqlite.query(_this10.sqlSelectUserMail, [correo]);
      return values;
    })();
  }

};

DatabaseService.ctorParameters = () => [{
  type: _sqlite_service__WEBPACK_IMPORTED_MODULE_2__.SQLiteService
}];

DatabaseService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()], DatabaseService);


/***/ }),

/***/ 4881:
/*!*************************************************!*\
  !*** ./src/app/services/login-guard.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginGuardService": () => (/* binding */ LoginGuardService)
/* harmony export */ });
/* harmony import */ var _home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _model_Message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/Message */ 730);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.service */ 7053);






let LoginGuardService = class LoginGuardService {
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
  }

  canActivate() {
    var _this = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      (0,_model_Message__WEBPACK_IMPORTED_MODULE_1__.log)('LoginGuardService', 'Ejecutando guardián');
      const autenticado = yield _this.auth.isAuthenticated();
      (0,_model_Message__WEBPACK_IMPORTED_MODULE_1__.log)('LoginGuardService', autenticado ? 'Usuario autenticado navegar a HomePage' : 'Usuario no autenticado quedarse en LoginPage');
      return autenticado ? _this.router.parseUrl('/home') : true;
    })();
  }

};

LoginGuardService.ctorParameters = () => [{
  type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
}];

LoginGuardService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
  providedIn: 'root'
})], LoginGuardService);


/***/ }),

/***/ 636:
/*!********************************************!*\
  !*** ./src/app/services/sqlite.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SQLiteService": () => (/* binding */ SQLiteService)
/* harmony export */ });
/* harmony import */ var _home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _capacitor_community_sqlite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor-community/sqlite */ 8277);
/* harmony import */ var _model_Message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/Message */ 730);






let SQLiteService = class SQLiteService {
  constructor() {
    this.isNative = false;
    this.encrypted = false;
    this.sqlInsertUser = 'INSERT INTO Usuario (correo, password, nombre, preguntaSecreta, respuestaSecreta, sesionActiva) VALUES (?,?,?,?,?,?)';
    this.sqlSelectAllUsers = 'SELECT * FROM Usuario';
  }

  createUser(correo, password, nombre, preguntaSecreta, respuestaSecreta, sesionActiva) {
    var _this = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this.run(_this.sqlInsertUser, [correo, password, nombre, preguntaSecreta, respuestaSecreta, sesionActiva]);
    })();
  }

  StartSQLiteService(createSchema, createDatabaseFromScratch, callee) {
    var _this2 = this;

    this.database = 'asistencia';
    this.encrypted = false;
    this.mode = 'no-encryption';
    this.version = 1;
    this.readonly = false;
    this.dbOptions = {
      database: this.database,
      readonly: this.readonly
    };
    return new Promise( /*#__PURE__*/function () {
      var _ref = (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
        try {
          (0,_model_Message__WEBPACK_IMPORTED_MODULE_3__.log)('StartSQLiteService', `Iniciar servicio desde ${callee}`);
          (0,_model_Message__WEBPACK_IMPORTED_MODULE_3__.log)('StartSQLiteService', `db:${_this2.database} enc:${_this2.encrypted} mode:${_this2.mode} ver:${_this2.version} readonly:${_this2.readonly}`);
          _this2.platform = _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.getPlatform();
          if (_this2.platform === 'ios' || _this2.platform === 'android') _this2.isNative = true;
          _this2.capacitorSQLitePlugin = _capacitor_community_sqlite__WEBPACK_IMPORTED_MODULE_2__.CapacitorSQLite;
          yield _this2.capacitorSQLitePlugin.closeConnection(_this2.dbOptions).catch(reason => console.log(reason));
          _this2.sqlite = new _capacitor_community_sqlite__WEBPACK_IMPORTED_MODULE_2__.SQLiteConnection(_this2.capacitorSQLitePlugin);
          _this2.db = yield _this2.createConnection();
          if (createDatabaseFromScratch) yield _this2.deleteDatabase();

          _this2.db.open();

          if (createDatabaseFromScratch) {
            yield _this2.db.execute(createSchema); //aki aki aki

            yield _this2.createUser('atorres@duocuc.cl', '1234', 'Ana Torres Leiva', '¿Cuál es tu animal favorito?', 'gato', 'S');
            yield _this2.createUser('jperez@duocuc.cl', '5678', 'Juan Pérez González', '¿Cuál es tu postre favorito?', 'panqueques', 'N');
            yield _this2.createUser('cmujica@duocuc.cl', '0987', 'Carla Mujica Sáez', '¿Cuál es tu vehículo favorito?', 'moto', 'N');
          }

          const rs = yield _this2.query(_this2.sqlSelectAllUsers);
          (0,_model_Message__WEBPACK_IMPORTED_MODULE_3__.log)('StartSQLiteService', `Cantidad de usuarios: ${rs.values.length}`);
          rs.values.forEach((value, index) => {
            (0,_model_Message__WEBPACK_IMPORTED_MODULE_3__.log)('StartSQLiteService', `Usuario ${index}: ${value.correo}, ${value.password}, ${value.sesionActiva}` + `${value.nombre}, ${value.preguntaSecreta}, ` + `${value.respuestaSecreta}, ` + `${value.sesionActiva}`);
          });
          _this2.isRunning = true;
          (0,_model_Message__WEBPACK_IMPORTED_MODULE_3__.log)('StartSQLiteService', 'Servicio iniciado');
          resolve(true);
        } catch (err) {
          (0,_model_Message__WEBPACK_IMPORTED_MODULE_3__.log)('StartSQLiteService', 'Servicio no pudo ser iniciado');
          yield (0,_model_Message__WEBPACK_IMPORTED_MODULE_3__.showAlertError)('StartSQLiteService', err);
          _this2.isRunning = false;
          resolve(false);
        }
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  getChanges() {
    return this.dbChanges.changes.changes;
  }

  createConnection() {
    var _this3 = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this3.sqlite.createConnection(_this3.database, _this3.encrypted, _this3.mode, _this3.version, _this3.readonly);
    })();
  }

  closeConnection() {
    var _this4 = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this4.sqlite.closeConnection(_this4.database, _this4.readonly);
    })();
  }

  deleteDatabase() {
    var _this5 = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this5.capacitorSQLitePlugin.deleteDatabase(_this5.dbOptions);
    })();
  }

  execute(query) {
    var _this6 = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this6.dbChanges = yield _this6.db.execute(query);
      return _this6.dbChanges;
    })();
  }

  run(query, parameters) {
    var _this7 = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this7.db.run(query, parameters);
    })();
  }

  query(query, parameters) {
    var _this8 = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this8.db.query(query, parameters);
    })();
  }

};

SQLiteService.ctorParameters = () => [];

SQLiteService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)()], SQLiteService);


/***/ }),

/***/ 1188:
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageService": () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var _home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage */ 190);
/* harmony import */ var capacitor_data_storage_sqlite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! capacitor-data-storage-sqlite */ 2085);
/* harmony import */ var _model_Message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/Message */ 730);
/* harmony import */ var _model_Usuario__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/Usuario */ 2844);
/* harmony import */ var _sqlite_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sqlite.service */ 636);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/core */ 5099);









let StorageService = class StorageService {
  constructor(ionicStorage, db) {
    this.ionicStorage = ionicStorage;
    this.db = db;
    this.isNative = false;
    this.encrypted = false;
    this.init();
  }

  StartStorageService(callee) {
    var _this = this;

    this.database = 'asistencia';
    this.encrypted = false;
    this.mode = 'no-encryption';
    this.table = 'STORAGE_TABLE';
    this.dbOptions = {
      database: this.database,
      table: this.table,
      encrypted: this.encrypted,
      mode: this.mode
    };
    return new Promise( /*#__PURE__*/function () {
      var _ref = (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
        try {
          (0,_model_Message__WEBPACK_IMPORTED_MODULE_3__.log)('StorageService', `Iniciar servicio desde ${callee}`);
          (0,_model_Message__WEBPACK_IMPORTED_MODULE_3__.log)('StorageService', `db:${_this.database} enc:${_this.encrypted} mode:${_this.mode} table:${_this.table})`);
          _this.platform = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__.Capacitor.getPlatform();
          if (_this.platform === 'ios' || _this.platform === 'android') _this.isNative = true;
          _this.store = capacitor_data_storage_sqlite__WEBPACK_IMPORTED_MODULE_2__.CapacitorDataStorageSqlite;
          yield _this.store.openStore(_this.dbOptions);
          _this.isRunning = true;
          (0,_model_Message__WEBPACK_IMPORTED_MODULE_3__.log)('StorageService', 'Servicio iniciado');
          resolve(true);
        } catch (err) {
          (0,_model_Message__WEBPACK_IMPORTED_MODULE_3__.log)('StorageService', 'Servicio no pudo ser iniciado');
          yield (0,_model_Message__WEBPACK_IMPORTED_MODULE_3__.showAlertError)('StorageService.StartStorageService', err);
          _this.isRunning = false;
          resolve(false);
        }
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  getStorageUser(hideSecrets) {
    var _this2 = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      (0,_model_Message__WEBPACK_IMPORTED_MODULE_3__.log)('getStorageUser', 'Revisando USER_DATA');
      return _this2.getItem("USER_DATA").then(datos => {
        if (datos !== null) {
          if (datos.value !== '') {
            (0,_model_Message__WEBPACK_IMPORTED_MODULE_3__.log)('getStorageUser', `USER_DATA tiene datos: ${datos.value}`);
            const json = JSON.parse(datos.value);
            const usu = new _model_Usuario__WEBPACK_IMPORTED_MODULE_4__.Usuario();
            usu.setUser(json.correo, json.password, json.nombre, json.preguntaSecreta, json.respuestaSecreta, json.sesionActiva, hideSecrets);
            return usu;
          }
        }

        (0,_model_Message__WEBPACK_IMPORTED_MODULE_3__.log)('getStorageUser', `USER_DATA no tiene datos`);
        return null;
      }).catch(err => {
        (0,_model_Message__WEBPACK_IMPORTED_MODULE_3__.showAlertError)('StorageService.getStorageUser', err);
        return null;
      });
    })();
  }

  getSecureAuthUser() {
    var _this3 = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this3.getStorageUser(true);
    })();
  }

  getUnsecureAuthUser() {
    var _this4 = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this4.getStorageUser(false);
    })();
  }

  authUserExists() {
    var _this5 = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this5.getStorageUser(false).then(usuario => {
        return !!usuario;
      });
    })();
  }

  closeStore() {
    var _this6 = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this6.store.closeStore({
        database: _this6.database
      });
    })();
  }

  isStoreOpen() {
    var _this7 = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this7.store.isStoreOpen({
        database: _this7.database
      });
    })();
  }

  isStoreExists() {
    var _this8 = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this8.store.isStoreExists({
        database: _this8.database
      });
    })();
  }

  setTable() {
    var _this9 = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this9.store.setTable({
        table: _this9.table
      });
    })();
  }

  setItem(key, value) {
    var _this10 = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this10.store.set({
        key,
        value
      });
    })();
  }

  getItem(key) {
    var _this11 = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this11.store.get({
        key
      });
    })();
  }

  isKey(key) {
    var _this12 = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this12.store.iskey({
        key
      });
    })();
  }

  getAllKeys() {
    var _this13 = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this13.store.keys();
    })();
  }

  getAllValues() {
    var _this14 = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this14.store.values();
    })();
  }

  getFilterValues(filter) {
    var _this15 = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this15.store.filtervalues({
        filter
      });
    })();
  }

  getAllKeysValues() {
    var _this16 = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this16.store.keysvalues();
    })();
  }

  removeItem(key) {
    var _this17 = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this17.store.remove({
        key
      });
    })();
  }

  clear() {
    var _this18 = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this18.store.clear();
    })();
  }

  deleteStore() {
    var _this19 = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this19.store.deleteStore(_this19.dbOptions);
    })();
  }

  isTable() {
    var _this20 = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this20.store.isTable({
        table: _this20.table
      });
    })();
  }

  getAllTables() {
    var _this21 = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this21.store.tables();
    })();
  }

  deleteTable() {
    var _this22 = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this22.store.deleteTable({
        table: _this22.table
      });
    })();
  }

  init() {
    var _this23 = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this23.storage = yield _this23.ionicStorage.create();
    })();
  }

  set(key, value) {
    this.storage.set(key, value);
  }

  get(key) {
    var _this24 = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this24.storage.get(key);
    })();
  }

  remove(key) {
    var _this25 = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this25.storage.remove(key);
    })();
  }

  saveQR(data) {
    var _this26 = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this26.set('QR', data);
    })();
  }

  getQR() {
    var _this27 = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this27.get('QR');
    })();
  }

  clearDino() {
    var _this28 = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this28.storage.remove('DINO_DATA');
    })();
  }

};

StorageService.ctorParameters = () => [{
  type: _ionic_storage__WEBPACK_IMPORTED_MODULE_1__.Storage
}, {
  type: _sqlite_service__WEBPACK_IMPORTED_MODULE_5__.SQLiteService
}];

StorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
  providedIn: 'root'
})], StorageService);


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		7950,
		"default-node_modules_ionic_core_dist_esm_parse-250f021a_js-node_modules_ionic_core_dist_esm_t-7df007",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"default-node_modules_ionic_core_dist_esm_parse-250f021a_js-node_modules_ionic_core_dist_esm_t-7df007",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map