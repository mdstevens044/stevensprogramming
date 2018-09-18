import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular-boost';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})

export class GithubComponent implements OnInit {

  error: string;
  repositories: any[];
  loading: boolean;

  constructor( private apollo: Apollo ) { }

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: gql`
          {
            viewer {
              repositories(first: 30) {
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
      .valueChanges.subscribe(result => {
      // @ts-ignore
      this.repositories = result.data && result.data.viewer.repositories.edges;
      this.loading = result.loading;
    });
  }
}
