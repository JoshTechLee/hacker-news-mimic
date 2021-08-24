import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/stories/home/home.component';
import { StoryItemComponent } from './components/stories/story-item/story-item.component';
import { JobItemComponent } from './components/stories/job-item/job-item.component';
import { JobsComponent } from './components/stories/jobs/jobs.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    StoryItemComponent,
    JobItemComponent,
    JobsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
