import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { FoldersService } from './services/folder.service';

@Component({
  selector: 'add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css'],
  providers: [FoldersService]
})

export class AddDialogComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<AddDialogComponent>) {}

  ngOnInit() {

  }
}
