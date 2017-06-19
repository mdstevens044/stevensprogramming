import {Component, OnInit} from '@angular/core';
import { MdDialog } from '@angular/material';
import { Sidebar } from './sidebar';
import { SidebarService } from './sidebar.service';
import { DialogComponent } from './folderDialog.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [SidebarService]
})

export class SidebarComponent implements OnInit {

  sidebars: Sidebar[];
  selectedSidebar: Sidebar;

  constructor(private sidebarService: SidebarService, public dialog: MdDialog) { }

  openDialog() {
    this.dialog.open(DialogComponent);
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

    // By default, a newly-created sidebar will have the selected state.
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

  addFolders = (sidebar: Sidebar) => {
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
