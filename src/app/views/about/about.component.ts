import {Component, OnInit} from '@angular/core';

import { environment } from 'environments/environment';
import * as Butter from 'buttercms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
  about: any;
  butterService = Butter(environment.butterCMS);

  constructor() { }

  ngOnInit() {
    this.butterService.page.retrieve('*', 'about')
      .then((res) => {
          this.about = res.data.data.fields.about;
      });
  }
}
