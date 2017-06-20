import { Injectable } from '@angular/core';
import { Sidebar } from './sidebar';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SidebarService {
  private foldersUrl = '/api/folders';

  constructor (private http: Http) {}

  getFolders(): Promise<Sidebar[]> {
    return this.http.get(this.foldersUrl)
      .toPromise()
      .then(response => response.json() as Sidebar[])
      .catch(this.handleError);
  }

  createFolders(newContact: Sidebar) {
    return this.http.post(this.foldersUrl, newContact)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteFolders(delContactId: String): Promise<String> {
    return this.http.delete(this.foldersUrl + '/' + delContactId)
      .toPromise()
      .then(response => response.json() as String)
      .catch(this.handleError);
  }

  updateFolders(putContact: Sidebar): Promise<Sidebar> {
    const putUrl = this.foldersUrl + '/' + putContact._id;
    return this.http.put(putUrl, putContact)
      .toPromise()
      .then(response => response.json() as Sidebar)
      .catch(this.handleError);
  }

  private handleError (error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
  }
}
