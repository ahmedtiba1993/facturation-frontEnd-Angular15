/* tslint:disable */
/* eslint-disable */
import { ClientDto } from './client-dto';
import { LigneFactureDto } from './ligne-facture-dto';
export interface FactureDto {
  client?: ClientDto;
  dateFacture?: string;
  id?: number;
  lignesFacture?: Array<LigneFactureDto>;
  montantHt?: number;
  montantTTC?: number;
  paymentStatus?: boolean;
  reference?: string;
  tauxTVA?: number;
  timbreFiscale?: number;
}
