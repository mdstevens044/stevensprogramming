import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from 'environments/environment';
import Butter from 'buttercms';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers: []
})

export class PostListComponent implements OnInit {
  posts: any;
  postExist = false;
  butterService = Butter(environment.butterCMS);

  constructor( private router: Router ) { }

  ngOnInit() {
    this.butterService.post.list({
      page: 1,
      page_size: 10
    }).then((res) => {
        this.posts = res.data.data;
        (this.posts != '') ? this.postExist = true : this.postExist;
    });
  }

  selectPost(slug) {
    this.router.navigate([slug]);
  }
}
