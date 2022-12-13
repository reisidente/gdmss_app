import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgramarviajePageRoutingModule } from './programarviaje-routing.module';

import { ProgramarviajePage } from './programarviaje.page';
import { ComponentsModule } from '../../components/components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgramarviajePageRoutingModule,
    ComponentsModule,
  ],
  declarations: [ProgramarviajePage]
})
export class ProgramarviajePageModule {}
