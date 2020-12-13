import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RechercheService } from '../recherche.service'


@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent {
	public recherche: string = "";
	public categorie: string = "";
	public message: string = "";

  constructor(private RechService: RechercheService,
              private router: Router) { }

  onSubmit() {
  	console.log("la: "+this.categorie);
  	this.RechService.getRes(this.recherche,this.categorie).subscribe( reponse => {
  		this.message = reponse['message'];
  	})
  }

}
