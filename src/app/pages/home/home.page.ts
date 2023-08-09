import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { Browser } from '@capacitor/browser';
import { ViewDidEnter, ViewWillLeave } from '@ionic/angular';
import { ClaseComponent } from 'src/app/components/clase/clase.component';
import { ForumComponent } from 'src/app/components/forum/forum.component';
import { QrReaderComponent } from 'src/app/components/qr-reader/qr-reader.component';
import { WelcomeComponent } from 'src/app/components/welcome/welcome.component';
import { Usuario } from 'src/app/model/Usuario';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements ViewDidEnter, ViewWillLeave {
  @ViewChild(WelcomeComponent) welcome: WelcomeComponent;
  @ViewChild(QrReaderComponent) qrreader: QrReaderComponent;
  @ViewChild(ClaseComponent) dinosaur: ClaseComponent;
  @ViewChild(ForumComponent) forum: ForumComponent;

  showwelcome = true;
  showqrreader = false;
  showdinosaur = false;
  showforum = false;
  public usuario: Usuario; 
  selectedComponent = '';

  constructor(
    private router: Router,
    private storage: StorageService,
    private activeroute: ActivatedRoute)
  {

    this.activeroute.queryParams.subscribe(params => {       // Utilizamos expresión lambda
      if (this.router.getCurrentNavigation().extras.state) { // Validar que tenga datos extras
    
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

  ionViewDidEnter(): void {
    this.showComponent('welcome');
  }

  ionViewWillLeave(): void {
    this.qrreader.stop();
  }

  async showComponent(name: string) {
    this.showwelcome = name === 'welcome';
    this.showqrreader = name === 'qrreader';
    this.showdinosaur = name === 'clase';
    this.showforum = name === 'forum';

    if (name === 'qrreader') {
      const content = await this.qrreader.scan();
      await this.storage.saveQR(content);
      this.showqrreader = false;
      this.selectedComponent = 'clase';
      this.showdinosaur = true;
      this.dinosaur.showDinoData();
    } else {
      this.qrreader.stop();
    }
    if(name === 'forum') {
      this.forum.startApiComponent();
    }
  }

  segmentChanged($event) {
    this.showComponent($event.detail.value);
  }

  async stopScanner() {
    this.qrreader.stop();
    this.showComponent('welcome');
    this.selectedComponent = 'welcome';
  }

}
