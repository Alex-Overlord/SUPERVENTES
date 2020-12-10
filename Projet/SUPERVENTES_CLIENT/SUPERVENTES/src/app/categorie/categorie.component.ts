import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProduitsService } from '../produits.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

    public categorie: any;
    
    
    constructor(private produitsService: ProduitsService) {}
    
    ngOnInit() {    
       this.produitsService.getCategories().subscribe(categories => {
            this.categorie = categories;
       });
    }
}
