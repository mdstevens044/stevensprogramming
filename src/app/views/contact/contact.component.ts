import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';
import { ContactService } from './service/contact.service';
import { environment } from 'environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  contacts = new Contact();
  recaptchaKey = environment.recaptchaSiteKey;
  emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/g;
  emailInvalid = false;
  error: {};

  constructor( private router: Router, private contactService: ContactService ) { }

  ngOnInit() { }

  processForm()
  {
    this.contactService.contactForm(this.contacts).subscribe(
      data => this.contacts = data,
      error => this.error = error
    );

    // if(this.error === undefined)
    // {
      this.router.navigate(['/sent']);
    // }
  }

  checkPattern()
  {
    this.emailInvalid = !this.emailPattern.test(this.contacts.contactEmail);
  }
}
