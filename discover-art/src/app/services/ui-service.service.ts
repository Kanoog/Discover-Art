import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiServiceService {

  private showAddArt: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddArt(): void {
    this.showAddArt = !this.showAddArt;
    this.subject.next(this.showAddArt);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
