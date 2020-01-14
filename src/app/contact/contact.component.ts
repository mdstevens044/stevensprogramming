import { Component, OnInit } from '@angular/core';

import { environment } from 'environments/environment';
import * as Butter from 'buttercms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  contact: any;
  butterService = Butter(environment.butterCMS);

  constructor() { }

  ngOnInit() {
    this.butterService.page.retrieve('*', 'contact')
      .then((res) => {
          this.contact = res.data.data.fields.contact;
      });
  }
}
