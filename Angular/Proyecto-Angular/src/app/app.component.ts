import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
   template: `
    <h1>Buscar equipo</h1>
    <input [(ngModel)]="equipo" placeholder="Nombre del equipo" />
    <button (click)="buscar()">Buscar</button>

    <div *ngIf="resultado">
      <h2>{{ resultado.strTeam }}</h2>
      <img [src]="resultado.strTeamBadge" alt="Escudo" width="100" />
      <p>{{ resultado.strDescriptionEN }}</p>
    </div>
  `
})
export class AppComponent {
  title = 'Proyecto--Angular';


}
