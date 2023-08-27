/* tslint:disable */
/* eslint-disable */
import { GrantedAuthority } from './granted-authority';
export interface User {
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  authorities?: Array<GrantedAuthority>;
  credentialsNonExpired?: boolean;
  email?: string;
  enabled?: boolean;
  fax?: number;
  firstname?: string;
  id?: number;
  lastname?: string;
  mobile?: number;
  password?: string;
  role?: 'USER' | 'ADMIN';
  tel?: number;
  username?: string;
}
