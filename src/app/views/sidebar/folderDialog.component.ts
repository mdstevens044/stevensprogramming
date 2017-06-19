import { Component, OnInit, Input } from '@angular/core';
import { Sidebar } from './sidebar';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './folderDialog.component.html',
  styleUrls: ['./folderDialog.component.css'],
  providers: [SidebarService]
})

export class DialogComponent implements OnInit {

  constructor(private sidebarService: SidebarService) {}

  createFolders(folders: Sidebar) {
    console.log(folders);
    this.sidebarService.createFolders(folders);
  }

  ngOnInit() {

  }
}
