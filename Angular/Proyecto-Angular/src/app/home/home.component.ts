import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../service/producto.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  productos: any[] = [];
  terminoBusqueda: string = '';
  productosOriginales: any[] = [];

  constructor(private ProductoService: ProductoService) { }

  ngOnInit(): void {
    this.ProductoService.obtenerProductos().subscribe(res => {
      this.productos = res.products;
      this.productosOriginales = res.products;
    })
  }

  filtrarProductos() {
    const termino = this.terminoBusqueda.toLowerCase();
    this.productos = this.productosOriginales.filter(producto =>
      producto.title.toLowerCase().includes(termino)

    );
  }
}
