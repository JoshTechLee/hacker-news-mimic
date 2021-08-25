import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StoryService } from '../../story.service'

@Injectable({
  providedIn: 'root'
})

export class HomeService extends StoryService {
  constructor(http:HttpClient) {
    const topStoriesUrl = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';
    super(http, topStoriesUrl)
  }
}
