import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StoryService } from '../story.service'

@Injectable({
  providedIn: 'root'
})

export class AskService extends StoryService {
  constructor(http:HttpClient) {
    const askStoriesUrl = 'https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty';
    super(http, askStoriesUrl)
  }
}
