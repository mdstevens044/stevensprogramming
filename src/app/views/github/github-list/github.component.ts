import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo, gql } from 'apollo-angular-boost';

import { Github } from '../github';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
  providers: [GithubService]
})

export class GithubComponent implements OnInit {

  error: string;
  repoNamesRead = [];
  readMe = [];
  repositories: any[];
  loading: boolean;

  constructor( private gitService: GithubService, private router: Router, private apollo: Apollo ) { }

  getReadMe(repo) {
    if (!this.repoNamesRead.includes(repo)) {
      this.gitService
        .getReadMe(repo)
        .subscribe(res => {
          // success
          const read = [];
          let str = res.toString().replace(/##/g, '');
          str = str.replace(/#/g, '');
          read.push(str);
          for (let i = 0; i < read.length; i++) {
            if (read[i] !== ' ') {
              this.readMe.push(read[i]);
            }
          }
        }, err => {
          // error
          this.error = err;
        });
      this.repoNamesRead.push(repo);
    }
  }

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
