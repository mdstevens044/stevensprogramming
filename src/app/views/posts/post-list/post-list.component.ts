import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Apollo, ApolloQueryObservable } from 'apollo-angular';
import gql from 'graphql-tag';

import { Post } from '../post';
import { PostsService } from '../posts.service';

const PostList = gql`
  query PostList {
    posts {
      edges {
        node {
          title
          slug
          excerpt
          featuredImage {
            sourceUrl
          }
        }
      }
    }
  }
`;

interface QueryResponse {
  posts;
  loading;
}

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers: [PostsService]
})

export class PostListComponent implements OnInit {

  posts: any;
  error: string;
  loading: boolean;
  data: ApolloQueryObservable<any>;

  constructor( private postsService: PostsService, private router: Router, private apollo: Apollo ) { }

  getPosts() {
    this.postsService
      .getPosts()
      .subscribe(res => {
        // success
        this.loading = true;
        this.posts = res;
      }, err => {
        // error
        this.error = err;
      });
  }

  ngOnInit() {
    // this.getPosts();
    this.data = this.apollo.watchQuery({ query: PostList });
  }

  selectPost(slug) {
    this.router.navigate([slug]);
  }

  transform(input: string, index: number) {
    return input.split('<br>')[index];
  }

}
