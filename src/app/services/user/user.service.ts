import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StoryService } from '../story.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService extends StoryService {
  private getUserUrl = (userId:string):string => `https://hacker-news.firebaseio.com/v0/user/${userId}.json?print=pretty`

  constructor(http:HttpClient) {
    super(http, '')
  }

  getUser(userId:string): Observable<User> {
    return this.http.get<User>(this.getUserUrl(userId))
  }
}
