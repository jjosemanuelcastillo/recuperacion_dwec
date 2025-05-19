import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../service/producto.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-busqueda',
  imports: [CommonModule, FormsModule],
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})
export class BusquedaComponent implements OnInit {
  terminoBusqueda: string = '';
  productos: any[] = [];
  productosFiltrados: any[] = [];

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.productos = this.productoService.getProductos();
    this.productosFiltrados = [...this.productos];
  }

  filtrarProductos() {
    const termino = this.terminoBusqueda.toLowerCase();
    this.productosFiltrados = this.productos.filter(producto =>
      producto.title.toLowerCase().includes(termino)
    );
  }
}
