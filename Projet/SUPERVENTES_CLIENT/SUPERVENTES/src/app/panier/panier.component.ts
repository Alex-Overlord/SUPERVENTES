import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthentificationService } from '../authentification.service';
import { PanierService } from '../panier.service';
import { Observable } from 'rxjs';


const httpOptions = {
	headers: new HttpHeaders({
		"Access-Control-Allow-Methods": "GET,POST",
		"Access-Control-Allow-Headers": "Content-type",
		"Content-type": "application/json",
		"Access-Control-Allow-Origin": "*"
	})
};


@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  public produits: any;
  public mail: String = "";
  public user: Observable<string>;

  constructor(private http: HttpClient,private authService: AuthentificationService,  private route: ActivatedRoute, private panierS: PanierService) { 
  this.user = this.authService.getUser()}

  ngOnInit() {



    //Affichage du contenu du panier

    this.user.subscribe( res  => {
      this.mail = res;
    });
    this.panierS.getPanier(this.mail).subscribe(res => {
      this.produits = res;
    });


  }

}
