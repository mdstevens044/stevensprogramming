import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Github } from '../github';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
  providers: [GithubService]
})

export class GithubComponent implements OnInit {

  projects: Github[];
  languages = [];
  error: string;
  loaded: boolean;
  repoNamesLang = [];
  repoNamesRead = [];
  readMe = [];
  rm = [];

  constructor( private gitService: GithubService, private router: Router ) { }

  getProjects() {
    this.gitService
      .getProjects()
      .subscribe(res => {
        // success
        this.loaded = true;
        this.projects = res;
      }, err => {
        // error
        this.error = err;
      });
  }

  getLanguages(repo) {
    if (!this.repoNamesLang.includes(repo)) {
      this.gitService
        .getLanguages(repo)
        .subscribe(res => {
          // success
          const split = Object.keys(res).toString().split(',');
          let lang = '';
          for (let i = 0; i < split.length; i++) {
            lang += split[i] + ' ';
          }
          this.languages.push(lang);
        }, err => {
          // error
          this.error = err;
        });
      this.repoNamesLang.push(repo);
    }
  }

  getReadMe(repo) {
    if (!this.repoNamesRead.includes(repo)) {
      this.gitService
        .getReadMe(repo)
        .subscribe(res => {
          // success
          const read = [];
          read.push(res.toString().split('#').splice(1));
          for (let i = 0; i < read.length; i++) {
            this.readMe.push(read[i]);
          }
        }, err => {
          // error
          this.error = err;
        });
      this.repoNamesRead.push(repo);
    }
  }

  ngOnInit() {
    this.getProjects();
  }

}
