import { NgModule } from '@angular/core';

import {
  MatCardModule,
} from '@angular/material/card';
import {
  MatButtonModule
} from '@angular/material/button';
import {
  MatInputModule,
} from '@angular/material/input';

const modules = [
  MatCardModule,
  MatInputModule,
  MatButtonModule
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
