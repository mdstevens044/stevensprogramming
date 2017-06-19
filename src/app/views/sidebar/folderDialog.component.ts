import {Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './folderDialog.component.html',
  styleUrls: ['./folderDialog.component.css']
})

export class DialogComponent implements OnInit {

  @Output() addFolders = new EventEmitter<string>();

  constructor() {}

  getInput(element) {
    console.log(element.value + ' a');
    this.addFolders.emit(element.value);
  }

  ngOnInit() {

  }
}
