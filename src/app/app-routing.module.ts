import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/stories/home/home.component';
import { JobsComponent } from './components/stories/jobs/jobs.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'news', component: HomeComponent},
  {path: 'jobs', component: JobsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
