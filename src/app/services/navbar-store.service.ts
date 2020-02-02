import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarStoreService {

  private _navbarState = false;

  constructor() { }

  get navbarState()
  {
    return this._navbarState;
  }

  set navbarState(val: boolean)
  {
    this._navbarState = val;
  }
}
