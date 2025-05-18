import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'https://dummyjson.com/products';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  productos: any[] = [];


  constructor(private http: HttpClient) { }

  obtenerProductos(){
    return this.http.get<any>(`${API_URL}`);
  }

  agregarProducto(producto: any): Observable<any> {
    return this.http.post('https://dummyjson.com/products/add', producto);
  }

  setProductos(productos: any[]) {
    this.productos = productos;
  }

  getProductos(): any[] {
    return this.productos;
  }
}
