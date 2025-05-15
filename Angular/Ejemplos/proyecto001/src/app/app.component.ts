import { Component } from '@angular/core';

@Component({
  selector: 'componente-1',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Primer Proyecto';
  edad = 18;
}
