<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.template.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  routeLinks: any[];
  activeLinkIndex: number;

  constructor(private router: Router) {
    this.routeLinks = [
      {label: 'Home', link: ''},
      {label: 'About', link: 'about'},
      {label: 'Projects', link: 'projects'},
      {label: 'GitHub', link: 'github'},
      {label: 'Blog', link: 'blog'}
    ];
  }

  ngOnInit() {
    this.activeLinkIndex = 1;
    this.router.navigate(['']);
  }
}
=======
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
>>>>>>> 4c043cd088cbae25108d4d0ef04a73acab2f8093
