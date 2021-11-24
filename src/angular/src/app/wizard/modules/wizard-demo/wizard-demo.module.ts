import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { WizardModule } from '../wizard/wizard.module';
import { StepOneModule } from '../step-one/step-one.module';
import { StepTwoModule } from '../step-two/step-two.module';

import { WizardDemoComponent } from './wizard-demo.component';


@NgModule({
  declarations: [
    WizardDemoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: WizardDemoComponent }]),
    WizardModule,
    StepOneModule,
    StepTwoModule,
  ],
})
export class WizardDemoModule {}
