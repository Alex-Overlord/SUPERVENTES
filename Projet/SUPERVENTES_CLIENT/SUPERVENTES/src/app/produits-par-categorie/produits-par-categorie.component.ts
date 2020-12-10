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

  constructor() { }

  ngOnInit(): void {
  }

}
