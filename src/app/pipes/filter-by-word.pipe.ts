import { Pipe, PipeTransform } from '@angular/core';
import { Repository } from '../interface/repository.interface';

@Pipe({
  name: 'filterByWord'
})
export class FilterByWordPipe implements PipeTransform {

  transform(repositories: Repository[], searchTerm: string): Repository[] {

    try {
      if (searchTerm) {
        return repositories.filter(repo => repo.name.toLowerCase().includes(searchTerm.toLowerCase()))
      } else {
        return repositories
      }



    } catch (error) {
      console.warn('Error en filter by word pipe: ', error)
      return repositories;
    }
  }

}
