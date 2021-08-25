import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StoryService } from '../../story.service'

@Injectable({
  providedIn: 'root'
})

export class ShowService extends StoryService {
  constructor(http:HttpClient) {
    const showStoriesUrl = 'https://hacker-news.firebaseio.com/v0/showstories.json?print=pretty';
    super(http, showStoriesUrl)
  }
}
