import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortProyects'
})
export class SortProyectsPipe implements PipeTransform {

  transform(value: {name: string, link: string, priority: number}[], sortingValue: 'A-Z' | 'Z-A' | undefined): {name: string, link: string, priority: number}[] {
    try {
      if (value) {
        switch (sortingValue) {

          case 'A-Z':
            const priority1AZ = value.filter(p => p.priority === 1)
                                .sort((prevRepo, nextRepo) => prevRepo!.name.toLowerCase() < nextRepo!.name.toLowerCase() ? -1 : 1);

            const priority2AZ = value.filter(p => p.priority === 2)
                                .sort((prevRepo, nextRepo) => prevRepo!.name.toLowerCase() < nextRepo!.name.toLowerCase() ? -1 : 1);

            const priority3AZ = value.filter(p => p.priority === 3)
                                .sort((prevRepo, nextRepo) => prevRepo!.name.toLowerCase() < nextRepo!.name.toLowerCase() ? -1 : 1);

            const orderedByPriorityAZ = [...priority1AZ, ...priority2AZ, ...priority3AZ];

           return orderedByPriorityAZ


         case 'Z-A':
            const priority1ZA =   value.filter(p => p.priority === 1)
                                      .sort((prevRepo, nextRepo) => prevRepo!.name.toLowerCase() < nextRepo!.name.toLowerCase() ? 1 : -1);

            const priority2ZA =   value.filter(p => p.priority === 2)
                                      .sort((prevRepo, nextRepo) => prevRepo!.name.toLowerCase() < nextRepo!.name.toLowerCase() ? 1 : -1);

            const priority3ZA =   value.filter(p => p.priority === 3)
                                      .sort((prevRepo, nextRepo) => prevRepo!.name.toLowerCase() < nextRepo!.name.toLowerCase() ? 1 : -1);

            const orderedByPriorityZA = [...priority1ZA, ...priority2ZA, ...priority3ZA]

            return orderedByPriorityZA;


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
