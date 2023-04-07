/* tslint:disable */
/* eslint-disable */
import { CategorieDto } from './categorie-dto';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageCategorieDto {
  content?: Array<CategorieDto>;
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
