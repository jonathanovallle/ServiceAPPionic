import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { CreateServicePageRoutingModule } from './create-service-routing.module';
import { NavController } from '@ionic/angular';
import { CreateServicePage } from './create-service.page';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateServicePageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [CreateServicePage,FormComponent],
  providers: [CreateServicePage],
})
export class CreateServicePageModule {}
