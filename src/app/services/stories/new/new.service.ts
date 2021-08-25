import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StoryService } from '../../story.service'

@Injectable({
  providedIn: 'root'
})

export class NewService extends StoryService {
  constructor(http:HttpClient) {
    const showStoriesUrl = 'https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty';
    super(http, showStoriesUrl)
  }
}
