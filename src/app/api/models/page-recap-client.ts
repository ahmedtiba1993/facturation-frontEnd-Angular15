/* tslint:disable */
/* eslint-disable */
import { PageableObject } from './pageable-object';
import { RecapClient } from './recap-client';
import { SortObject } from './sort-object';
export interface PageRecapClient {
  content?: Array<RecapClient>;
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
