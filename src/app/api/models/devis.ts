/* tslint:disable */
/* eslint-disable */
import { Client } from './client';
import { LigneDevis } from './ligne-devis';
export interface Devis {
  client?: Client;
  dateDevis?: string;
  id?: number;
  ligneDevis?: Array<LigneDevis>;
  montantHt?: number;
  montantTTC?: number;
  paymentStatus?: boolean;
  reference?: string;
  tauxTVA?: number;
  timbreFiscale?: number;
}
