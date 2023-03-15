import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss']
})
export class CircleComponent {

  @Input() text = '';
  @Input() bgColor: 'proyects-priority1' | 'proyects-priority2' | 'proyects-priority3' | 'repos' | 'danger' = 'proyects-priority1';
  @Input() link = ''
  @Output() onClick = new EventEmitter();

  get backgroundColor() {
    const cssClass: {[key:string]: boolean} = {};

    if (this.bgColor === 'proyects-priority1') cssClass['color-proyects-priority1'] = true;
    if (this.bgColor === 'proyects-priority2') cssClass['color-proyects-priority2'] = true;
    if (this.bgColor === 'proyects-priority3') cssClass['color-proyects-priority3'] = true;
    if (this.bgColor === 'repos') cssClass['color-repos'] = true;
    if (this.bgColor === 'danger') cssClass['color-danger'] = true;

    return cssClass;
  }

  get isLoading() {
    return this.text.toLowerCase().includes('loading')
  }

}
