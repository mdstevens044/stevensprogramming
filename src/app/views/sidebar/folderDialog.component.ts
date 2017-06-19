import {Component, OnInit } from '@angular/core';
import { Sidebar } from './sidebar';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './folderDialog.component.html',
  styleUrls: ['./folderDialog.component.css'],
  providers: [SidebarService]
})

export class DialogComponent implements OnInit {

  sidebars: Sidebar[];

  constructor(private sidebarService: SidebarService) {}

  addFolders(element) {
    this.sidebarService.createFolders(element.value);
  }

  ngOnInit() {

  }
}
