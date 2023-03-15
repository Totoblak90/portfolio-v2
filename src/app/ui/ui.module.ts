import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { FaIconComponent } from './fa-icon/fa-icon.component';
import { DirectivesModule } from '../directives/directives.module';
import { CircleComponent } from './circle/circle.component';
import { PriorityComponent } from './priority/priority.component';



@NgModule({
  declarations: [
    InputComponent,
    FaIconComponent,
    CircleComponent,
    PriorityComponent,
  ],
  exports: [
    InputComponent,
    FaIconComponent,
    CircleComponent,
    PriorityComponent,
  ],
  imports: [
    CommonModule,
    DirectivesModule
  ]
})
export class UiModule { }
