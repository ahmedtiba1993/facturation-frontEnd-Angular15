/* tslint:disable */
/* eslint-disable */
import { FactureDto } from './facture-dto';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageFactureDto {
  content?: Array<FactureDto>;
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
