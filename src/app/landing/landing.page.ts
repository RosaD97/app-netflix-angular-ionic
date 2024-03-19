import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { addIcons } from 'ionicons'; 
import { chevronForward } from 'ionicons/icons';




@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule ]
})
export class LandingPage {
public imageLanding: string = '../assets/image/play.png';

  constructor() {
    addIcons({ chevronForward });
  }


}
