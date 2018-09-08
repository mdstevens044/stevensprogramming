import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'environments/environment';

@Injectable()
export class GithubService {

  private ghUserName = environment.ghUserName;

  constructor(private httpClient: HttpClient) { }

  getReadMe(repo) {
    const url = 'https://raw.githubusercontent.com/' + this.ghUserName + '/' + repo + '/master/README.md';
    return this.httpClient.get(url, {responseType: 'text'});
  }

}

