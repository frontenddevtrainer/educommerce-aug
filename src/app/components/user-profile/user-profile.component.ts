import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'edu-user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

  isMenuShown: boolean = false

  updateMenuState(){
    this.isMenuShown = !this.isMenuShown;
    console.log(this.isMenuShown);
  }

}
