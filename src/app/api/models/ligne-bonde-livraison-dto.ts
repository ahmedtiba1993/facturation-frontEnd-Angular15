/* tslint:disable */
/* eslint-disable */
import { BondeLivraisonDto } from './bonde-livraison-dto';
import { ProduitDto } from './produit-dto';
export interface LigneBondeLivraisonDto {
  bondeLivraison?: BondeLivraisonDto;
  id?: number;
  prixTotal?: number;
  prixUnitaire?: number;
  produit?: ProduitDto;
  quantite?: number;
  remise?: number;
}
