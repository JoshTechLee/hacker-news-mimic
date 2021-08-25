import { Component, OnInit } from '@angular/core';
import { StoryService } from 'src/app/services/story.service';
import { UiService } from 'src/app/services/ui/ui.service';
import { Story } from 'src/app/models/Story';
import { getBaseUrl, getPostDate } from 'src/app/common/story-helper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})

export class StoriesComponent implements OnInit {
  private maxPages = 30;
  private storyIds: number[] = []
  currentPage:number = 0
  stories: Story[] = []
  storyPageNumber: number = 0


  constructor(
    private storyService:StoryService, 
    private uiService:UiService,
    private router:Router, 
    ) {}
  
  ngOnInit():void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false
    this.getStories()
  }

  showMoreStories():void {
    this.currentPage += this.maxPages
    this.stories = []
    this.getStories()
  }

  private getStories = () => {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false
    this.storyService.getStoryIds().subscribe(ids => {
      this.storyIds = ids
      this.getStoriesFromIds(ids)
    })
  }

  private getStoriesFromIds = (storyIds:number[]) => {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false
    const lastPage = this.currentPage + this.maxPages
    const storyPages:number[] = storyIds.slice(this.currentPage, lastPage)
        const currentTimeEpox = Date.now()
        var index = this.currentPage + 1;
        for (var id of storyPages) {
          this.storyService.getStory(id).subscribe(story => {
            story.datePosted = getPostDate(story.time * 1000, currentTimeEpox)
            if (story.baseUrl) story.baseUrl = getBaseUrl(story.url)
            story.index = index
            this.stories.push(story)
            index += 1
          })
        }
  }
}
