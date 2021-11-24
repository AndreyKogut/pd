import { AfterViewInit, Component, ContentChildren, QueryList } from '@angular/core';

import { WizardAnchorDirective } from '../../directives/wizard-anchor.directive';
import { WizardStepService } from '../../services/wizard-step.service';


@Component({
  selector: 'wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements AfterViewInit {
  activeStep?: number = 0;

  @ContentChildren(WizardAnchorDirective, { read: WizardStepService }) wizardStepServices?: QueryList<WizardStepService>;

  ngAfterViewInit(): void {
    const currentStep = this.wizardStepServices?.get(0);

    if (currentStep) {
      this.activeStep = 0;
      currentStep.open();
    }
  }

  prevStep() {
    this.closeCurrentStep();
    this.openNewStep((this.activeStep || 0) - 1);
  }

  nextStep() {
    this.closeCurrentStep();
    this.openNewStep((this.activeStep || 0) + 1);
  }

  private openNewStep(num: number): void {
    this.activeStep = num;

    const item = this.wizardStepServices?.get(this.activeStep);

    item?.open();
  }

  private closeCurrentStep(): void {
    if (this.activeStep != undefined) {
      const item = this.wizardStepServices?.get(this.activeStep);

      item?.close();
    }
  }
}
