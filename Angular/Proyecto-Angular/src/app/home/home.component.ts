import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../service/producto.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  productos: any[] = [];
  productosOriginales: any[] = [];
  nuevoProducto = {
    title: '',
    description: '',
    price: 0
  };


  constructor(private ProductoService: ProductoService, private http: HttpClient) { }

  ngOnInit(): void {
  this.ProductoService.obtenerProductos().subscribe(res => {
    this.productos = res.products;
    this.ProductoService.setProductos(this.productos); // Guardar en el servicio
  });
}






  enviarFormulario() {
    this.ProductoService.agregarProducto(this.nuevoProducto).subscribe(res => {
      console.log('Producto agregado:', res);
      alert('¡Producto agregado correctamente!');

      // Agrega el producto a la lista mostrada
      this.productos.push(res);
      this.productosOriginales.push(res); // Para que también esté en la copia original

      // Limpia el formulario
      this.nuevoProducto = { title: '', description: '', price: 0 };
    });
  }

}
