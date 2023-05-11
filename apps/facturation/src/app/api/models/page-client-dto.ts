/* tslint:disable */
/* eslint-disable */
import { ClientDto } from './client-dto';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageClientDto {
  content?: Array<ClientDto>;
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
