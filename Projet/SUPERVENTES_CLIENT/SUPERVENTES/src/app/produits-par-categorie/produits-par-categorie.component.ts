import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProduitsService } from '../produits.service';
import { AuthentificationService } from '../authentification.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-produits-par-categorie',
  templateUrl: './produits-par-categorie.component.html',
  styleUrls: ['./produits-par-categorie.component.css']
})

export class ProduitsParCategorieComponent implements OnInit {
  public produits: any;
  public categorie: any;
  public user: Observable<string>;

  constructor(private produitsService: ProduitsService, private authService: AuthentificationService) {
    console.log("Dans le constructeur du composant produits-par-categorie");
    this.user = this.authService.getUser();
  }

  ngOnInit() {
    console.log("Dans ngOnInit() du composant produits-par-categorie"); 

    this.produitsService.getCategories().subscribe(categories => { this.categorie = categories; });

    this.produitsService.getProduits().subscribe(produits => {
      this.produits = produits; 
    });
  }
}