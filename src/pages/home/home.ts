import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TattooListPage} from "../tattoo-list/tattoo-list";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  rootPage: any = TattooListPage;

  constructor(public navCtrl: NavController) {

  }

  public openFavorites() {

  }
  public openMessages() {

  }

  public closeSession() {

  }

}
