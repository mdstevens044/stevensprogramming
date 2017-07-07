import { Component, OnInit } from '@angular/core';
import { Folders } from './folders';
import { FoldersService } from '../../services/folder.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css'],
  providers: [FoldersService]
})

export class FoldersComponent implements OnInit {

  sidebars: Folders[];
  selectedFolders: Folders;
  sidebarId: String;
  public folderValue: string;

  public modalOptions: Materialize.ModalOptions = {
    dismissible: false,
    opacity: .5,
    inDuration: 300,
    outDuration: 200,
    startingTop: '100%',
    endingTop: '10%'
  };

  constructor(private sidebarService: FoldersService) { }

  setDelID(sidebarID: String) {
    this.sidebarId = sidebarID;
    /*this.delDialogsService
      .confirm()
      .subscribe(res => this.deleteFolders(res.toString()));*/
  }

  createFolders(folders) {
    const folderName = JSON.parse('{ "name": "' + folders + '" }');
    this.sidebarService.createFolders(folderName);
    this.addFolders(folderName);
    this.folderValue = '';
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

  deleteFolders() {
    const idx = this.getIndexOfFolders(this.sidebarId);
    if (idx !== -1) {
      this.sidebars.splice(idx, 1);
      this.selectFolders(null);
    }
    this.sidebarService.deleteFolders(this.sidebarId);
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
