import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { helpOutline, powerOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from 'src/app/components/button/button.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule, ButtonComponent]
})
export class MenuPage implements OnInit {
  options: any[] = [];

  constructor() {
    addIcons({ helpOutline, powerOutline });
   }

  ngOnInit() {
    this.options = [
      { id: 1, name: 'About', icon: 'help-outline' },
      { id: 2, name: 'Logout', icon: 'power-outline', color: 'danger' }
    ];
  }

}
