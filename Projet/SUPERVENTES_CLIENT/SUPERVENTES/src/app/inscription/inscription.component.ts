import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../authentification.service'

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  public utilisateur = {"nom":"", "prenom":"", "email":"", "password":""};
  public message: string = "";

  constructor(private authService: AuthentificationService,
              private router: Router) { }

  onSubmit()  {
  	this.authService.Inscription(this.utilisateur).subscribe(reponse => {
      this.message = reponse['message'];
  	});
  }
}
