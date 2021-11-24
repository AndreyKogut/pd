import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'wizard',
        loadChildren: () => import('./wizard/modules/wizard-demo/wizard-demo.module').then(m => m.WizardDemoModule),
      },
    ]
  }
];


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
