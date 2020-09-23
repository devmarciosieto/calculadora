import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicoComponent } from './basico/basico.component';
import {RouterModule} from '@angular/router';
import {BasicoRoutingModule} from './basico-routing.module';
import {CoreModule} from '../core/core.module';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [BasicoComponent],
    imports: [
        CommonModule,
        RouterModule,
        BasicoRoutingModule,
        CoreModule,
        FormsModule
    ],
  exports: [
    BasicoComponent
  ]
})
export class BasicoModule { }
