import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProyectsByWord'
})
export class FilterProyectsByWordPipe implements PipeTransform {

  transform(proyects: {name: string, link: string, priority: number}[], searchTerm: string): {name: string, link: string, priority: number}[] {
    try {
      if (searchTerm) {
        return proyects.filter(proyect => proyect.name.toLowerCase().includes(searchTerm.toLowerCase()))
      } else {
        return proyects
      }

    } catch (error) {
      console.warn('Error en filter proyects by word pipe: ', error)
      return proyects;
    }
  }

}
