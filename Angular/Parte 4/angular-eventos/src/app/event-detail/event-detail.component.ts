import {
  Component,
  DestroyRef,
  effect,
  inject,
  input,
  numberAttribute,
  signal,
} from '@angular/core';
import { Evento } from '../interfaces/evento';
import { EventsService } from '../services/events.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { EventCardComponent } from '../event-card/event-card.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'event-detail',
  imports: [EventCardComponent, RouterLink],
  templateUrl: './event-detail.component.html',
  styleUrl: './event-detail.component.css',
})
export class EventDetailComponent {
  id = input.required({ transform: numberAttribute });

  evento = signal<Evento | null>(null);

  eventsService = inject(EventsService);
  destroyRef = inject(DestroyRef);
  router = inject(Router);

  constructor() {
    effect(() =>
      this.eventsService
        .getEvent(this.id())
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe((resp) => this.evento.set(resp.event))
    );
  }

  goBack() {
    this.router.navigate(['/events']);
  }
}
