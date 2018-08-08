import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Post } from './post';

import { environment } from 'environments/environment';

@Injectable()
export class PostsService {

  private _wpBase = environment.wpBase;

  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this._wpBase + 'posts');
  }

  getPost(parameters: { slug: any }): Observable<Post> {
    const slug = parameters.slug;

    return this.httpClient.get<Post>(this._wpBase + `posts?slug=${slug}`);
  }

}
