import { Component, OnInit, Input } from '@angular/core';
import { Story, initStory } from 'src/app/models/Story';
import { StoryItemComponent } from '../../story-item/story-item.component';

@Component({
  selector: 'app-job-item',
  templateUrl: './job-item.component.html',
  styleUrls: ['./job-item.component.scss']
})
export class JobItemComponent extends StoryItemComponent implements OnInit {
  @Input() index: number = 0
  @Input() story: Story = initStory

  constructor() { 
    super()
  }

  ngOnInit(): void {
  }
}
