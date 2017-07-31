import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Post } from '../post';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-single',
  templateUrl: './post-single.component.html',
  styleUrls: ['./post-single.component.css'],
  providers: [PostsService]
})

export class PostSingleComponent implements OnInit {

  post: Post;
  loaded: boolean;

  constructor( private postsService: PostsService, private route: ActivatedRoute ) { }

  getPost(slug) {
    this.postsService
      .getPost({slug: slug})
      .subscribe(res => {
        this.loaded = true;
        this.post = res[0];
      });
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let slug = params['slug'];
      this.getPost(slug)
    });
  }

  transform(input: string, index: number) {
    return input.split('<br>')[index];
  }

}
