import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams} from "ionic-angular";
import {Facebook} from "@ionic-native/facebook";
import firebase from "firebase";
import {HomePage} from "../home/home";

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  userProfile: any = null;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private facebook: Facebook) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  facebookLogin(){
    this.navCtrl.push(HomePage);
      return this.facebook.login(['email', 'public_profile']).then(res => {
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
        return firebase.auth().signInWithCredential(facebookCredential).then((data: any) => {
        });
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
