import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  articulos: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get("https://www.thesportsdb.com/api/v1/json/3/searchteams.php")
      .subscribe(
        resultado => {
          this.articulos = resultado;
        }
      );
  }
}
