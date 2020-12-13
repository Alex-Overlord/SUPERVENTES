import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RechercheService } from '../recherche.service'
import { AuthentificationService } from '../authentification.service';


@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent {
	public recherche: string = "";
	public categorie: string = "";
	public produits: any;
	public user: Observable<string>;

  constructor(private RechService: RechercheService, private authService: AuthentificationService,
              private router: Router) {
              this.user = this.authService.getUser(); }

  onSubmit() {
  	this.RechService.getRes(this.recherche,this.categorie).subscribe( produits => {
  		this.produits = produits;
  	})
  }

}
