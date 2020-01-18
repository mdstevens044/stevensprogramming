import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';

import gql from 'graphql-tag';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})

export class GithubComponent implements OnInit {

  repositories: any;
  loaded = false;

  constructor( private apollo: Apollo ) { }

  ngOnInit() {
    this.apollo
      .watchQuery<any>({
        query: gql`
          {
            viewer {
              repositories(first: 30, orderBy: {field: PUSHED_AT, direction: DESC}, privacy: PUBLIC) {
                edges {
                  node {
                    name
                    description
                    url
                    languages(first: 30, orderBy: {field: SIZE, direction: DESC}) {
                      edges {
                        node {
                          name
                          color
                        }
                        size
                      }
                      totalSize
                    }
                  }
                }
              }
            }
          }
        `,
      })
      .valueChanges.subscribe(({ data, loading }) => {
        this.loaded = true;
        this.repositories = data.viewer.repositories.edges;
    });
  }
}
