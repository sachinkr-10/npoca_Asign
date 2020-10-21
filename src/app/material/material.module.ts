import { NgModule } from '@angular/core';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
const materialComponents=[
  MatCardModule,MatIconModule,MatButtonModule
];

@NgModule({

  imports: [
  materialComponents
  ],
  exports:[materialComponents]
})
export class MaterialModule { }
