import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { reloadOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class ButtonComponent  {

  @Input('nameBtn') text = '';
  // @Input('icon') text = '';



  constructor() { }



}
