import { Component, OnInit } from '@angular/core';
import {Router, NavigationExtras} from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { AuthService } from 'src/app/services/authentication.service';
import { DatabaseService } from 'src/app/services/database.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.page.html',
  styleUrls: ['./correo.page.scss'],
})
export class CorreoPage implements OnInit {
public correo: string= '';
public usuario: Usuario;
  constructor(private router: Router,
    private auth: AuthService,
    private readonly db: DatabaseService,
    private readonly storage: StorageService 
    ) { }

  ngOnInit() {
  }
  public ingresarValidarRespuestaSecreta(): void {
    this.db.buscarCorreo(this.correo).then((res)=> {
      if(res.length > 0) {
          this.storage.setItem('USER_DATA', JSON.stringify(res));
          this.router.navigate(['correcto']);
      }else {
        this.router.navigate(['incorrecto']);
      }
    });

  }

  iniciarSesion() {
    this.auth.logout();
  }
    
  
}
