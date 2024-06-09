/* tslint:disable */
/* eslint-disable */
import { BondeLivraison } from './bonde-livraison';
import { Produit } from './produit';
export interface LigneBondeLivraison {
  bondeLivraison?: BondeLivraison;
  id?: number;
  prixTotal?: number;
  prixUnitaire?: number;
  produit?: Produit;
  quantite?: number;
  remise?: number;
}
