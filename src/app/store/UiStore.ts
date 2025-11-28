import { Injectable, signal } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class UiStore {
  formLayout = signal('ALL')
  setFormLayout(value: string) {
    this.formLayout.set(value)
  }
}