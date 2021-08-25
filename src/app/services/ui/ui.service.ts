import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private currentTab:string = ''
  private subject = new Subject<any>()

  constructor() { }

  setCurrentTab(newTab:string): void {
    this.currentTab = newTab;
    this.subject.next(this.currentTab)
  }

  onTabChange(): Observable<any> {
    return this.subject.asObservable();
  }
}
