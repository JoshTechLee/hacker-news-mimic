import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { initStory, Story } from 'src/app/models/Story';
import { CommentsService } from 'src/app/services/comments/comments.service';
import { getStoryPostDate } from 'src/app/common/story-helper';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input() story: Story = initStory
  comments:Story[] = []

  constructor(private storyService:CommentsService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.storyService.getStory(this.story.id).subscribe(story => {
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
