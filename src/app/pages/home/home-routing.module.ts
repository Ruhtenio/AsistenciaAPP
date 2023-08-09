import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaseComponent } from 'src/app/components/clase/clase.component';
import { ForumComponent } from 'src/app/components/forum/forum.component';
import { WelcomeComponent } from 'src/app/components/welcome/welcome.component';
import { QrReaderComponent } from '../../components/qr-reader/qr-reader.component';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'welcome',
        component: WelcomeComponent
      },
      {
        path: 'qrreader',
        component: QrReaderComponent
      },
      {
        path: 'clase',
        component: ClaseComponent
      },
      {
        path: 'forum',
        component: ForumComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
