import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Story } from '../models/Story';

export class StoryService {
    private getItemUrl = (item:number):string => `https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`;
    
    constructor(private http: HttpClient, private url:string) { }
  
    getStoryIds(): Observable<number[]> {
      return this.http.get<number[]>(this.url)
    }
  
    getStory(storyId:number): Observable<Story> {
      return this.http.get<Story>(this.getItemUrl(storyId))
    }
  }