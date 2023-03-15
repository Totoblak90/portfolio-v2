import { Component, Input } from '@angular/core';

@Component({
  selector: 'priority',
  templateUrl: './priority.component.html',
  styleUrls: ['./priority.component.scss']
})
export class PriorityComponent {

  @Input() priority?: 1 | 2 | 3

  get ngClass() {
    const cssClass: {[key: string]: boolean} = {};
    if (this.priority === 1) cssClass['priority-1'] = true
    if (this.priority === 2) cssClass['priority-2'] = true
    if (this.priority === 3) cssClass['priority-3'] = true

    return cssClass;

  }

}
