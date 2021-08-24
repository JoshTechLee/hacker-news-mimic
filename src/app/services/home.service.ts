import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Story } from '../models/Story';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private topStoriesUrl = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';
  private getItemUrl = (item:number):string => `https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`;
  
  constructor(private http: HttpClient) { }

  getTopStoryIds(): Observable<number[]> {
    return this.http.get<number[]>(this.topStoriesUrl)
  }

  getStory(storyId:number): Observable<Story> {
    return this.http.get<Story>(this.getItemUrl(storyId))
  }
}
