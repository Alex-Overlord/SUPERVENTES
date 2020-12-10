import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitsComponent} from './produits/produits.component';
import { CategorieComponent} from './categorie/categorie.component';
import { PanierComponent } from './panier/panier.component';
import { ConnexionComponent } from './connexion/connexion.component';

const routes: Routes = [

	{ path: 'produits', component: ProduitsComponent },

	{ path: 'categories', component: CategorieComponent },

	{ path: 'panier/achat/:nom/:marque', component: PanierComponent },  
  
  { path: 'membres/connexion', component: ConnexionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
