import { Observable } from 'rxjs/Rx';
import { RemoveDialogComponent } from '../remove-dialog.component';
import { MdDialogRef, MdDialog } from '@angular/material';
import { Injectable } from '@angular/core';

@Injectable()
export class RemoveDialogsService {

  constructor(private dialog: MdDialog) { }

  public confirm(): Observable<boolean> {

    let dialogRef: MdDialogRef<RemoveDialogComponent>;

    dialogRef = this.dialog.open(RemoveDialogComponent);

    return dialogRef.afterClosed();
  }
}
