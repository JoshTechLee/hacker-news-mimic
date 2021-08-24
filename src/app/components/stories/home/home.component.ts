import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { Story } from 'src/app/models/Story';

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
    this.homeService.getTopStoryIds().subscribe(ids => {
      this.storyIds = ids;
      const storyPages:number[] = ids.slice(0, this.maxPages)
      for (var id of storyPages) {
        this.homeService.getStory(id).subscribe(story =>this.stories.push(story))
      }
    })
  }
}
