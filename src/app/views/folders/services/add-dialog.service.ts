import { Observable } from 'rxjs/Rx';
import { AddDialogComponent } from '../add-dialog.component';
import { MdDialogRef, MdDialog } from '@angular/material';
import { Injectable } from '@angular/core';

@Injectable()
export class AddDialogsService {

  constructor(private dialog: MdDialog) { }

  public confirm(): Observable<boolean> {

    let dialogRef: MdDialogRef<AddDialogComponent>;

    dialogRef = this.dialog.open(AddDialogComponent);

    return dialogRef.afterClosed();
  }
}
