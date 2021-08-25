import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { initStory, Story } from 'src/app/models/Story';
import { CommentsService } from 'src/app/services/comments/comments.service';
import { getStoryPostDate } from 'src/app/common/story-helper';


@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss']
})
export class ThreadComponent implements OnInit {
  story:Story = initStory
  comments:Story[] = []
  constructor(private storyService:CommentsService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getStory()
  }

  getStory(): void {
    const routeParams = this.route.snapshot.paramMap
    const itemId = Number(routeParams.get('itemId'))
    this.storyService.getStory(itemId).subscribe(story => {
      this.story = story
      this.getComments(story)
    })
  }

  getComments(story:Story): void {
    if (story.kids) {
      for (var kid of this.story.kids) {
        this.storyService.getStory(kid).subscribe(comment => {
          const currentTimeEpox = Date.now()
          comment.datePosted = getStoryPostDate(comment.time * 1000, currentTimeEpox)
          this.comments.push(comment)
        })
      }
    }
  }
}
