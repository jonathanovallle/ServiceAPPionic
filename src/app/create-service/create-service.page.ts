import { ServiceOptions } from './../interfaces/service-options';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from "@angular/forms";
import { DataService } from '../data.service';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.page.html',
  styleUrls: ['./create-service.page.scss'],
})
export class CreateServicePage implements OnInit {
  orderForm: FormGroup;
  items: FormArray;
  isSubmitted = false;
  count = 1;
  arrayOfObj = [1];
  arrayData = [];
  datos: ServiceOptions;
  validado = true;
  constructor(public formBuilder: FormBuilder, private dataSvc: DataService,private nav: NavController,
    public toastController: ToastController) { 
  }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      items: this.formBuilder.array([ this.createItem() ])
    });
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      titulo: ['', [Validators.required,Validators.maxLength(20)]],
      precio: ['', [Validators.required,Validators.pattern('/^[0-9]+.[0-9]{2}/g')]],
      unidad: ['', [Validators.required]]
    });
  }

  // get errorControl() {
  //   console.log(this.orderForm.controls.valid);
  //   return this.orderForm.controls.items;
  // }

  submitForm() {
    this.isSubmitted = true;
    // if (!this.orderForm.controls.valid) {
    //   console.log('Please provide all the required values!')
    //   return false;
    // } else {
    //   console.log(this.orderForm.value)
    // }
    this.orderForm.value.items.forEach(element => {
      if(element.titulo.length == 0){
        this.validado = false;
      }else if(element.titulo.length>20){
        this.validado = false;
      }else{
        this.validado = true;
      }
      if(element.precio.length == 0){
        this.validado = false;
      }else if(this.countDecimals(element.precio) > 2){
        this.validado = false;
      }else{
        this.validado = true;
      }
      if(element.unidad.length == 0){
        this.validado = false;
      }else{
        this.validado = true;
      }
        
     });
     this.orderForm.value.items.forEach(element => {
      if(this.validado){
        const newService = element;
        this.dataSvc.addNewService(newService).subscribe(service => console.log(service))
         console.log(newService);
      }else{
        this.checkToast();
      }
    });
     if(this.validado){
      this.nav.back();
      this.presentToast();
     }
  }

  addItem(): void {
    this.items = this.orderForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }

  async presentToast() {
    const toast = await this.toastController.create({
      position: "middle",
      message: 'Servicio Creado',
      duration: 2000
    });
    toast.present();
  }

  async checkToast() {
    const toast = await this.toastController.create({
      position: "middle",
      message: 'Ningun campo debe de estar vacio',
      duration: 2000
    });
    toast.present();
  }

   countDecimals (value) {
    if(Math.floor(value) === value) return 0;
    return value.toString().split(".")[1].length || 0; 
}

}
