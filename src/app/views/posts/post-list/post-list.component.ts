import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { Post } from '../post';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers: [PostsService]
})

export class PostListComponent implements OnInit {

  posts: Post[];
  error: string;
  loaded: boolean;

  constructor( private postsService: PostsService, private router: Router ) { }

  getPosts() {
    this.postsService
      .getPosts()
      .subscribe(res => {
        // success
        this.loaded = true;
        this.posts = res;
      }, err => {
        // error
        this.error = err;
      });
  }

  ngOnInit() {
    this.getPosts();
  }

  selectPost(slug) {
    this.router.navigate([slug]);
  }

  transform(input: string, index: number) {
    return input.split('<br>')[index];
  }

}
