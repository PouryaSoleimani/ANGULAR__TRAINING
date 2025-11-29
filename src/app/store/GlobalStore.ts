//^ GLOBAL STORE ------------------------------------------------------------------------------------

import { Injectable, signal } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class GlobalStore {
  isUserLoggedIn = signal(true);
  toggleUserLogIn(status: boolean) {
    this.isUserLoggedIn.set(status);
  }
  fullname = signal('POURYA SOLEIMANI');
  setFullName(newname: string) {
    this.fullname.set(newname);
  }
}