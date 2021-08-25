import { Component, OnInit } from '@angular/core';
import { StoryService } from 'src/app/services/story.service';
import { UiService } from 'src/app/services/ui/ui.service';
import { Story } from 'src/app/models/Story';
import { getStoryPostDate } from 'src/app/common/story-helper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})

export class StoriesComponent implements OnInit {
  private maxPages = 30;
  private storyIds: number[] = []
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

  private getStories = () => {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false
    this.storyService.getStoryIds().subscribe(ids => {
        this.storyIds = ids;
        const storyPages:number[] = ids.slice(0, this.maxPages)
        const currentTimeEpox = Date.now()
        for (var id of storyPages) {
          this.storyService.getStory(id).subscribe(story => {
            story.datePosted = getStoryPostDate(story.time * 1000, currentTimeEpox)
            this.stories.push(story)
          })
        }
      })
  }
}
