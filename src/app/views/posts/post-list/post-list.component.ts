import { Component, OnInit } from '@angular/core';
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

  constructor( private postsService: PostsService, private router: Router ) { }

  getPosts(){
    this.postsService
      .getPosts()
      .subscribe(res => {
        // success
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

  htmlToPlaintext(text) {
    text = text ? String(text).replace(/<[^>]+>/gm, '') : '';
    text = text ? String(text).replace(/\[&hellip;]/gm, '') : '';
    return text;
  }

}
