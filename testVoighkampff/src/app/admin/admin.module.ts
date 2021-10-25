import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { TestsComponent } from './tests/tests.component';
import { ProfilsComponent } from './profils/profils.component';
import { TestComponent } from './tests/test/test.component';


@NgModule({
  declarations: [
    TestsComponent,
    ProfilsComponent,
    TestComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
