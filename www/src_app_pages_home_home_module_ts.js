"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_home_home_module_ts"],{

/***/ 5229:
/*!*****************************************************!*\
  !*** ./src/app/components/clase/clase.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaseComponent": () => (/* binding */ ClaseComponent)
/* harmony export */ });
/* harmony import */ var _home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _clase_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clase.component.html?ngResource */ 8880);
/* harmony import */ var _clase_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clase.component.scss?ngResource */ 7283);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/storage.service */ 1188);







let ClaseComponent = class ClaseComponent {
  constructor(storage, router) {
    this.storage = storage;
    this.router = router;
    this.hasData = false;
    this.jsonExample = `{
      "bloqueInicio": "",
      "bloqueTermino": "",
      "dia": "",
      "horaFin": "",
      "horaInicio": "",
      "idAsignatura": "",
      "nombreAsignatura": "",
      "nombreProfesor": "",
      "seccion": "",
      "sede":""
    }`;
    this.jsonEmpty = `{
      "bloqueInicio": "",
      "bloqueTermino": "",
      "dia": "",
      "horaFin": "",
      "horaInicio": "",
      "idAsignatura": "",
      "nombreAsignatura": "",
      "nombreProfesor": "",
      "seccion": "",
      "sede":""
    }`;
  }

  ngOnInit() {
    var _this = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.showDinoData();
    })();
  }

  showDinoData() {
    var _this2 = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.clase = JSON.parse(_this2.jsonEmpty);
      _this2.hasData = false;
      const data = yield _this2.storage.getQR();

      if (data === null) {
        return;
      }

      if (data === '') {
        return;
      }

      const clase = JSON.parse(data);

      if (clase.idAsignatura === undefined) {
        return;
      }

      _this2.hasData = true;
      _this2.clase = clase;
    })();
  }

};

ClaseComponent.ctorParameters = () => [{
  type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}];

ClaseComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-clase',
  template: _clase_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_clase_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ClaseComponent);


/***/ }),

/***/ 6875:
/*!*****************************************************!*\
  !*** ./src/app/components/forum/forum.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForumComponent": () => (/* binding */ ForumComponent)
/* harmony export */ });
/* harmony import */ var _home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _forum_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forum.component.html?ngResource */ 7985);
/* harmony import */ var _forum_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forum.component.scss?ngResource */ 8912);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_apiclient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/apiclient.service */ 543);







