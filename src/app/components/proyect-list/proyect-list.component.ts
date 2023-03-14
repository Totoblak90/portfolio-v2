import { Component } from '@angular/core';
import { FiltersService } from '../../services/filters.service';

@Component({
  selector: 'proyect-list',
  templateUrl: './proyect-list.component.html',
  styleUrls: ['./proyect-list.component.scss']
})
export class ProyectListComponent {

  get searchTerm() {
    return this.filterService.searchTerm.value
  }

  get sortingValue() {
    return this.filterService.sortingValue.value
  }

  constructor(private filterService: FiltersService) {}

  proyectList = [
    {
      name: 'Transoceanic Marine Services',
      link: 'http://www.transoceanicmarine.com/'
    },
    {
      name: 'Lion languages',
      link: 'https://lionlanguages.com/'
    },
    {
      name: 'DLN Construcciones',
      link: 'https://dlnconstrucciones.net'
    },
    {
      name: 'Omnifood',
      link: 'https://infallible-cray-447420.netlify.app/'
    },
    {
      name: 'Tailwind',
      link: 'https://eloquent-rabanadas-493fb4.netlify.app/'
    },
    {
      name: 'Beru',
      link: 'https://beru.io'
    }
  ]

}
