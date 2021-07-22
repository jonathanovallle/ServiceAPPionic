import { ServiceOptions } from './../interfaces/service-options';
import { HttpClientModule,HttpHeaders,HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private urlapi = 'http://localhost:3300/api/getservice';
  public services: any = null;
  data;
  error;
  constructor(private navController: NavController,public http:HttpClient) {}

  ngOnInit() {
    this.getServices();
  }

  navigateToCreateService(){
    this.navController.navigateRoot('/create-service');
  }

  getServices(){
    this.http
    .get(this.urlapi)
    .subscribe((re) => {
      this.data=re;
      console.log(this.data);
    },( error => this.error));
  }
}


