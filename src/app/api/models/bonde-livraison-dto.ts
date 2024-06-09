/* tslint:disable */
/* eslint-disable */
import { ClientDto } from './client-dto';
import { LigneBondeLivraisonDto } from './ligne-bonde-livraison-dto';
export interface BondeLivraisonDto {
  client?: ClientDto;
  dateBondeLivraison?: string;
  id?: number;
  ligneBondeLivraison?: Array<LigneBondeLivraisonDto>;
  montantHt?: number;
  montantTTC?: number;
  reference?: string;
  tauxTVA?: number;
  timbreFiscale?: number;
}
