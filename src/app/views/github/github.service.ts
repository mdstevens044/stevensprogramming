import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from 'environments/environment';
import { Github } from './github';

@Injectable()
export class GithubService {

  private ghUserName = environment.ghUserName;

  constructor(private httpClient: HttpClient) { }

  getProjects(): Observable<Github[]> {
    return this.httpClient.get<Github[]>('https://api.github.com/users/' + this.ghUserName + '/repos');
  }

  getLanguages(repo): Observable<Github[]> {
    return this.httpClient.get<Github[]>('https://api.github.com/repos/' + this.ghUserName + '/' + repo + '/languages');
  }

  getReadMe(repo) {
    const url = 'https://raw.githubusercontent.com/' + this.ghUserName + '/' + repo + '/master/README.md';
    return this.httpClient.get(url, {responseType: 'text'});
  }

}

