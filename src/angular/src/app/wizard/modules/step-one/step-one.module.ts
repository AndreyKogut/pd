import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepOneComponent } from './step-one.component';



@NgModule({
  declarations: [
    StepOneComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StepOneComponent,
  ],
})
export class StepOneModule { }
