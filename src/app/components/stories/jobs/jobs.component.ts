import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobsService } from 'src/app/services/jobs/jobs.service';
import { UiService } from 'src/app/services/ui/ui.service';
import { StoriesComponent } from '../stories.component';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent extends StoriesComponent implements OnInit {
  constructor(
    jobsService:JobsService, 
    uiService:UiService,
    router:Router) { 
    super(jobsService, uiService, router)
  }
}
