import { Observable } from 'rxjs/Rx';
import { DialogComponent } from '../dialog.component';
import { MdDialogRef, MdDialog } from '@angular/material';
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