let ForumComponent = class ForumComponent {
  constructor(api, toastController) {
    this.api = api;
    this.toastController = toastController; // Esta propiedad se usa para mantener los datos de la nueva publicación o de la
    // edición de una publicación ya existente. Para ello la propiedad se liga usando
    // ngModel con las cajas de texto de: Título y Cuerpo, junto con respaldar los datos
    // de: Id de publicación, Id del usuario que hizo la publicación y su nombre.

    this.publicacion = {
      userId: null,
      id: null,
      title: '',
      body: '',
      name: ''
    };
  } // El siguiente es uno de los eventos del ciclo de vida de las páginas en Ionic/Angular.
  // Se trata del evento "ionViewWillEnter" que ocurre justo cuando se va a entrar a la
  // página, pero antes de mostrarla. De esta forma se aprovecha este evento para
  // hacer lo siguiente:
  // 1. Dejar la página sin un "Publicador" seleccionado, pues es el usuario quién lo debe
  // seleccionar con el control gráfico de "ion-select".
  // 2. Limpiar por completo las propiedades y cajas de texto que permiten el ingreso o
  // edición de una publicación.
  // 3. Cargar el "ion-select" con los usuarios para que se pueda escoger un "Publicador".
  // 4. Cargar la lista de "Publicaciones recientes".


  startApiComponent() {
    this.selectedUserId = null;
    this.setPublicacion(null, null, '', '', '');
    this.getUsuarios();
    this.getPublicaciones();
  } // Este método se ejecuta cada vez que el usuario cambia el nombre del "Publicador",
  // en el control gráfico de "ion-select", de modo de mantener sincronizadas las
  // nuevas publicaciones con el "Publicador" seleccionado.


  cambiarUsuario($event) {
    this.setPublicacion($event, null, '', '', '');
  } // El siguiente método limpia las cajas de texto de edición de la Publicación.
  // Pero se debe tener en cuenta de que el campo de control "this.publicacion.userId",
  // no se limpia con un nulo, sino que toma siempre el valor del userId que corresponde
  // al nombre del usuario seleccionado como "Publicador".


  limpiarPublicacion() {
    this.setPublicacion(this.selectedUserId, null, '', '', '');
  } // El siguiente método sirve para configurar (o asignar) los valores de las
  // cajas de texto para agregar o modificar una Publicación. La propiedad
  // "this.publicacion" se despliega como interpolación en las cajas de Título y Cuerpo.
  // El método en su segunda parte muestra los datos de la publicación que no se ven,
  // estos son: el id del usuario y el id de la publicación. Estos datos no se deben
  // mostrar porque sólo son datos de control, sin embargo como estamos depurando la
  // aplicación los mostraremos en color verde. Si el parámetro userId viene en null
  // es porque el usuario no ha seleccionado su nombre en el campo "Publicador".
  // Por otro lado si el parámetro pubId viene en null es porque se trata de una
  // nueva publicación, mientras que si tiene un valor, es porque el usuario seleccionó
  // una publicación con el botón de lápiz en el listado de "Publicaciones recientes".


  setPublicacion(userId, pubId, title, body, name) {
    // Establecer los datos de la publicación
    this.publicacion.userId = userId;
    this.publicacion.id = pubId;
    this.publicacion.title = title;
    this.publicacion.body = body;
    this.publicacion.name = name; // mostrar los datos de control, que sirven para saber si se trata de una
    // nueva pubicación o de una ya existente que se está editando actualmente.

    const uid = userId === null ? 'no seleccionado' : userId;
    const pid = pubId === null ? 'nueva' : pubId;
    this.publicacionSeleccionada = `(userId: ${uid} - pubId: ${pid})`;
  } // El siguiente método se subscribe a la Promesa que entrega nuestra Api Cliente
  // mediante el método "this.api.getUsuarios()" de modo que una vez que haya
  // recibidos los usuario, le asigna esta lista a la propiedad "this.usuarios"
  // que está ligada por ngModel con la propiedad "this.selectedUserId" y que
  // llena el "ion-select" con todos los usuarios usando la directiva
  // *ngFor="let u of usuarios" en cada uno de los "ion-select-option" de la lista.


  getUsuarios() {
    this.api.getUsuarios().subscribe(data => this.usuarios = data);
  } // El siguiente método llena la lista de "Publicaciones recientes".
  // Para llenar todos los ítem de la lista de "Publicaciones recientes",
  // hay que subscribirse a la Promesa que entrega nuestra Api Cliente
  // mediante el método "this.api.getPublicaciones()". Si la lista es
  // obtenida correctamente, entonces, el programa se subscribe a una
  // nueva Promesa que entrega nuestra Api Cliente mediante el método
  // "this.api.getUsuarios()" de modo que una vez recibidos los usuarios
  // el programa recorre con un forEach todas las publicaciones para
  // llenarles el nombre del usuario que realizó la publicación. Como
  // la lista de Publicaciones viene con los registros desde el más
  // antiguo al más nuevo, lo que se hace es usar el método
  // "publicaciones.reverse()" que invierte el orden de más reciente
  // a más antiguo.


  getPublicaciones() {
    this.api.getPublicaciones().subscribe(publicaciones => {
      // Las siguientes líneas son para llenar los nombres de los usuarios
      // que realizaron las publicaciones, puesto que en los registros de
      // las "Publicaciones recientes" sólo viene el "ID de Usuario", pero
      // no su nombre. Para obtener todos los nombres de todos los usuarios,
      // hay que subscribirse a la Promesa que entrega nuestra Api Cliente
      // mediante el método "this.api.getUsuarios()"
      this.api.getUsuarios().subscribe(usuarios => {
        // Recorrer las publicaciones para actualizar el nombre del usuario
        publicaciones.forEach(publicacion => {
          publicacion.name = usuarios.find(u => u.id === publicacion.userId).name;
        }); // Invertir la lista de publicaciones para que muestre desde la más nueva a la más antigua

        publicaciones.reverse(); // Actualizar lista de publicaciones

        this.publicaciones = publicaciones;
      });
    });
  } // Este método permite guardar las publicaciones que se mostrarán en la lista de
  // "Publicaciones recientes". El método primero verifica que se haya seleccionado: un
  // Usuario Publicador, el Título y el Cuerpo de la Publicación.
  // El programa verifica si la propiedad "this.publicacion.id" es null, en cuyo caso
  // se trata de una publicación nueva, pero en caso de que tenga valor se trata
  // de la edición de una Publicación ya existente. El valor de "this.publicacion.id"
  // se usa como dato de control para saber si hay que crear o actualizar. Cada vez
  // que un susuario presiona el botón de lápiz para editar una publicación, se llena el
  // valor de "this.publicacion.id" con número de publicación correspondiente al
  // item seleccionado en la lista.


  guardarPublicacion() {
    if (this.publicacion.userId === null) {
      this.mostrarMensaje('Antes de hacer una publicación debe seleccionar un usuario.');
      return;
    }

    if (this.publicacion.title.trim() === '') {
      this.mostrarMensaje('Antes de hacer una publicación debe llenar el título.');
      return;
    }

    if (this.publicacion.body.trim() === '') {
      this.mostrarMensaje('Antes de hacer una publicación debe llenar el cuerpo.');
      return;
    }

    if (this.publicacion.id === null) {
      this.crearPublicacion();
    } else {
      this.actualizarPublicacion();
    }
  } // Es importante entender que el sitio web JSON Place holder no puede insertar
  // nuevas publicaciones de los programadores que usan su api para hacer pruebas.
  // Esto es muy lógico, pues de lo contrario todos los programadores que usaran
  // sus apis saturarían de registros sus servidores. No obstante, como indica la
  // documentación de JSON Place holder, ellos devolverán los mismos datos que
  // uno les mandó para hacer el "create", pero con el id "101". Para demostrar
  // que el registro fue creado, mostraremos un mensaje emergente de ToastController.
  // Para crear una nueva publicación hay que subscribirse a la Promesa que entrega
  // nuestra Api Cliente mediante el método "this.api.createPublicacion()"
  // enviándole los datos por medio de la propiedad "this.publicacion"


  crearPublicacion() {
    this.api.createPublicacion(this.publicacion).subscribe(data => {
      this.mostrarMensaje(`PUBLICACION CREADA CORRECTAMENTE: ${data.id} ${data.title}...`);
      this.limpiarPublicacion();
      this.getPublicaciones();
    }, error => this.mostrarError('NO FUE POSIBLE CREAR LA PUBLICACION.', error));
  } // Para actualizar una publicación hay que subscribirse a la Promesa que entrega
  // nuestra Api Cliente mediante el método "this.api.updatePublicacion()"
  // enviándole los datos por medio de la propiedad "this.publicacion"


  actualizarPublicacion() {
    this.api.updatePublicacion(this.publicacion).subscribe(data => {
      this.mostrarMensaje(`PUBLICACION ACTUALIZADA CORRECTAMENTE: ${data.id} ${data.title}...`);
      this.limpiarPublicacion();
      this.getPublicaciones();
    }, error => this.mostrarError('NO FUE POSIBLE ACTUALIZAR LA PUBLICACION.', error));
  } // Este método se usa para transferir los datos de una Publicación desde la lista
  // de "Publicaciones recientes", hacia las cajas de texto de Título y Cuerpo, donde
  // se pueden modificar ambos datos, para luego poder actualizarlos presionando el
  // botón de Guardar. El método se activa cuando el usuario hace clic en el botón de
  // lápiz que se encuentra a la derecha de cada publicación en la lista implementada
  // con el control gráfico "ion-list". Nótese que al lado de cada ítem hay un botón de
  // lápiz para editar y otro de tarro de basura para eliminar una publicación.
  // Resulta muy importante comprender que para poder modificar una publicación ya
  // existente, se debe guardar el Id del usuario y el Id de la publicación (su número),
  // ya que sólo de esta forma el programa se puede dar cuenta de cuál publicación es la
  // que hay que actualizar. El Id de usuario se almacena en la propiedad
  // "this.publicacion.userId" y se actualiza cada vez que el usuario decide cambiar
  // su nombre de "Publicador" en el "ion-select" (combobox de usuarios). Cuando
  // un usuario cambia de "Publicador" en el combobox se activa el evento
  // "cambiarUsuario($event: number)" que recibe el Id del usuario seleccionado
  // por medio del parámetro $event.


  editarPublicacion($event) {
    const pub = $event;
    this.setPublicacion(pub.userId, pub.id, pub.title, pub.body, pub.name);
    document.getElementById('topOfPage').scrollIntoView({
      block: 'end',
      behavior: 'smooth'
    });
  } // Este método sirve para eliminar una publicación de la lista. Para poder identificar
  // la publicación que ha seleccionado el usuario se le envía el objeto completo
  // con todos los datos de la publicación. Lo anterior se consigue programando el evento
  // (click)="editarPublicacion(p)" donde p es la publicación que se va mostrando una
  // por una gracias al comando *ngFor="let p of publicaciones;" usando en el tag "ion-item"


  eliminarPublicacion($event) {
    const pubId = $event.id;
    this.api.deletePublicacion(pubId).subscribe(data => {
      this.mostrarMensaje(`PUBLICACION ELIMINADA CORRECTAMENTE: ${pubId}...`);
      this.limpiarPublicacion();
      this.getPublicaciones();
    }, error => this.mostrarError('NO FUE POSIBLE ELIMINAR LA PUBLICACION.', error));
  } // Este método ayuda a Angular a resolver más rápidamente la necesidad
  // refrescar las listas de datos cuando son muy grandes, ya que es el
  // propio programador quién le indica a Angular cuál es el identificador
  // único del ítem. En este caso la lista está compuesta por publicaciones,
  // donde el identificador único de cada publicación es la propiedad "id"
  // (es el campo que aparece en la lista como "Publicación #nnn").


  getIdentificadorItemPublicacion(index, item) {
    return item.id;
  } // El siguiente método sirve para mostrar un mensaje informativo al usuario


  mostrarMensaje(mensaje) {
    var _this = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this.toastController.create({
        message: mensaje,
        duration: 3000,
        color: 'success'
      });
      toast.present();
    })();
  } // El siguiente método se encarga de mostrar un mensaje de error en
  // caso de que algún método lo haya informado en los scripts de
  // "error" o "catch". Esta función no sólo muestra un mensaje al usuario
  // sino que también arroja el mismo error a la consola del browser,
  // para que el programador pueda encontrar rápidamente el problema


  mostrarError(mensaje, error) {
    var _this2 = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(mensaje);
      const toast = yield _this2.toastController.create({
        message: mensaje,
        duration: 3000,
        color: 'danger'
      });
      toast.present();
      throw error;
    })();
  }

};

