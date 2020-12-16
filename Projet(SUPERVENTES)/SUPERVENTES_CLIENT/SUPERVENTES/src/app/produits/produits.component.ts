import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProduitsService } from '../produits.service';
import { AuthentificationService } from '../authentification.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
    public produits: any;
    public user: Observable<string>;
    
    constructor(private produitsService: ProduitsService, private authService: AuthentificationService) {
       console.log("Dans le constructeur du composant produits");
       this.user = this.authService.getUser();
    }
    
    ngOnInit() {
       console.log("Dans ngOnInit() du composant produits");    
       this.produitsService.getProduits().subscribe(produits => {
            this.produits = produits;
       });
    }
}

