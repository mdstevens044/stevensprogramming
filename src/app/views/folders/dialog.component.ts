import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { FoldersService } from './services/folder.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  providers: [FoldersService]
})

export class DialogComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<DialogComponent>) {}

  ngOnInit() {

  }
}
