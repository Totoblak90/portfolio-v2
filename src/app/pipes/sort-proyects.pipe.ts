import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortProyects'
})
export class SortProyectsPipe implements PipeTransform {

  transform(value: {name: string, link: string}[], sortingValue: 'A-Z' | 'Z-A' | undefined): {name: string, link: string}[] {
    try {
      if (value) {
        switch (sortingValue) {
         case 'A-Z':
           return value.sort((prevRepo, nextRepo) => prevRepo!.name.toLowerCase() < nextRepo!.name.toLowerCase() ? -1 : 1)
         case 'Z-A':
           return value.sort((prevRepo, nextRepo) => prevRepo!.name.toLowerCase() < nextRepo!.name.toLowerCase() ? 1 : -1)
         default:
           return value;
        }
      } else {
        return value
      }

    } catch (error) {
      console.warn('Error at sorting pipe')
      return value
    }
  }

}
