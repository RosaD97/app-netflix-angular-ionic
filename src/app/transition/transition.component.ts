import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { reloadOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  standalone: true,
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.scss'],
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]

})
export class TransitionComponent {
  // public imageLoad: string = '../assets/image/load.png';

  constructor() {
    addIcons({ reloadOutline });

   }


}
