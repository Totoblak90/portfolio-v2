import { Component, ElementRef } from '@angular/core';
import { Proyect } from 'src/app/interface/proyect.interface';
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

  get getNativeElement(): ElementRef {
    return this.elementRef;
  }

  constructor(private filterService: FiltersService, private elementRef: ElementRef) {}

  proyectList: Proyect[] = [
    {
      name: 'Mi amigo animal',
      link: 'www.miamigoanimal.com',
      priority: 1
    },
    {
      name: 'Transoceanic Marine Services',
      link: 'http://www.transoceanicmarine.com/',
      priority: 1
    },
    {
      name: 'DLN Construcciones',
      link: 'https://dlnconstrucciones.net',
      priority: 2
    },
    {
      name: 'Omnifood',
      link: 'https://infallible-cray-447420.netlify.app/',
      priority: 1
    },
    {
      name: 'Tailwind',
      link: 'https://eloquent-rabanadas-493fb4.netlify.app/',
      priority: 3
    },
    {
      name: 'Beru',
      link: 'https://beru.io',
      priority: 1
    },
    {
      name: 'Green mining',
      link: 'https://green-mining.vercel.app/',
      priority: 2
    },
    {
      name: 'PorfolioV2',
      link: 'https://subtle-dolphin-3c58ad.netlify.app/',
      priority: 2
    },
    {
      name: 'PortfolioV1',
      link: 'https://laughing-khorana-2fe8f2.netlify.app/',
      priority: 3
    },
    {
      name: 'Some dashboard...',
      link: 'https://distracted-pike-19cbd1.netlify.app/',
      priority: 3
    },
    {
      name: 'Angular Pipes',
      link: 'https://friendly-murdock-fa3d5a.netlify.app/',
      priority: 3
    }
  ]

}
