import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';

import gql from 'graphql-tag';
import 'rxjs-compat/add/operator/map';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  contacts: any;

  constructor( private apollo: Apollo ) { }

  ngOnInit() {
    this.apollo
      .use('graphCms')
      .watchQuery<any>({
        query: gql`
          {
            contacts
            {
              contactForm
            }
          }
        `
      })
      .valueChanges.map((result: any) => result.data.contacts)
      .subscribe(data => {
        this.contacts = data;
      });
  }

}
