import { CommonModule } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'edu-user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

  isMenuShown: WritableSignal<boolean> = signal(false);

  updateMenuState(){
    this.isMenuShown.set(!this.isMenuShown());
  }

}
