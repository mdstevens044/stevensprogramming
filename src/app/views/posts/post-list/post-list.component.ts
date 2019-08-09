import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';

import gql from 'graphql-tag';
import 'rxjs-compat/add/operator/map';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers: []
})

export class PostListComponent implements OnInit {

  posts: any;
  postExist = false;

  constructor( private router: Router, private apollo: Apollo ) { }

  ngOnInit() {
    this.apollo
      .use('graphCms')
      .watchQuery<any>({
        query: gql`
          {
            posts(where: {status: PUBLISHED}, orderBy:createdAt_DESC)
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
      .valueChanges.map((result: any) => result.data.posts)
      .subscribe(data => {
        this.posts = data;
        if(Object.keys(data).length !== 0) { this.postExist = true; }
    });
  }

  selectPost(slug) {
    this.router.navigate([slug]);
  }
}
