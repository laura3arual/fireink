import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TattooistProfilePage} from "../tattooist-profile/tattooist-profile";


/**
 * Generated class for the DetailTattooPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-detail-tattoo',
  templateUrl: 'detail-tattoo.html',
})
export class DetailTattooPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailTattooPage');
  }

  public openDetail() {
    this.navCtrl.push(TattooistProfilePage);
  }

}
