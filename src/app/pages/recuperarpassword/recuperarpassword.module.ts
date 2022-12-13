import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperarpasswordPageRoutingModule } from './recuperarpassword-routing.module';

import { RecuperarpasswordPage } from './recuperarpassword.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperarpasswordPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [RecuperarpasswordPage]
})
export class RecuperarpasswordPageModule {}
