import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/stories/home/home.service';
import { UiService } from 'src/app/services/ui/ui.service';
import { StoriesComponent } from '../stories.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends StoriesComponent implements OnInit {
  constructor(
    homeService:HomeService, 
    uiService:UiService,
    router:Router) { 
    super(homeService, uiService, router)
  }
}
