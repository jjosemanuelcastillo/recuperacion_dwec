import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroProductos',
  standalone: true
})
export class FiltroProductosPipe implements PipeTransform {

  transform(productos: any[],termino:string) : any[]{
    if(!productos || !termino){
      return productos
    }

    return productos.filter(productos =>
      productos.title.toLowerCase().includes(termino.toLowerCase())
    );
  }

}
