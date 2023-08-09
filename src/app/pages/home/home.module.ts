import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { QrReaderComponent } from '../../components/qr-reader/qr-reader.component';
import { WelcomeComponent } from 'src/app/components/welcome/welcome.component';
import { ClaseComponent } from 'src/app/components/clase/clase.component';
import { ForumComponent } from 'src/app/components/forum/forum.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [
    HomePage,
    WelcomeComponent,
    QrReaderComponent,
    ClaseComponent,
    ForumComponent
  ]
})
export class HomePageModule {}
