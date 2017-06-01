import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Facebook} from "@ionic-native/facebook";
import firebase from 'firebase';
import { Platform } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  userProfile: any = null;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private facebook: Facebook,
              private platform: Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  facebookLogin(){
      return this.facebook.login(['email', 'public_profile']).then(res => {
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
        return firebase.auth().signInWithCredential(facebookCredential);
      }).catch((error) => {
        console.log("Firebase failure: " + JSON.stringify(error));
      });

  }

  googleLogin(){
    this.facebook.login(['email']).then( (response) => {
      const googleCredential = firebase.auth.GoogleAuthProvider
        .credential(response.authResponse.accessToken);

      firebase.auth().signInWithCredential(googleCredential)
        .then((success) => {
          console.log("Firebase success: " + JSON.stringify(success));
          this.userProfile = success;
        })
        .catch((error) => {
          console.log("Firebase failure: " + JSON.stringify(error));
        });

    }).catch((error) => { console.log(error) });
  }
}
