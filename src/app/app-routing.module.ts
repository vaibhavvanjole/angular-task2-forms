import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormRadioComponent } from './form-radio/form-radio.component';
import { FormSelectComponent } from './form-select/form-select.component';

const routes: Routes = [
  { path : '', component : FormSelectComponent},
  { path : 'radio', component : FormRadioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
