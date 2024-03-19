import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { IonApp, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/angular/standalone';
// import { register } from 'swiper/element/bundle';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonicModule],
//   imports: [IonApp, IonRouterOutlet, IonApp,
//     IonRouterOutlet,
//     IonTabs, IonTabBar, IonTabButton],
 })
export class AppComponent {
  constructor() {
  }
}
