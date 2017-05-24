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
  error: string;
  loaded: boolean;

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

  ngOnInit() {
    this.getProjects();
  }

}
