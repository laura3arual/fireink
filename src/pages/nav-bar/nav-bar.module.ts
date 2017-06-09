import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NavBarPage } from './nav-bar';

@NgModule({
  declarations: [
    NavBarPage,
  ],
  imports: [
    IonicPageModule.forChild(NavBarPage),
  ],
  exports: [
    NavBarPage
  ]
})
export class NavBarPageModule {}
