import { Component, OnInit, Input } from '@angular/core';
import { Story, initStory } from 'src/app/models/Story';

@Component({
  selector: 'app-job-item',
  templateUrl: './job-item.component.html',
  styleUrls: ['./job-item.component.scss']
})
export class JobItemComponent implements OnInit {
  @Input() index: number = 0
  @Input() story: Story = initStory

  constructor() { }

  ngOnInit(): void {
  }
}
