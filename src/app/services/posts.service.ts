import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { pages } from '../common/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private page: string = pages.home;
  private subject = new Subject<any>()

  changePage(page:string): void {
    this.page = page
    
  }

  constructor() { }
}
