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
  selector: 'page-tattoo-list',
  templateUrl: 'tattoo-list.html',
})
export class TattooListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TatooListPage');
  }

  public openDetail() {
    this.navCtrl.push(DetailTattooPage);
  }

}
