import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Story, initStory } from 'src/app/models/Story';

@Component({
  selector: 'app-story-item',
  templateUrl: './story-item.component.html',
  styleUrls: ['./story-item.component.scss']
})
export class StoryItemComponent implements OnInit {

  @Input() story: Story = initStory

  constructor() { }

  ngOnInit(): void {
  }

}