ForumComponent.ctorParameters = () => [{
  type: src_app_services_apiclient_service__WEBPACK_IMPORTED_MODULE_3__.APIClientService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController
}];

ForumComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-forum',
  template: _forum_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_forum_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ForumComponent);


/***/ }),

/***/ 5408:
/*!*************************************************************!*\
  !*** ./src/app/components/qr-reader/qr-reader.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrReaderComponent": () => (/* binding */ QrReaderComponent)
/* harmony export */ });
/* harmony import */ var _home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _qr_reader_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qr-reader.component.html?ngResource */ 7138);
/* harmony import */ var _qr_reader_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./qr-reader.component.scss?ngResource */ 7337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor-community/barcode-scanner */ 8353);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/storage.service */ 1188);







let QrReaderComponent = class QrReaderComponent {
  constructor(storage) {
    this.storage = storage;
  }

  checkPermission() {
    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref = (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          const {
            granted
          } = yield _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_3__.BarcodeScanner.checkPermission({
            force: true
          });

          if (!granted) {
            _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_3__.BarcodeScanner.openAppSettings();
            resolve(false);
            return;
          }

          resolve(true);
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }

  scan() {
    var _this = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const allowed = yield _this.checkPermission();

      if (allowed) {
        const aux = document.body.style.background;
        document.body.style.background = 'transparent';
        const {
          hasContent,
          content
        } = yield _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_3__.BarcodeScanner.startScan({
          targetedFormats: [_capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_3__.SupportedFormat.QR_CODE]
        });
        document.body.style.background = aux;

        if (hasContent) {
          return content;
        }

        alert('No fue posible detectar un código QR');
        return '';
      }

      alert('Para escanear un código QR debe otorgar permisos para la cámara');
      return '';
    })();
  }

  stop() {
    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_3__.BarcodeScanner.stopScan();
    })();
  }

};

