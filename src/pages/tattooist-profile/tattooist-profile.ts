import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DetailTattooPage} from "../detail-tattoo/detail-tattoo";

/**
 * Generated class for the TatooListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-tattooist-profile',
  templateUrl: 'tattooist-profile.html',
})
export class TattooistProfilePage {

  public activeTab: string = "tattoos";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public toggleTab(tab) {
    if(this.activeTab !== tab) {
      this.activeTab = tab;
    }
  }

  public openDetail() {
    this.navCtrl.push(DetailTattooPage);
  }

}
