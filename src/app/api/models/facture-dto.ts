/* tslint:disable */
/* eslint-disable */
import { ClientDto } from './client-dto';
import { LigneFactureDto } from './ligne-facture-dto';
export interface FactureDto {
  client?: ClientDto;
  id?: number;
  lignesFacture?: Array<LigneFactureDto>;
  montantHt?: number;
  montantTTC?: number;
  reference?: string;
  tauxTVA?: number;
  timbreFiscale?: number;
}
