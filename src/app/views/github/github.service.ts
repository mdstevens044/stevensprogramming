import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from 'environments/environment';
import {Github} from './github';

@Injectable()
export class GithubService {

  private ghUserName = environment.ghUserName;

  constructor(private http: Http) { }

  getProjects(): Observable<Github[]> {
    return this.http
      .get('https://api.github.com/users/' + this.ghUserName + '/repos')
      .map((res: Response) => res.json())
      .catch((err: Response | any) => {
        console.error(err);
        return Observable.throw(err);
      });

  }

  getLanguages(repo): Observable<Github[]> {
    return this.http
      .get('https://api.github.com/repos/' + this.ghUserName + '/' + repo + '/languages')
      .map((res: Response) => res.json())
      .catch((err: Response | any) => {
        console.error(err);
        return Observable.throw(err);
      });

  }

}

