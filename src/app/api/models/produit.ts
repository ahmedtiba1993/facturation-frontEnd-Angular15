/* tslint:disable */
/* eslint-disable */
import { Categorie } from './categorie';
export interface Produit {
  categorie?: Categorie;
  code?: string;
  description?: string;
  etatRemise?: boolean;
  id?: number;
  nom?: string;
  prix?: number;
}
