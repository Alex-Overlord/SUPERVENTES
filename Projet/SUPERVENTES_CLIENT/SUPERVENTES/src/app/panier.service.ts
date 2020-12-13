import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    "Access-Control-Allow-Methods": "GET,POST",	  
    "Access-Control-Allow-Headers": "Content-type",  
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  })
};


@Injectable({
  providedIn: 'root'
})
export class PanierService {
	private baseURL: string = "http://localhost:8888/";

  constructor(private http: HttpClient) { }

  getPanier(mail: any): Observable<any>{
  	console.log(this.http.get(this.baseURL+'panier/'+mail));
  	return this.http.get(this.baseURL+'panier/'+mail);
  }
}
