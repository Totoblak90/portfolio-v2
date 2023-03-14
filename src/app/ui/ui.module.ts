import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { FaIconComponent } from './fa-icon/fa-icon.component';
import { DirectivesModule } from '../directives/directives.module';
import { CircleComponent } from './circle/circle.component';



@NgModule({
  declarations: [
    InputComponent,
    FaIconComponent,
    CircleComponent,
  ],
  exports: [
    InputComponent,
    FaIconComponent,
    CircleComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule
  ]
})
export class UiModule { }
