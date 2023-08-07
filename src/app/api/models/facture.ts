/* tslint:disable */
/* eslint-disable */
import { Client } from './client';
import { LigneFacture } from './ligne-facture';
export interface Facture {
  client?: Client;
  dateFacture?: string;
  id?: number;
  lignesFacture?: Array<LigneFacture>;
  montantHt?: number;
  montantTTC?: number;
  paymentStatus?: boolean;
  reference?: string;
  tauxTVA?: number;
  timbreFiscale?: number;
}
