import { Component, OnInit } from '@angular/core';
import { NavbarStoreService } from '../../services/navbar-store.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  routerLinks: any[];
  navIcons: any[];
  navbarOpen = false;

  constructor(public navbarState: NavbarStoreService) {
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

  toggleNavbar()
  {
    this.navbarState.navbarState = !this.navbarState.navbarState;

   /*
    this.navbarOpen = !this.navbarOpen;

    if(this.navbarOpen)
    {
      document.getElementById('sidebar').className = 'active';
    } else {
      document.getElementById('sidebar').className = '';
    }*/
  }

  onClickedOutside(e: Event)
  {
    this.navbarState.navbarState ? this.toggleNavbar() : '';
  }

  ngOnInit() { }
}
