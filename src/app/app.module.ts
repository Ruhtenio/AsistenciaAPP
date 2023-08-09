import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import { StorageService } from './services/storage.service';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/authentication.service';
import { SQLiteService } from './services/sqlite.service';
import { DatabaseService } from './services/database.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [  
    DatabaseService,
    StorageService,
    SQLiteService,
    AuthService,
    AuthGuardService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
