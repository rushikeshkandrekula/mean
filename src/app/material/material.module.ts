import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule}from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
//import {MatFormFieldControl} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';



const materialComponents=[
  MatButtonModule,
  MatDatepickerModule,
  MatInputModule,
  MatFormFieldModule,

  MatNativeDateModule
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,materialComponents
  ],
  exports:[materialComponents]
})
export class MaterialModule { }
