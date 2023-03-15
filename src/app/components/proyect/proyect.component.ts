import { Component, Input } from '@angular/core';
import { Proyect } from 'src/app/interface/proyect.interface';

@Component({
  selector: 'proyect',
  templateUrl: './proyect.component.html',
  styleUrls: ['./proyect.component.scss']
})
export class ProyectComponent {
  @Input() proyect?: Proyect;

  get priority() {
    if (this.proyect?.priority === 1) return  'proyects-priority1';
    if (this.proyect?.priority === 2) return  'proyects-priority2';
    return  'proyects-priority3';
  }
}
