import { Component } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Primer Proyecto';
  edad = 18;
}
