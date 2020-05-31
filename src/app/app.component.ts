import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { NavbarStoreService } from './services/navbar-store.service';
import { Router, NavigationEnd } from '@angular/router';

declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.template.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  private swipeCoord?: [number, number];
  private swipeTime?: number;
  title = 'app';

  constructor(private swUpdate: SwUpdate, public navbarState: NavbarStoreService, public router: Router) {
    this.router.events.subscribe(event => {

      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });
  }

  ngOnInit() {
    if(this.swUpdate.isEnabled)
    {
      this.swUpdate.available.subscribe(() => {
        if(confirm('New version available. Load new version?'))
        {
          window.location.reload();
        }
      });
    }
  }

  swipe(e: TouchEvent, when: string): void {
    const coord: [number, number] = [e.changedTouches[0].clientX, e.changedTouches[0].clientY];
    const time = new Date().getTime();

    if (when === 'start') {
      this.swipeCoord = coord;
      this.swipeTime = time;
    } else if (when === 'end') {
      const direction = [coord[0] - this.swipeCoord[0], coord[1] - this.swipeCoord[1]];
      const duration = time - this.swipeTime;

      if (duration < 1000
        && Math.abs(direction[0]) > 30 // Long enough
        && Math.abs(direction[0]) > Math.abs(direction[1] * 3)) { // Horizontal enough
          const swipe = direction[0] < 0 ? 'left' : 'right';

          (swipe === 'left') ? this.navbarState.navbarState = false : this.navbarState.navbarState = true;
      }
    }
  }
}
