import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  routerLinks: any[];
  navIcons: any[];
  navbarOpen = false;

  constructor(private router: Router) {
    this.routerLinks = [
      {label: 'Home', link: ''},
      {label: 'About', link: 'about'},
      {label: 'Github', link: 'github'},
      {label: 'Blog', link: 'blog'},
      {label: 'Contact', link: 'contact'}
    ];

    this.navIcons = [
      '<i class="fas fa-home fa-lg"></i>',
      '<i class="fas fa-user fa-lg"></i>',
      '<i class="fas fa-code fa-lg"></i>',
      '<i class="fab fa-blogger-b fa-lg"></i>',
      '<i class="fas fa-envelope fa-lg"></i>'
    ];
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  onClickedOutside(e: Event) {
    this.navbarOpen ? this.toggleNavbar() : '';
  }

  ngOnInit() { }
}
