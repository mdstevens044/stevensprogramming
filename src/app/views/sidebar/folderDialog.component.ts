import {Component, OnInit, Input } from '@angular/core';
import { Sidebar } from './sidebar';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './folderDialog.component.html',
  styleUrls: ['./folderDialog.component.css']
})

export class DialogComponent implements OnInit {

  @Input()
  sidebar: Sidebar;

  @Input()
  createHandler: Function;

  constructor(private sidebarService: SidebarService) {}

  addFolders(sidebar: Sidebar) {
    this.sidebarService.createFolders(sidebar).then((newFolder: Sidebar) => {
      this.createHandler(newFolder);
    });
  }

  ngOnInit() {

  }
}
