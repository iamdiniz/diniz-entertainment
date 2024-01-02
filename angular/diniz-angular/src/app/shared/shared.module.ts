import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDiaogComponent as ErrorDialogComponent } from './components/error-diaog/error-diaog.component';
import { CategoryPipe } from './pipes/category.pipe';


@NgModule({
  declarations: [
    ErrorDialogComponent,
    CategoryPipe
  ],
  imports: [
    AppMaterialModule,
    CommonModule
  ],
  exports: [
  ErrorDialogComponent,
  CategoryPipe
]
})
export class SharedModule { }
