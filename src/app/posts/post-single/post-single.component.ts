import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { environment } from 'environments/environment';
import Butter from 'buttercms';

@Component({
  selector: 'app-post-single',
  templateUrl: './post-single.component.html',
  styleUrls: ['./post-single.component.css'],
  providers: []
})

export class PostSingleComponent implements OnInit {
  protected slug$: Observable<string>;
  post: any;
  butterService = Butter(environment.butterCMS);

  constructor(protected route: ActivatedRoute) { }

  getPost() {
    this.slug$ = this.route.paramMap
        .pipe(
            map(params => (params.get('slug')))
        );

    this.slug$.pipe(
        take(1))
        .subscribe(slug => {
            this.butterService.post.retrieve(slug)
                .then((res) => {
                    this.post = res.data;
                }).catch((res) => {
                console.log(res);
            });
        });
    }

  ngOnInit() {
    this.getPost();
  }

}
