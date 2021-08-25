import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThreadComponent } from './components/thread/thread.component';
import { AskComponent } from './components/stories/ask/ask.component';
import { HomeComponent } from './components/stories/home/home.component';
import { JobsComponent } from './components/stories/jobs/jobs.component';
import { NewComponent } from './components/stories/new/new.component';
import { ShowComponent } from './components/stories/show/show.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'news', component: HomeComponent},
  {path: 'new', component: NewComponent},
  {path: 'ask', component: AskComponent},
  {path: 'show', component: ShowComponent},
  {path: 'jobs', component: JobsComponent},
  {path: 'item/:itemId', component: ThreadComponent},
  {path: 'user/:userId', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
