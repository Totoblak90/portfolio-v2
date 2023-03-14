import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss']
})
export class CircleComponent {

  @Input() text = '';
  @Input() bgColor: 'proyects' | 'repos' | 'danger' = 'proyects';
  @Input() link = ''
  @Output() onClick = new EventEmitter();

  get backgroundColor() {
    const cssClass: {[key:string]: boolean} = {};

    if (this.bgColor === 'proyects') cssClass['color-proyects'] = true;
    if (this.bgColor === 'repos') cssClass['color-repos'] = true;
    if (this.bgColor === 'danger') cssClass['color-danger'] = true;

    return cssClass;
  }

  get isLoading() {
    return this.text.toLowerCase().includes('loading')
  }

}
