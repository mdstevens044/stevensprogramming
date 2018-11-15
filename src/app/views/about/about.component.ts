import {Component, OnInit} from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})

export class AboutComponent implements OnInit {
  abouts: any;
  loading = true;

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
      .valueChanges.subscribe(({ data, loading }) => {
      this.loading = loading;
      this.abouts = data.abouts;
    });
  }

  replaceLineBreaks(replaceStr: string)
  {
    return replaceStr.replace(new RegExp('\r?\n','g'), '<br>');
  }
}
