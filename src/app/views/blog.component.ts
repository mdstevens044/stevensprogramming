import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'redirect',
  template: 'redirecting...'
})

export class BlogComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    window.location.href = '/blog';
  }
}
