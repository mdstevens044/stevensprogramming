import { Component, OnInit } from '@angular/core';
import { Sidebar } from './sidebar';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [SidebarService]
})

export class SidebarComponent implements OnInit {

  sidebars: Sidebar[];
  selectedContact: Sidebar;

  constructor(private contactService: SidebarService) { }

  ngOnInit() {
    this.contactService
      .getFolders()
      .then((sidebars: Sidebar[]) => {
        this.sidebars = sidebars.map((contact) => {
          return contact;
        });
      });
  }

  private getIndexOfContact = (contactId: String) => {
    return this.sidebars.findIndex((contact) => {
      return contact._id === contactId;
    });
  }

  selectContact(contact: Sidebar) {
    this.selectedContact = contact;
  }

  createNewFolder() {
    const contact: Sidebar = {
      name: ''
    };

    // By default, a newly-created contact will have the selected state.
    this.selectContact(contact);
  }

  deleteFolders = (contactId: String) => {
    const idx = this.getIndexOfContact(contactId);
    if (idx !== -1) {
      this.sidebars.splice(idx, 1);
      this.selectContact(null);
    }
    return this.sidebars;
  }

  addFolders = (contact: Sidebar) => {
    this.sidebars.push(contact);
    this.selectContact(contact);
    return this.sidebars;
  }

  updateFolders = (contact: Sidebar) => {
    const idx = this.getIndexOfContact(contact._id);
    if (idx !== -1) {
      this.sidebars[idx] = contact;
      this.selectContact(contact);
    }
    return this.sidebars;
  }
}
