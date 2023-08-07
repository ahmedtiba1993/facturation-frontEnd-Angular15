/* tslint:disable */
/* eslint-disable */
import { DevisDto } from './devis-dto';
import { ProduitDto } from './produit-dto';
export interface LigneDevisDto {
  devis?: DevisDto;
  id?: number;
  prixTotal?: number;
  prixUnitaire?: number;
  produit?: ProduitDto;
  quantite?: number;
  remise?: number;
}
