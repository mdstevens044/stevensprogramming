import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';

import gql from 'graphql-tag';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers: []
})

export class PostListComponent implements OnInit {

  posts: any;

  constructor( private router: Router, private apollo: Apollo ) { }

  ngOnInit() {
    this.apollo
      .use('graphCms')
      .watchQuery<any>({
        query: gql`
          {
            posts(orderBy: createdAt_ASC)
            {
              createdAt,
              title,
              slug,
              coverImage {
                url
              },
              excerpt
            }
          }
        `
      })
      .valueChanges.subscribe(({ data, loading }) => {
      this.posts = data.posts;
    });
  }

  selectPost(slug) {
    this.router.navigate([slug]);
  }
}
