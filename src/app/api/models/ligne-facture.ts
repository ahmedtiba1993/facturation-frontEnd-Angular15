/* tslint:disable */
/* eslint-disable */
import { Facture } from './facture';
import { Produit } from './produit';
export interface LigneFacture {
  facture?: Facture;
  id?: number;
  prixTotal?: number;
  prixUnitaire?: number;
  produit?: Produit;
  quantite?: number;
  remise?: number;
}
