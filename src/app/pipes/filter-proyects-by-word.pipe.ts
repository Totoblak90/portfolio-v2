import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProyectsByWord'
})
export class FilterProyectsByWordPipe implements PipeTransform {

  transform(proyects: {name: string, link: string}[], searchTerm: string): {name: string, link: string}[] {
    try {
      if (searchTerm) {
        return proyects.filter(proyect => proyect.name.toLowerCase().includes(searchTerm.toLowerCase()))
      } else {
        return proyects
      }

    } catch (error) {
      console.warn('Error en filter by word pipe: ', error)
      return proyects;
    }
  }

}
