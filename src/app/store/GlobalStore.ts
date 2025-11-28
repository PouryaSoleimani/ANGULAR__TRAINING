//^ GLOBAL STORE ------------------------------------------------------------------------------------

import { Injectable, signal } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class GlobalStore {
  isUserLoggedIn = signal(true)
  toggleUserLogIn(status: boolean) {
    this.isUserLoggedIn.set(status)
  }
}