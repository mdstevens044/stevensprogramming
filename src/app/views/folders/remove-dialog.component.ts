import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { FoldersService } from './services/folder.service';

@Component({
  selector: 'remove-dialog',
  templateUrl: './remove-dialog.component.html',
  styleUrls: ['./remove-dialog.component.css'],
  providers: [FoldersService]
})

export class RemoveDialogComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<RemoveDialogComponent>) {}

  ngOnInit() {

  }
}
