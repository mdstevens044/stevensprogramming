import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.template.html'
})

export class NavbarComponent {
  isCollapsed = true;

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
