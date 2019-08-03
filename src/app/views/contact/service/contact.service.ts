import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Contact } from '../contact';
import { environment } from 'environments/environment';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import 'rxjs-compat/add/operator/shareReplay';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  baseUrl = environment.emailApi;
  errorData: {};

  private http: HttpClient;

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor( handler: HttpBackend ) {
    this.http = new HttpClient(handler);
  }

  contactForm(formData: Contact)
  {
    return this.http.post<Contact>(this.baseUrl, formData, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      ).shareReplay();
  }

  private handleError(error: HttpErrorResponse)
  {
    if (error.error instanceof ErrorEvent)
    {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, ` + `body was: ${JSON.stringify(error.error)}`);
    }

    this.errorData = {
      errorTitle: 'Error!',
      errorDesc: 'Something bad happened. Please try again later.'
    };

    return throwError(this.errorData);
  }
}
