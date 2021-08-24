import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/jobs/jobs.service';
import { Story } from 'src/app/models/Story';
import { getStoryPostDate } from 'src/app/common/story-helper';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  storyIds: number[] = []
  stories: Story[] = []
  storyPageNumber: number = 0
  maxPages = 30;

  constructor(private jobService:JobService) { }
  
  ngOnInit(): void {
    this.jobService.getStoryIds().subscribe(ids => {
      this.storyIds = ids;
      const storyPages:number[] = ids.slice(0, this.maxPages)
      const currentTimeEpox = Date.now()
      for (var id of storyPages) {
        this.jobService.getStory(id).subscribe(story => {
          story.datePosted = getStoryPostDate(story.time * 1000, currentTimeEpox)
          this.stories.push(story)
          console.log(this.stories)
        })
      }
    })
  }
}
