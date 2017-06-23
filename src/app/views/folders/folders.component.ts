import { Component, OnInit } from '@angular/core';
import { Folders } from './folders';
import { FoldersService } from './services/folder.service';
import { AddDialogsService } from './services/add-dialog.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css'],
  providers: [FoldersService, AddDialogsService]
})

export class FoldersComponent implements OnInit {

  sidebars: Folders[];
  selectedFolders: Folders;

  constructor(private sidebarService: FoldersService, private dialogsService: AddDialogsService) { }

  openDialog() {
    this.dialogsService
        .confirm()
        .subscribe(res => this.createFolders(res));
  }

  createFolders(folders) {
    const folderName = JSON.parse('{ "name": ' + JSON.stringify(folders) + ' }');
    this.sidebarService.createFolders(folderName);
    this.addFolders(folderName);
  }

  ngOnInit() {
    this.sidebarService
      .getFolders()
      .then((sidebars: Folders[]) => {
        this.sidebars = sidebars.map((sidebar) => {
          return sidebar;
        });
      });
  }

  private getIndexOfFolders = (sidebarId: String) => {
    return this.sidebars.findIndex((sidebar) => {
      return sidebar._id === sidebarId;
    });
  }

  selectFolders(sidebar: Folders) {
    this.selectedFolders = sidebar;
  }

  createNewFolder() {
    const sidebar: Folders = {
      name: ''
    };
    this.selectFolders(sidebar);
  }

  deleteFolders = (sidebarId: String) => {
    const idx = this.getIndexOfFolders(sidebarId);
    if (idx !== -1) {
      this.sidebars.splice(idx, 1);
      this.selectFolders(null);
    }
    this.sidebarService.deleteFolders(sidebarId);
    return this.sidebars;
  }

  addFolders(sidebar: Folders) {
    this.sidebars.push(sidebar);
    this.selectFolders(sidebar);
    return this.sidebars;
  }

  updateFolders = (sidebar: Folders) => {
    const idx = this.getIndexOfFolders(sidebar._id);
    if (idx !== -1) {
      this.sidebars[idx] = sidebar;
      this.selectFolders(sidebar);
    }
    return this.sidebars;
  }
}
