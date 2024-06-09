/* tslint:disable */
/* eslint-disable */
import { Client } from './client';
import { LigneBondeLivraison } from './ligne-bonde-livraison';
export interface BondeLivraison {
  client?: Client;
  dateBondeLivraison?: string;
  id?: number;
  ligneBondeLivraisons?: Array<LigneBondeLivraison>;
  montantHt?: number;
  montantTTC?: number;
  reference?: string;
  tauxTVA?: number;
  timbreFiscale?: number;
}