QrReaderComponent.ctorParameters = () => [{
  type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService
}];

QrReaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-qr-reader',
  template: _qr_reader_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_qr_reader_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], QrReaderComponent);


/***/ }),

/***/ 3244:
/*!*********************************************************!*\
  !*** ./src/app/components/welcome/welcome.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomeComponent": () => (/* binding */ WelcomeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _welcome_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome.component.html?ngResource */ 1977);
/* harmony import */ var _welcome_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome.component.scss?ngResource */ 8098);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);






let WelcomeComponent = class WelcomeComponent {
    constructor(activeroute, router, alertController, animationController, loadingController) {
        this.activeroute = activeroute;
        this.router = router;
        this.alertController = alertController;
        this.animationController = animationController;
        this.loadingController = loadingController;
        // Se llama a la ruta activa y se obtienen sus parámetros mediante una subscripcion
        this.activeroute.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) { // Validar que tenga datos extras
                // Si tiene datos extra, se rescatan y se asignan a una propiedad
                this.nombre = this.router.getCurrentNavigation().extras.state.usuario.nombre;
            }
            else {
                /*
                  Si no vienen datos extra desde la página anterior, quiere decir que el usuario
                  intentó entrar directamente a la página home sin pasar por el login,
                  de modo que el sistema debe enviarlo al login para que inicie sesión.
                */
                this.router.navigate(['/login']);
            }
        });
    }
    ngOnInit() { }
};
WelcomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AnimationController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.LoadingController }
];
WelcomeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-welcome',
        template: _welcome_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_welcome_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], WelcomeComponent);



/***/ }),

/***/ 6610:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_components_clase_clase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/clase/clase.component */ 5229);
/* harmony import */ var src_app_components_forum_forum_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/forum/forum.component */ 6875);
/* harmony import */ var src_app_components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/welcome/welcome.component */ 3244);
/* harmony import */ var _components_qr_reader_qr_reader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/qr-reader/qr-reader.component */ 5408);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.page */ 678);








