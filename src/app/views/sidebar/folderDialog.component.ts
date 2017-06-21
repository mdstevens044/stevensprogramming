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

  constructor(public dialogRef: MdDialogRef<DialogComponent>) {}

  ngOnInit() {

  }
}
