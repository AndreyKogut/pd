import { Component, forwardRef } from '@angular/core';

import { WizardStepService } from '../../services/wizard-step.service';


@Component({
  selector: 'step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss'],
  providers: [
    {
      provide: WizardStepService,
      useExisting: forwardRef(() => StepTwoComponent),
    }
  ]
})
export class StepTwoComponent implements WizardStepService {
  open() {
    console.log('show step two');
  }

  close() {
    console.log('close step two');
  }
}
