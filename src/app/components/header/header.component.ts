import { Component } from '@angular/core';
import { UserProfileComponent } from "../user-profile/user-profile.component";
import { MenuComponent } from "../menu/menu.component";

@Component({
  selector: 'edu-header',
  standalone: true,
  imports: [UserProfileComponent, MenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
