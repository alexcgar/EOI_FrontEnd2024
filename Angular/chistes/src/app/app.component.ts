import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaginaChistesComponent } from "./pagina-chistes/pagina-chistes.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PaginaChistesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chistes';
}
