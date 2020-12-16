import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthentificationService } from '../authentification.service';
import { PanierService } from '../panier.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


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
  public message: String = "";
  public quantite: int;
  public pname: any;

  constructor(private http: HttpClient,private authService: AuthentificationService,  private route: ActivatedRoute, private panierS: PanierService, private router: Router) { 
  this.user = this.authService.getUser()}

  ngOnInit() {

  	console.log("test");
    this.user.subscribe( res  => {
      this.mail = res;
    });

    
  	this.route.params.subscribe((params: Params) => {
  		console.log(params.nom);
  		if(params.nom != undefined){
  			this.http.post('http://localhost:8888/panier/ajout/'+this.mail, JSON.stringify(params), httpOptions).subscribe((resultat: any) => {
  				this.produits = resultat;
  				
  			});
  			this.refresh();
  		}
  	});


    //Affichage du contenu du panier

    
	this.refresh();	
    

  }

  onSubmit() {

	if(this.quantite >= 0){
		this.panierS.modifQ(this.mail, this.quantite, this.pname).subscribe(reponse => {
			this.message = reponse['message']
		})
  	}
	else{
		this.message = "Vous avez rentré une valeur négative";
	}
	this.refresh();
 }


  
  

  payer(){
  	console.log("payeee");
  	this.panierS.panierPayer(this.mail).subscribe(reponse => {
  		this.message = reponse['message'];
  		
  	});
  	
  }

  refresh(){
  	this.panierS.getPanier(this.mail).subscribe(res => {
  		this.produits = res
  	})
  	setTimeout( () => { this.router.navigate(['/panier']); }, 1000);

  	
  }

}
