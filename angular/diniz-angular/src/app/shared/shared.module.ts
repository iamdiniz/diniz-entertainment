import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDiaogComponent as ErrorDialogComponent } from './components/error-diaog/error-diaog.component';


@NgModule({
  declarations: [
    ErrorDialogComponent
  ],
  imports: [
    AppMaterialModule,
    CommonModule
  ],
  exports: [ErrorDialogComponent]
})
export class SharedModule { }
