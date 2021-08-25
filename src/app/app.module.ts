import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/stories/home/home.component';
import { StoryItemComponent } from './components/stories/story-item/story-item.component';
import { JobItemComponent } from './components/stories/jobs/job-item/job-item.component';
import { JobsComponent } from './components/stories/jobs/jobs.component';
import { StoriesComponent } from './components/stories/stories.component';
import { AskComponent } from './components/stories/ask/ask.component';
import { ShowComponent } from './components/stories/show/show.component';
import { NewComponent } from './components/stories/new/new.component';
import { CommentsComponent } from './components/thread/comments/comments.component';
import { TopicComponent } from './components/thread/topic/topic.component';
import { ThreadComponent } from './components/thread/thread.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddCommentComponent } from './components/thread/add-comment/add-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    StoryItemComponent,
    JobItemComponent,
    JobsComponent,
    StoriesComponent,
    AskComponent,
    ShowComponent,
    NewComponent,
    CommentsComponent,
    TopicComponent,
    ThreadComponent,
    FooterComponent,
    AddCommentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
