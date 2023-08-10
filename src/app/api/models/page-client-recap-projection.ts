/* tslint:disable */
/* eslint-disable */
import { ClientRecapProjection } from './client-recap-projection';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageClientRecapProjection {
  content?: Array<ClientRecapProjection>;
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
