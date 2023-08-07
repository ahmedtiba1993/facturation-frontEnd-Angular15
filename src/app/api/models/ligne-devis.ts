/* tslint:disable */
/* eslint-disable */
import { Devis } from './devis';
import { Produit } from './produit';
export interface LigneDevis {
  devis?: Devis;
  id?: number;
  prixTotal?: number;
  prixUnitaire?: number;
  produit?: Produit;
  quantite?: number;
  remise?: number;
}
