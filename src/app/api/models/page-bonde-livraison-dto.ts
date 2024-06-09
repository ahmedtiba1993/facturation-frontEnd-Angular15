/* tslint:disable */
/* eslint-disable */
import { BondeLivraisonDto } from './bonde-livraison-dto';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageBondeLivraisonDto {
  content?: Array<BondeLivraisonDto>;
  empty?: boolean;
  first?: boolean;
  last?: boolean;
  number?: number;
  numberOfElements?: number;
  pageable?: PageableObject;
  size?: number;
  sort?: SortObject;
  totalElements?: number;
  totalPages?: number;
}
