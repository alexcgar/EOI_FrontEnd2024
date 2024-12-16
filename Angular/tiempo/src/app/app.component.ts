import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaginaTiempoComponent } from "./pagina-tiempo/pagina-tiempo.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PaginaTiempoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tiempo';
}
