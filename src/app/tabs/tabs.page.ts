import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationController, IonicModule } from '@ionic/angular';
import { homeOutline, searchOutline, heartOutline, bookmarkOutline, menuOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})

export class TabsPage implements OnInit {

  selectedTab: any;

  constructor(private animationCtrl: AnimationController) {
    addIcons({ homeOutline, searchOutline, heartOutline, bookmarkOutline, menuOutline });
  }

  ngOnInit() {
  }

  setCurrentTab(event: any) {
    this.selectedTab = event.tab;
    const tabButton = document.querySelector(`ion-tab-button[tab="${this.selectedTab}"]`);

  }

}
