import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WizardAnchorDirective } from '../../directives/wizard-anchor.directive';

import { WizardComponent } from './wizard.component';


@NgModule({
  declarations: [
    WizardComponent,
    WizardAnchorDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    WizardComponent,
    WizardAnchorDirective,
  ],
})
export class WizardModule { }
