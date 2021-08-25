import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewService } from 'src/app/services/stories/new/new.service';
import { UiService } from 'src/app/services/ui/ui.service';
import { StoriesComponent } from '../stories.component';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent extends StoriesComponent implements OnInit {
  constructor(
    newService:NewService, 
    uiService:UiService,
    router:Router) { 
    super(newService, uiService, router)
  }
}
