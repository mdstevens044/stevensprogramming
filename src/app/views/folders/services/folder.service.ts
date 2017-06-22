import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Folders } from '../folders';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FoldersService {
  private foldersUrl = '/api/folders';

  constructor (private http: Http) {}

  getFolders(): Promise<Folders[]> {
    return this.http.get(this.foldersUrl)
      .toPromise()
      .then(response => response.json() as Folders[])
      .catch(this.handleError);
  }

  createFolders(newContact: Folders): Promise<Folders> {
    return this.http.post(this.foldersUrl, newContact)
      .toPromise()
      .then(response => response.json() as Folders)
      .catch(this.handleError);
  }

  deleteFolders(delContactId: String): Promise<String> {
    return this.http.delete(this.foldersUrl + '/' + delContactId)
      .toPromise()
      .then(response => response.json() as String)
      .catch(this.handleError);
  }

  updateFolders(putContact: Folders): Promise<Folders> {
    const putUrl = this.foldersUrl + '/' + putContact._id;
    return this.http.put(putUrl, putContact)
      .toPromise()
      .then(response => response.json() as Folders)
      .catch(this.handleError);
  }

  private handleError (error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
  }
}
