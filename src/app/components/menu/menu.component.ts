import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface MenuItem {
  label: string;
  href: string;
}

@Component({
  selector: 'edu-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  menu: MenuItem[] = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Products',
      href: '/products',
    },
    {
      label: 'Cart',
      href: '/cart',
    },
  ];
}
