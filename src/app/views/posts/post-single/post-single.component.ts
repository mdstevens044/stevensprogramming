import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Apollo } from 'apollo-angular';

import gql from 'graphql-tag';
import 'rxjs-compat/add/operator/map';

@Component({
  selector: 'app-post-single',
  templateUrl: './post-single.component.html',
  styleUrls: ['./post-single.component.css'],
  providers: []
})

export class PostSingleComponent implements OnInit {

  post: any;

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
        .valueChanges.map((result: any) => result.data.posts[0])
        .subscribe(data => {
          this.post = data;
        });
    });
  }
}
