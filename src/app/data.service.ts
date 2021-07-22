import { Observable } from 'rxjs';
import { ServiceOptions } from './interfaces/service-options';

import { HttpClient } from '@angular/common/http';
import { Component, OnInit,Injectable } from '@angular/core';



@Injectable()
export class DataService{
    private urlApi = 'http://localhost:3300/api/insertservice/';


    constructor(private http: HttpClient){}

    addNewService(service: ServiceOptions): Observable<ServiceOptions>{
    return this.http.post<ServiceOptions>(this.urlApi, service);
    }

}