const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_4__.HomePage,
        children: [
            {
                path: 'welcome',
                component: src_app_components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__.WelcomeComponent
            },
            {
                path: 'qrreader',
                component: _components_qr_reader_qr_reader_component__WEBPACK_IMPORTED_MODULE_3__.QrReaderComponent
            },
            {
                path: 'clase',
                component: src_app_components_clase_clase_component__WEBPACK_IMPORTED_MODULE_0__.ClaseComponent
            },
            {
                path: 'forum',
                component: src_app_components_forum_forum_component__WEBPACK_IMPORTED_MODULE_1__.ForumComponent
            },
        ]
    },
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 7994:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 678);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 6610);
/* harmony import */ var _components_qr_reader_qr_reader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/qr-reader/qr-reader.component */ 5408);
/* harmony import */ var src_app_components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/welcome/welcome.component */ 3244);
/* harmony import */ var src_app_components_clase_clase_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/clase/clase.component */ 5229);
/* harmony import */ var src_app_components_forum_forum_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/forum/forum.component */ 6875);











let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule,
        ],
        declarations: [
            _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
            src_app_components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__.WelcomeComponent,
            _components_qr_reader_qr_reader_component__WEBPACK_IMPORTED_MODULE_2__.QrReaderComponent,
            src_app_components_clase_clase_component__WEBPACK_IMPORTED_MODULE_4__.ClaseComponent,
            src_app_components_forum_forum_component__WEBPACK_IMPORTED_MODULE_5__.ForumComponent
        ]
    })
], HomePageModule);



/***/ }),

/***/ 678:
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var _home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.html?ngResource */ 8380);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 2260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_components_clase_clase_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/clase/clase.component */ 5229);
/* harmony import */ var src_app_components_forum_forum_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/forum/forum.component */ 6875);
/* harmony import */ var src_app_components_qr_reader_qr_reader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/qr-reader/qr-reader.component */ 5408);
/* harmony import */ var src_app_components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/welcome/welcome.component */ 3244);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/storage.service */ 1188);











let HomePage = class HomePage {
  constructor(router, storage, activeroute) {
    this.router = router;
    this.storage = storage;
    this.activeroute = activeroute;
    this.showwelcome = true;
    this.showqrreader = false;
    this.showdinosaur = false;
    this.showforum = false;
    this.selectedComponent = '';
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        // Validar que tenga datos extras
        // Si tiene datos extra, se rescatan y se asignan a una propiedad
        this.usuario = this.router.getCurrentNavigation().extras.state.usuario.nombre;
      } else {
        /*
          Si no vienen datos extra desde la página anterior, quiere decir que el usuario
          intentó entrar directamente a la página home sin pasar por el login,
          de modo que el sistema debe enviarlo al login para que inicie sesión.
        */
        this.router.navigate(['/login']);
      }
    });
  }

  ionViewDidEnter() {
    this.showComponent('welcome');
  }

  ionViewWillLeave() {
    this.qrreader.stop();
  }

  showComponent(name) {
    var _this = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.showwelcome = name === 'welcome';
      _this.showqrreader = name === 'qrreader';
      _this.showdinosaur = name === 'clase';
      _this.showforum = name === 'forum';

      if (name === 'qrreader') {
        const content = yield _this.qrreader.scan();
        yield _this.storage.saveQR(content);
        _this.showqrreader = false;
        _this.selectedComponent = 'clase';
        _this.showdinosaur = true;

        _this.dinosaur.showDinoData();
      } else {
        _this.qrreader.stop();
      }

      if (name === 'forum') {
        _this.forum.startApiComponent();
      }
    })();
  }

  segmentChanged($event) {
    this.showComponent($event.detail.value);
  }

  stopScanner() {
    var _this2 = this;

    return (0,_home_alumno_Descargas_proyecto2control3_proyecto2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.qrreader.stop();

      _this2.showComponent('welcome');

      _this2.selectedComponent = 'welcome';
    })();
  }

};

HomePage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
}, {
  type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_7__.StorageService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
}];

HomePage.propDecorators = {
  welcome: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
    args: [src_app_components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__.WelcomeComponent]
  }],
  qrreader: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
    args: [src_app_components_qr_reader_qr_reader_component__WEBPACK_IMPORTED_MODULE_5__.QrReaderComponent]
  }],
  dinosaur: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
    args: [src_app_components_clase_clase_component__WEBPACK_IMPORTED_MODULE_3__.ClaseComponent]
  }],
  forum: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
    args: [src_app_components_forum_forum_component__WEBPACK_IMPORTED_MODULE_4__.ForumComponent]
  }]
};
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-home',
  template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], HomePage);


