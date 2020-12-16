import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/*
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type":  "application/json",
    "Access-Control-Allow-Origin": "*"
  })
};
*/


@Injectable({ providedIn: 'root' })
export class ProduitsService {
    private urlBase: string = 'http://localhost:8888/';

    constructor(private http: HttpClient) { }

    getProduits(): Observable<any> {
        let url = this.urlBase+'produits';
	      console.log("Dans le service ProduitsService avec "+url);
        return this.http.get(url);
    }

    getCategories(): Observable<any> {
        return this.http.get(this.urlBase+'categories');
    }

    getProduitsParCategorie(categorie: string): Observable<any> {
        return this.http.get(this.urlBase+'produits/'+categorie);
    }
}