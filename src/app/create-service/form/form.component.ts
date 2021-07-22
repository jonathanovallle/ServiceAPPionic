import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  ionicForm: FormGroup;
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.ionicForm = new FormGroup({
      titulo: new FormControl(''),
      precio: new FormControl(0.0),
      unidad: new FormControl('')
    })
  }

}
