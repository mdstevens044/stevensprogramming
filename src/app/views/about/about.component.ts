import {Component, OnInit} from '@angular/core';
import { Apollo } from 'apollo-angular';

import gql from 'graphql-tag';
import 'rxjs-compat/add/operator/map';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
  abouts: any;

  constructor( private apollo: Apollo ) { }

  ngOnInit() {
    this.apollo
      .use('graphCms')
      .watchQuery<any>({
        query: gql`
          {
            abouts
            {
              about
            }
          }
        `
      })
      .valueChanges.map((result: any) => result.data.abouts)
      .subscribe(data => {
        this.abouts = data;
    });
  }

  replaceLineBreaks(replaceStr: string)
  {
    return replaceStr.replace(new RegExp('\r?\n','g'), '<br>');
  }
}
