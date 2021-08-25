import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StoryService } from '../story.service';

@Injectable({
  providedIn: 'root'
})
export class CommentsService extends StoryService {
  constructor(http:HttpClient) {
    super(http, '')
  }
}
