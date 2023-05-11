/* tslint:disable */
/* eslint-disable */
import { FactureDto } from './facture-dto';
import { ProduitDto } from './produit-dto';
export interface LigneFactureDto {
  facture?: FactureDto;
  id?: number;
  prixTotal?: number;
  prixUnitaire?: number;
  produit?: ProduitDto;
  quantite?: number;
  remise?: number;
}
