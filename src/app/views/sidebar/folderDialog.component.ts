import { Component, OnInit } from '@angular/core';
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

  private sidebarComponent: SidebarComponent

  constructor(private sidebarService: SidebarService) {}

  createFolders(folders: Sidebar) {
    const folderName = JSON.parse('{ "name": ' + JSON.stringify(folders) + ' }');
    console.log(folderName);
    this.sidebarService.createFolders(folderName).then((newContact: Sidebar) => {
      this.sidebarComponent.addFolders(newContact);
    });
  }

  ngOnInit() {

  }
}
