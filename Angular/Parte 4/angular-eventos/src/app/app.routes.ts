import { Routes } from '@angular/router';
import { EventsPageComponent } from './events-page/events-page.component';
import { EventFormComponent } from './event-form/event-form.component';
import { EventDetailComponent } from './event-detail/event-detail.component';

export const routes: Routes = [
  {
    path: 'events',
    children: [
      { path: '', component: EventsPageComponent },
      { path: 'add', component: EventFormComponent },
      { path: ':id', component: EventDetailComponent },
    ],
  },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: '**', redirectTo: '/events' },
];
