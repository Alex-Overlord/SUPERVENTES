import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitsComponent} from './produits/produits.component';
import { CategorieComponent} from './categorie/categorie.component';
import { PanierComponent } from './panier/panier.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ProduitsParCategorieComponent} from './produits-par-categorie/produits-par-categorie.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { RechercheComponent } from './recherche/recherche.component';

const routes: Routes = [

	{ path: 'produits', component: ProduitsComponent },

	{ path: 'categories', component: CategorieComponent },

	{ path: 'panier/achat/:nom/:marque/:type/:prix', component: PanierComponent }, 

	{ path: 'panier', component: PanierComponent }, 
  
  { path: 'membres/connexion', component: ConnexionComponent },
  
 	{ path: 'produits/:categorie', component: ProduitsParCategorieComponent },

  { path: 'membres/inscription', component: InscriptionComponent},

  { path: 'recherche', component: RechercheComponent},

	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