/***/ }),

/***/ 543:
/*!***********************************************!*\
  !*** ./src/app/services/apiclient.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APIClientService": () => (/* binding */ APIClientService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 8919);




let APIClientService = class APIClientService {
    constructor(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                'content-type': 'application/json',
                'access-control-allow-origin': '*'
            })
        };
        this.apiUrl = 'https://jsonplaceholder.typicode.com';
    }
    getUsuario(userId) {
        return this.http.get(this.apiUrl + '/users/' + userId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(3));
    }
    getUsuarios() {
        return this.http.get(this.apiUrl + '/users/').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(3));
    }
    getPublicaciones() {
        return this.http.get(this.apiUrl + '/posts/').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(3));
    }
    getPublicacion(idPublicacion) {
        return this.http.get(this.apiUrl + '/posts/' + idPublicacion).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(3));
    }
    createPublicacion(publicacion) {
        return this.http.post(this.apiUrl + '/posts/', publicacion, this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(3));
    }
    updatePublicacion(publicacion) {
        return this.http.put(this.apiUrl + '/posts/' + publicacion.id, publicacion, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(3));
    }
    deletePublicacion(publicacionId) {
        return this.http.delete(this.apiUrl + '/posts/' + publicacionId, this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(3));
    }
};
APIClientService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
APIClientService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], APIClientService);



/***/ }),

/***/ 1176:
/*!***********************************************************************************!*\
  !*** ./node_modules/@capacitor-community/barcode-scanner/dist/esm/definitions.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraDirection": () => (/* binding */ CameraDirection),
/* harmony export */   "SupportedFormat": () => (/* binding */ SupportedFormat)
/* harmony export */ });
var SupportedFormat;

(function (SupportedFormat) {
  // BEGIN 1D Product

  /**
   * Android only, UPC_A is part of EAN_13 according to Apple docs
   */
  SupportedFormat["UPC_A"] = "UPC_A";
  SupportedFormat["UPC_E"] = "UPC_E";
  /**
   * Android only
   */

  SupportedFormat["UPC_EAN_EXTENSION"] = "UPC_EAN_EXTENSION";
  SupportedFormat["EAN_8"] = "EAN_8";
  SupportedFormat["EAN_13"] = "EAN_13"; // END 1D Product
  // BEGIN 1D Industrial

  SupportedFormat["CODE_39"] = "CODE_39";
  /**
   * iOS only
   */

  SupportedFormat["CODE_39_MOD_43"] = "CODE_39_MOD_43";
  SupportedFormat["CODE_93"] = "CODE_93";
  SupportedFormat["CODE_128"] = "CODE_128";
  /**
   * Android only
   */

  SupportedFormat["CODABAR"] = "CODABAR";
  SupportedFormat["ITF"] = "ITF";
  /**
   * iOS only
   */

  SupportedFormat["ITF_14"] = "ITF_14"; // END 1D Industrial
  // BEGIN 2D

  SupportedFormat["AZTEC"] = "AZTEC";
  SupportedFormat["DATA_MATRIX"] = "DATA_MATRIX";
  /**
   * Android only
   */

  SupportedFormat["MAXICODE"] = "MAXICODE";
  SupportedFormat["PDF_417"] = "PDF_417";
  SupportedFormat["QR_CODE"] = "QR_CODE";
  /**
   * Android only
   */

  SupportedFormat["RSS_14"] = "RSS_14";
  /**
   * Android only
   */

  SupportedFormat["RSS_EXPANDED"] = "RSS_EXPANDED"; // END 2D
})(SupportedFormat || (SupportedFormat = {}));

var CameraDirection;

(function (CameraDirection) {
  CameraDirection["FRONT"] = "front";
  CameraDirection["BACK"] = "back";
})(CameraDirection || (CameraDirection = {}));

/***/ }),

/***/ 8353:
/*!*****************************************************************************!*\
  !*** ./node_modules/@capacitor-community/barcode-scanner/dist/esm/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BarcodeScanner": () => (/* binding */ BarcodeScanner),
/* harmony export */   "CameraDirection": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraDirection),
/* harmony export */   "SupportedFormat": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.SupportedFormat)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 1176);

const BarcodeScanner = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('BarcodeScanner', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor-community_barcode-scanner_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 2041)).then(m => new m.BarcodeScannerWeb())
});



/***/ }),

/***/ 8919:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/retry.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "retry": () => (/* binding */ retry)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ 14);

function retry(count = -1) {
  return source => source.lift(new RetryOperator(count, source));
}

class RetryOperator {
  constructor(count, source) {
    this.count = count;
    this.source = source;
  }

  call(subscriber, source) {
    return source.subscribe(new RetrySubscriber(subscriber, this.count, this.source));
  }

}

class RetrySubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber {
  constructor(destination, count, source) {
    super(destination);
    this.count = count;
    this.source = source;
  }

  error(err) {
    if (!this.isStopped) {
      const {
        source,
        count
      } = this;

      if (count === 0) {
        return super.error(err);
      } else if (count > -1) {
        this.count = count - 1;
      }

      source.subscribe(this._unsubscribeAndRecycle());
    }
  }

}

/***/ }),

/***/ 7283:
/*!******************************************************************!*\
  !*** ./src/app/components/clase/clase.component.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = ".dino-content {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 250px;\n  margin: auto;\n  max-width: 90%;\n  max-height: 90%;\n  animation: createBox1 2s;\n}\n\n@keyframes createBox1 {\n  from {\n    transform: scale(0);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0UsbUJBQUE7RUFDSjtFQUNFO0lBQ0UsbUJBQUE7RUFDSjtBQUNGIiwiZmlsZSI6ImNsYXNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpbm8tY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDI1MHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgICBtYXgtaGVpZ2h0OiA5MCU7XHJcbiAgICBhbmltYXRpb246IGNyZWF0ZUJveDEgMnM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgY3JlYXRlQm94MSB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIH1cclxuICB9XHJcbiJdfQ== */";

/***/ }),

/***/ 8912:
/*!******************************************************************!*\
  !*** ./src/app/components/forum/forum.component.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3J1bS5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 7337:
/*!**************************************************************************!*\
  !*** ./src/app/components/qr-reader/qr-reader.component.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxci1yZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 8098:
/*!**********************************************************************!*\
  !*** ./src/app/components/welcome/welcome.component.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3ZWxjb21lLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 2260:
/*!******************************************************!*\
  !*** ./src/app/pages/home/home.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = ".center-margin-auto {\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlci1tYXJnaW4tYXV0byB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn0iXX0= */";

/***/ }),

/***/ 8880:
/*!******************************************************************!*\
  !*** ./src/app/components/clase/clase.component.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-content [fullscreen]=\"true\">\n\n  <img src=\"{{ clase.image }}\" [hidden]=\"!hasData\">\n  \n  <ion-grid fixed [hidden]=\"!hasData\" class=\"dino-content\">\n    <ion-row>\n      <ion-col size=\"5\">Bloque Inicio</ion-col>\n      <ion-col size=\"7\">{{ clase.bloqueInicio }}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"5\">Bloque Termino</ion-col>\n      <ion-col size=\"7\">{{ clase.bloqueTermino }}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"5\">Dia</ion-col>\n      <ion-col size=\"7\">{{ clase.dia }}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"5\">Hora Fin</ion-col>\n      <ion-col size=\"7\">{{ clase.horaFin }}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"5\">Hora Inicio</ion-col>\n      <ion-col size=\"7\">{{ clase.horaInicio }}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"5\">ID Asignatura</ion-col>\n      <ion-col size=\"7\">{{ clase.idAsignatura }}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"5\">Nombre Asignatura</ion-col>\n      <ion-col size=\"7\">{{ clase.nombreAsignatura }}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"5\">Nombre Profesor</ion-col>\n      <ion-col size=\"7\">{{ clase.nombreProfesor }}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"5\">Seccion</ion-col>\n      <ion-col size=\"7\">{{ clase.seccion }}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"5\">Sede</ion-col>\n      <ion-col size=\"7\">{{ clase.sede }}</ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>";

/***/ }),

