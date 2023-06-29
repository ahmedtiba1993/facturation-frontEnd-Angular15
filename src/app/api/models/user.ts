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
  firstname?: string;
  id?: number;
  lastname?: string;
  password?: string;
  role?: 'USER' | 'ADMIN';
  username?: string;
}
