import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProduitsService } from '../produits.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-produits-par-categorie',
  templateUrl: './produits-par-categorie.component.html',
  styleUrls: ['./produits-par-categorie.component.css']
})

export class ProduitsParCategorieComponent implements OnInit {
  public produits: any;
  public categorie: any;

  constructor(private produitsService: ProduitsService) {
    console.log("Dans le constructeur du composant produits-par-categorie");
  }

  ngOnInit() {
    console.log("Dans ngOnInit() du composant produits-par-categorie");    
    this.produitsService.getProduitsParCategorie(this.produits).subscribe(produits => {this.produits = produits;});
    this.produitsService.getProduitsParCategorie(this.categorie).subscribe(categorie => {this.categorie = categorie;});
  }
}