import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home/home.service';
import { Story } from 'src/app/models/Story';
import { getStoryPostDate } from 'src/app/common/story-helper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  storyIds: number[] = []
  stories: Story[] = []
  storyPageNumber: number = 0
  maxPages = 30;

  constructor(private homeService:HomeService) { }
  
  ngOnInit(): void {
    this.homeService.getStoryIds().subscribe(ids => {
      this.storyIds = ids;
      const storyPages:number[] = ids.slice(0, this.maxPages)
      const currentTimeEpox = Date.now()
      for (var id of storyPages) {
        this.homeService.getStory(id).subscribe(story => {
          story.datePosted = getStoryPostDate(story.time * 1000, currentTimeEpox)
          this.stories.push(story)
          console.log(this.stories)
        })
      }
    })
  }
}
