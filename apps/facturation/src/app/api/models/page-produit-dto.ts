/* tslint:disable */
/* eslint-disable */
import { PageableObject } from './pageable-object';
import { ProduitDto } from './produit-dto';
import { SortObject } from './sort-object';
export interface PageProduitDto {
  content?: Array<ProduitDto>;
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
