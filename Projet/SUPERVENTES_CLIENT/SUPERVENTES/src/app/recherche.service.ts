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
export class RechercheService {
	private baseURL: string = "http://localhost:8888/";

  constructor(private http: HttpClient) { }

  getRes(Text: string, categorie: string): Observable<any>{
  	return this.http.get(this.baseURL+"recherche/"+categorie+"/"+Text);
  }
}
