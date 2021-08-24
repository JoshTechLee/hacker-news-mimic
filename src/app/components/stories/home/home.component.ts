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

  getStoryPostDate(postTimeEpox:number, currentTimeEpox:number):string {
    const minutes = (currentTimeEpox - (postTimeEpox * 1000)) /  (60 * 1000)
    if (minutes < 60) 
      return `${Math.floor(minutes)} ${minutes < 2 ? 'minute' : 'minutes'} ago`
    const hours = minutes / 60
    if (hours < 24) 
      return `${Math.floor(hours)} ${hours < 2 ? 'hour' : 'hours'} ago`
    const days = hours / 24
    if (days < 100) 
      return `${Math.floor(days)} ${days < 2 ? 'day' : 'days'} ago`
    const months = days / 30
    if (months < 12) 
      return `${Math.floor(months)} ${months < 2 ? 'month' : 'months'} ago`
    const date = new Date(postTimeEpox * 1000)
    return date.toDateString()
  }
  
  ngOnInit(): void {
    this.homeService.getStoryIds().subscribe(ids => {
      this.storyIds = ids;
      const storyPages:number[] = ids.slice(0, this.maxPages)
      const currentTimeEpox = Date.now()
      for (var id of storyPages) {
        this.homeService.getStory(id).subscribe(story => {
          story.datePosted = this.getStoryPostDate(story.time, currentTimeEpox)
          this.stories.push(story)
          console.log(this.stories)
        })
      }

    })
  }
}
