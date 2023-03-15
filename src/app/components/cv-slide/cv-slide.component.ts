import { Component, Input } from '@angular/core';
import { CvItem } from '../../interface/cv.interface';

@Component({
  selector: 'cv-slide',
  templateUrl: './cv-slide.component.html',
  styleUrls: ['./cv-slide.component.scss']
})
export class CvSlideComponent {
  @Input() cvItem?: CvItem
}
