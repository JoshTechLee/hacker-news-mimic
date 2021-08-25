import { Component, OnInit, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { Story, initStory } from 'src/app/models/Story';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})

export class TopicComponent implements OnInit {
  @Input() index: number = 0
  @Input() story: Story = initStory

  constructor() { }

  ngOnInit(): void {
  }
}
