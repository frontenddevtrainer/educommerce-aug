import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { HeroBannerComponent } from "./components/hero-banner/hero-banner.component";

@Component({
  selector: 'edu-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeroBannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
