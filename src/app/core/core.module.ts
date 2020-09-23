import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ButtonModule} from 'primeng/button';
import {SidebarModule} from 'primeng/sidebar';
import {RadioButtonModule} from 'primeng/radiobutton';
import {DropdownModule} from 'primeng/dropdown';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    SidebarModule,
    RadioButtonModule,
    DropdownModule,
  ],
  exports: [
    ButtonModule,
    SidebarModule,
    RadioButtonModule,
    DropdownModule,
  ]
})
export class CoreModule { }