/***/ 7985:
/*!******************************************************************!*\
  !*** ./src/app/components/forum/forum.component.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n\n  <ion-toolbar mode=\"ios\">\n    <ion-title class=\"tituloPrincipal\">\n      ¡Foro TODAY!\n    </ion-title>\n  </ion-toolbar>\n\n  <ion-toolbar>\n    <ion-card>\n      <ion-item lines=\"none\">\n        <span>\n          Publicador:&nbsp;\n        </span>\n        <ion-select placeholder=\"Seleccione su usuario\"\n            class=\"ion-float-right\"\n            [(ngModel)]=\"selectedUserId\"\n            (ngModelChange)=\"cambiarUsuario($event)\">\n          <ion-select-option *ngFor=\"let u of usuarios\" [value]=\"u.id\">\n            {{u.name}}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-card>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <a id=\"topOfPage\" href=\"#topOfPage\"></a>\n  <ion-card>\n\n    <ion-card-header>\n      <ion-card-title>Ingresa tu publicación</ion-card-title>\n      <ion-card-subtitle class=\"publicacionSeleccionada\">{{publicacionSeleccionada}}</ion-card-subtitle>\n    </ion-card-header>\n\n    <ion-item class=\"ion-padding-horizontal\">\n      <ion-label position=\"floating\" color=\"Secondary\">Título</ion-label>\n      <ion-input [(ngModel)]=\"publicacion.title\"></ion-input>\n    </ion-item>\n\n    <ion-item class=\"ion-padding-horizontal\">\n      <ion-label position=\"floating\" color=\"Secondary\">Cuerpo</ion-label>\n      <ion-textarea [(ngModel)]=\"publicacion.body\"></ion-textarea>\n    </ion-item>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col><ion-button shape=\"round\" expand=\"block\" (click)=\"limpiarPublicacion()\">Limpiar</ion-button></ion-col>\n        <ion-col><ion-button shape=\"round\" expand=\"block\" (click)=\"guardarPublicacion()\">Guardar</ion-button></ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </ion-card>\n\n  <ion-card class=\"sin-bordes\">\n    <ion-card-title class=\"con-padding-top\">Publicaciones recientes</ion-card-title>\n  </ion-card>\n\n  <ion-card *ngFor=\"let p of publicaciones; let i=index; trackBy: getIdentificadorItemPublicacion\">\n\n    <ion-card-header>\n      <h6>(Publicación #{{p.id}}) {{p.name}}</h6>\n      <h4>{{p.title}}</h4>\n    </ion-card-header>\n  \n    <ion-card-content>\n      {{p.body}}\n    </ion-card-content>\n\n    <ion-button (click)=\"editarPublicacion(p)\">\n      <ion-icon slot=\"icon-only\" name=\"pencil-outline\"></ion-icon>\n    </ion-button>\n\n    <ion-button (click)=\"eliminarPublicacion(p)\">\n      <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n    </ion-button>\n\n  </ion-card>\n\n</ion-content>\n";

/***/ }),

/***/ 7138:
/*!**************************************************************************!*\
  !*** ./src/app/components/qr-reader/qr-reader.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "";

/***/ }),

/***/ 1977:
/*!**********************************************************************!*\
  !*** ./src/app/components/welcome/welcome.component.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<div>\n  <h1 #bienvenido class=\"ion-text-center\">¡Bienvenido!</h1>\n  <br>\n  <p id=\"nombre\" *ngIf=\"usuario\" class = \"usuario\" style = \"text-align: center;\" [(ngModel)] = \"nombre\"></p>\n\n</div>";

/***/ }),

/***/ 8380:
/*!******************************************************!*\
  !*** ./src/app/pages/home/home.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-item>\n    <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Logo_DuocUC.svg/2560px-Logo_DuocUC.svg.png\" alt=\"logo\" height=\"30\">\n    <ion-title #titulo class=\"ion-text-left ion-text\">\n      <div id=\"titulo\">\n        Sistema de Asistencia \n        <br>\n        <p id=\"nombre\" *ngIf=\"usuario\" class = \"usuario\" style = \"text-align: center;\"> [(ngModel)] = \"usuario.nombre\"</p>\n      </div>\n    </ion-title>\n    <!-- <ion-button (click)=\"salir()\" expand=\"block\" shape=\"round\" class=\"right-margin-auto\">Cerrar Sesion</ion-button> -->\n  </ion-item>\n  <ion-item [hidden]=\"!showqrreader\">\n    <ion-button (click)=\"stopScanner()\" expand=\"block\" shape=\"round\" class=\"center-margin-auto\">\n      Stop scanner\n    </ion-button>\n  </ion-item>\n</ion-header>\n\n <ion-content [fullscreen]=\"true\" [hidden]=\"showqrreader\">\n  <app-welcome #welcome [hidden]=\"!showwelcome\"></app-welcome>\n  <app-clase #dinosaur [hidden]=\"!showdinosaur\"></app-clase>\n  <app-forum #forum [hidden]=\"!showforum\"></app-forum>\n</ion-content>\n\n<app-qr-reader #qrreader></app-qr-reader>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-segment value=\"welcome\" (ionChange)=\"segmentChanged($event)\" [(ngModel)]=\"selectedComponent\">\n\n      <ion-segment-button value=\"welcome\">\n        <ion-icon name=\"home-outline\"></ion-icon>\n        <ion-label>Welcome</ion-label>\n      </ion-segment-button>\n\n      <ion-segment-button value=\"qrreader\">\n        <ion-icon name=\"qr-code-outline\"></ion-icon>\n        <ion-label>Scan</ion-label>\n      </ion-segment-button>\n      \n      <ion-segment-button #dinoButton value=\"dinosaur\">\n        <ion-icon name=\"alarm-outline\"></ion-icon>\n        <ion-label>CLase</ion-label>\n      </ion-segment-button>\n      \n      <ion-segment-button value=\"forum\">\n        <ion-icon name=\"pencil-outline\"></ion-icon>\n        <ion-label>Forum</ion-label>\n      </ion-segment-button>\n\n    </ion-segment>\n  </ion-toolbar>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map