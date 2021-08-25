import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AskService } from 'src/app/services/stories/ask/ask.service';
import { UiService } from 'src/app/services/ui/ui.service';
import { StoriesComponent } from '../stories.component';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.scss']
})
export class AskComponent extends StoriesComponent implements OnInit {
  constructor(
    askService:AskService, 
    uiService:UiService,
    router:Router) { 
    super(askService, uiService, router)
  }
}
