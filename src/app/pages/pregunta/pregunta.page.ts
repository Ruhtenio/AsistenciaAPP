import { Component, OnInit } from '@angular/core';
import {Router, NavigationExtras, ActivatedRoute} from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { SQLiteConnection, DBSQLiteValues } from '@capacitor-community/sqlite';
import { SQLiteService } from 'src/app/services/sqlite.service';
import { log } from 'src/app/model/Message';
@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.page.html',
  styleUrls: ['./pregunta.page.scss'],
})
export class PreguntaPage implements OnInit {

  public usuario: Usuario;
  public respuesta: string = '';
  SQLite: DBSQLiteValues;
  SQLiteService: SQLiteService;
     constructor(
        private activatedRoute: ActivatedRoute
      , private router: Router) 
      {

    
    this.activatedRoute.queryParams.subscribe(params => {       
      if (this.router.getCurrentNavigation().extras.state) { 
        this.usuario = this.router.getCurrentNavigation().extras.state.usuario;
      } else {
        this.router.navigate(['/login']);
      }
  });
}

  ngOnInit() {
  }
  public ValidarRespuestaSecreta(): void{
    if (this.usuario.respuestaSecreta == this.respuesta) {    //usuario.respuestaSecreta
      const navigationExtras: NavigationExtras = {
        state: {
          pass: this.usuario
        }
      };
      this.router.navigate(['/correcto'], navigationExtras);
      /*alert('Correcto !!! tu clave es ' + this.usuario.password)*/
    }
    else {
      this.router.navigate(['/incorrecto'])
    }
  }
}
