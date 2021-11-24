import { Component, forwardRef } from '@angular/core';

import { WizardStepService } from '../../services/wizard-step.service';


@Component({
  selector: 'step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss'],
  providers: [
    {
      provide: WizardStepService,
      useExisting: forwardRef(() => StepOneComponent),
    }
  ],
})
export class StepOneComponent implements WizardStepService {
  open() {
    console.log('show step one');
  }

  close() {
    console.log('close step one');
  }
}
