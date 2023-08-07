/* tslint:disable */
/* eslint-disable */
import { Devis } from './devis';
import { Facture } from './facture';
export interface Client {
  adresse?: string;
  code?: string;
  devis?: Array<Devis>;
  factures?: Array<Facture>;
  id?: number;
  nom?: string;
  nomCommercial?: string;
  prenom?: string;
  remise?: number;
  tel?: number;
}
