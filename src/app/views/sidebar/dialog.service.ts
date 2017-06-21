import { Observable } from 'rxjs/Rx';
import { DialogComponent } from './folderDialog.component';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { Injectable } from '@angular/core';

@Injectable()
export class DialogsService {

  constructor(private dialog: MdDialog) { }

  public confirm(): Observable<boolean> {

    let dialogRef: MdDialogRef<DialogComponent>;

    dialogRef = this.dialog.open(DialogComponent);

    return dialogRef.afterClosed();
  }
}
