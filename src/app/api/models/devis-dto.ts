/* tslint:disable */
/* eslint-disable */
import { ClientDto } from './client-dto';
import { LigneDevisDto } from './ligne-devis-dto';
export interface DevisDto {
  client?: ClientDto;
  dateDevis?: string;
  id?: number;
  ligneDevis?: Array<LigneDevisDto>;
  montantHt?: number;
  montantTTC?: number;
  paymentStatus?: boolean;
  reference?: string;
  tauxTVA?: number;
  timbreFiscale?: number;
}
