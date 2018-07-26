import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.template.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  routerLinks: any[];
  navIcons: any[];
  navbarOpen = false;

  constructor(private router: Router) {
    this.routerLinks = [
      {label: 'Home', link: ''},
      {label: 'About', link: 'about'},
      {label: 'Projects', link: 'github'},
      {label: 'Blog', link: 'blog'}
    ];

    this.navIcons = [
      '<i class="fas fa-home fa-lg"></i>',
      '<i class="fas fa-user fa-lg"></i>',
      '<i class="fas fa-code fa-lg"></i>',
      '<i class="fab fa-blogger-b fa-lg"></i>'
    ];
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  ngOnInit() {
    this.router.navigate(['']);
  }
}
