import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-clase',
  templateUrl: './clase.component.html',
  styleUrls: ['./clase.component.scss'],
})
export class ClaseComponent implements OnInit {

  clase: any;
  hasData = false;
  jsonExample =
    `{
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
    jsonEmpty =
    `{
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

  constructor(private storage: StorageService, private router: Router) { }

  async ngOnInit() {
    this.showDinoData();
  }

  async showDinoData() {
    this.clase = JSON.parse(this.jsonEmpty);
    this.hasData = false;
    const data = await this.storage.getQR();
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
    this.hasData = true;
    this.clase = clase;
  }

}
