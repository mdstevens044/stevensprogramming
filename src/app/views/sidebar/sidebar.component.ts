import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { Sidebar } from './sidebar';
import { SidebarService } from './sidebar.service';
import { DialogsService } from './dialog.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [SidebarService, DialogsService]
})

export class SidebarComponent implements OnInit {

  sidebars: Sidebar[];
  selectedSidebar: Sidebar;

  constructor(private sidebarService: SidebarService, private dialogsService: DialogsService) { }

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
      .then((sidebars: Sidebar[]) => {
        this.sidebars = sidebars.map((sidebar) => {
          return sidebar;
        });
      });
  }

  private getIndexOfSidebar = (sidebarId: String) => {
    return this.sidebars.findIndex((sidebar) => {
      return sidebar._id === sidebarId;
    });
  }

  selectSidebar(sidebar: Sidebar) {
    this.selectedSidebar = sidebar;
  }

  createNewFolder() {
    const sidebar: Sidebar = {
      name: ''
    };
    this.selectSidebar(sidebar);
  }

  deleteFolders = (sidebarId: String) => {
    const idx = this.getIndexOfSidebar(sidebarId);
    if (idx !== -1) {
      this.sidebars.splice(idx, 1);
      this.selectSidebar(null);
    }
    return this.sidebars;
  }

  addFolders(sidebar: Sidebar) {
    this.sidebars.push(sidebar);
    this.selectSidebar(sidebar);
    return this.sidebars;
  }

  updateFolders = (sidebar: Sidebar) => {
    const idx = this.getIndexOfSidebar(sidebar._id);
    if (idx !== -1) {
      this.sidebars[idx] = sidebar;
      this.selectSidebar(sidebar);
    }
    return this.sidebars;
  }
}
