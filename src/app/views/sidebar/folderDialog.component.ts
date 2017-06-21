import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { Sidebar } from './sidebar';
import { SidebarService } from './sidebar.service';
import { SidebarComponent } from './sidebar.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './folderDialog.component.html',
  styleUrls: ['./folderDialog.component.css'],
  providers: [SidebarService]
})

export class DialogComponent implements OnInit {

  private sidebarComponent: SidebarComponent;

  constructor(public dialogRef: MdDialogRef<DialogComponent>) {}

  /*createFolders(folders: Sidebar) {
    const folderName = JSON.parse('{ "name": ' + JSON.stringify(folders) + ' }');
    this.sidebarService.createFolders(folderName);
    this.sidebarComponent.addFolders(folders);
  }*/

  ngOnInit() {

  }
}
