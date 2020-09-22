import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicoComponent } from './basico/basico.component';
import {RouterModule} from '@angular/router';
import {BasicoRoutingModule} from './basico-routing.module';
import {CoreModule} from '../core/core.module';



@NgModule({
  declarations: [BasicoComponent],
  imports: [
    CommonModule,
    RouterModule,
    BasicoRoutingModule,
    CoreModule
  ],
  exports: [
    BasicoComponent
  ]
})
export class BasicoModule { }
