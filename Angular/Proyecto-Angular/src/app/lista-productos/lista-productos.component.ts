import { Component } from '@angular/core';
import { ProductoService } from '../service/producto.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista-productos',
  standalone: false,
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent {
  productos: any[] = [];
  productosOriginales: any[] = [];
  nuevoProducto = {
    title: '',
    description: '',
    price: 0,
    imagen: ""
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
      this.nuevoProducto = { title: '', description: '', price: 0, imagen: "" };
    });
  }

 cargarImagen(event: any): void {
  const archivo = event.target.files[0];
  if (archivo) {
    const lector = new FileReader();
    lector.onload = () => {
      this.nuevoProducto.imagen = lector.result as string;
    };
    lector.readAsDataURL(archivo); // Esto convierte la imagen a base64
  }
}

}
