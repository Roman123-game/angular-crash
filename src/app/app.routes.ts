import { Routes } from '@angular/router';
import { TaskComponent } from './components/tasks/tasks.component';
import { AboutComponent } from './components/about/about.component';
export const appRoutes: Routes = [
  { path: '', component: TaskComponent }
  { path: 'about', component: AboutComponent },
];

