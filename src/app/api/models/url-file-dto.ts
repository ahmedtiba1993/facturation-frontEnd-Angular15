/* tslint:disable */
/* eslint-disable */
import { BondeLivraisonDto } from './bonde-livraison-dto';
import { DevisDto } from './devis-dto';
import { FactureDto } from './facture-dto';
export interface UrlFileDto {
  bondeLivraisonDto?: BondeLivraisonDto;
  devisDto?: DevisDto;
  factureDto?: FactureDto;
  uuid?: string;
}
