import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';

import { MenuController, Platform, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { UserData } from './providers/user-data';

import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  appPages = [
    {
      title: 'Schedule',
      url: '/app/tabs/schedule',
      icon: 'calendar'
    },
    {
      title: 'Speakers',
      url: '/app/tabs/speakers',
      icon: 'contacts'
    },
    {
      title: 'Map',
      url: '/app/tabs/map',
      icon: 'map'
    },
    {
      title: 'About',
      url: '/app/tabs/about',
      icon: 'information-circle'
    }
  ];

  dark = false;
  public userDetails: KeycloakProfile;

  constructor(
    private menu: MenuController,
    private platform: Platform,
    private router: Router,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private userData: UserData,
    private swUpdate: SwUpdate,
    private toastCtrl: ToastController,
    private keycloakService: KeycloakService
  ) {
    this.initializeApp();
  }

  async ngOnInit() {
    if (await this.keycloakService.isLoggedIn()) {
      this.keycloakService.getToken().then(response => {
        localStorage.setItem('token', response);
      });

      this.keycloakService.loadUserProfile().then(response => {
        this.userDetails = response;
      });

      this.swUpdate.available.subscribe(async res => {
        const toast = await this.toastCtrl.create({
          message: 'Update available!',
          showCloseButton: true,
          position: 'bottom',
          closeButtonText: `Reload`
        });
        await toast.present();
        toast
          .onDidDismiss()
          .then(() => this.swUpdate.activateUpdate())
          .then(() => window.location.reload());
      });
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logout() {
    localStorage.clear();
    this.keycloakService.logout();
    this.router.navigateByUrl('/app/tabs/schedule');
  }

  openTutorial() {
    this.menu.enable(false);
    this.storage.set('ion_did_tutorial', false);
    this.router.navigateByUrl('/tutorial');
  }
}
