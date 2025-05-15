import { Component } from '@angular/core';

@Component({
  selector: 'app-dado-component',
  standalone: false,
  templateUrl: './dado-component.component.html',
  styleUrl: './dado-component.component.css'
})
export class DadoComponent {
   dado = 0;
   aleatorio(){
    this.dado  = Math.floor(Math.random()*6+1);
  }
}


