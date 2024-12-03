import { Component } from '@angular/core';
import { EventsPageComponent } from './events-page/events-page.component';

@Component({
  selector: 'app-root',
  imports: [EventsPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Eventos';
}
