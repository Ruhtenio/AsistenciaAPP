import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { capSQLiteChanges, DBSQLiteValues } from '@capacitor-community/sqlite';
import { ViewWillEnter } from '@ionic/angular';
import { showAlertDUOC, showAlertError } from 'src/app/model/Message';
import { Usuario } from 'src/app/model/Usuario';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.page.html',
  styleUrls: ['./crear-usuario.page.scss'],
})
export class CrearUsuarioPage implements ViewWillEnter {
  correo = '';
  password = '';
  nombreUsuario = '';
  preguntaSecreta = '';
  respuesta = '';
  sesionActiva = '';
  cantidad = 0;

  constructor(private router: Router, private db: DatabaseService) { }

  ionViewWillEnter(): void {
    this.setUsersLength();
  }

  setUsersLength() {
    this.db.readUsers().then((resp: DBSQLiteValues) => {
      this.cantidad = resp.values.length;
    }).catch((err) => {
      showAlertError('CreateUserPage.setUsersLenght', err);
    });
  }

  async registrarUsuario() {
    const usu: Usuario = new Usuario();
    const msg = usu.validarCamposUsuario(
      this.correo,
      this.password,
      this.nombreUsuario,
      this.preguntaSecreta,
      this.respuesta);

    if (msg !== '') {
      showAlertDUOC(msg);
      return;
    }

    await this.db.createUser(
      this.correo,
      this.password,
      this.nombreUsuario,
      this.preguntaSecreta,
      this.respuesta,
      'N'
    ).then((resp: capSQLiteChanges) => {
      if (resp.changes.changes === 1) {
        showAlertDUOC('Su cuenta fue creada con éxito');
        this.router.navigate(['login']);
      } else {
        showAlertDUOC('Su cuenta no pudo ser creada con éxito. Comuníquese con el Administrador del Sistema o intente nuevamente más tarde');
      }
    }).catch((err) => {
      showAlertError('CreateUserPage.registerNewUser', err);
    });
  }
  volverAtras() {
    this.router.navigate(['login']);
  }

}
