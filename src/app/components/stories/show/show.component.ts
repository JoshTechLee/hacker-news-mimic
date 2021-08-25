import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShowService } from 'src/app/services/stories/show/show.service';
import { UiService } from 'src/app/services/ui/ui.service';
import { StoriesComponent } from '../stories.component';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent extends StoriesComponent implements OnInit {
  constructor(
    showService:ShowService, 
    uiService:UiService,
    router:Router) { 
    super(showService, uiService, router)
  }
}
