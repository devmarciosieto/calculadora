import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BasicoComponent} from './basico/basico.component';

const routes: Routes = [
  {
    path: '',
    component: BasicoComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BasicoRoutingModule {}
