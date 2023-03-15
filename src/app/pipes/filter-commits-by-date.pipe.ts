import { Pipe, PipeTransform } from '@angular/core';
import { Commit } from '../interface/commit.interface';

@Pipe({
  name: 'filterByDate'
})
export class FilterCommitsByDatePipe implements PipeTransform {

  transform(value: Commit[], selectedDates: {startDate?: Date, endDate?: Date}): Commit[] {

    try {
      if (selectedDates.endDate && selectedDates.startDate) {
        return value
                .filter(commit => new Date(commit.creation) >= new Date(selectedDates.startDate!) && new Date(commit.creation) <= new Date(selectedDates.endDate!))
                .sort((prevCommit, nextCommit) => prevCommit.creation > nextCommit.creation ? 1 : -1)
      } else {
        return value;
      }

    } catch (error) {
      console.warn(`Error en el pipe que filtra por fecha los commits`)
      return value;
    }

  }

}
