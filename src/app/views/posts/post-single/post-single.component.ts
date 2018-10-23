import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Apollo } from 'apollo-angular';

import gql from 'graphql-tag';

@Component({
  selector: 'app-post-single',
  templateUrl: './post-single.component.html',
  styleUrls: ['./post-single.component.css'],
  providers: []
})

export class PostSingleComponent implements OnInit {

  post: any;
  loading = true;

  constructor( private route: ActivatedRoute, private apollo: Apollo  ) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.apollo
        .use('graphCms')
        .watchQuery<any>({
          query: gql`
            query SinglePost($slug: String!) {
              posts(where: {slug: $slug})
              {
                createdAt,
                title,
                coverImage {
                  url
                },
                content
              }
            }
          `,
          variables: {
            slug: params['slug']
          }
        })
        .valueChanges.subscribe(({ data, loading }) => {
        this.loading = loading;
        this.post = data.posts[0];
      });
    });
  }
}
