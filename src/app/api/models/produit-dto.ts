/* tslint:disable */
/* eslint-disable */
import { CategorieDto } from './categorie-dto';
export interface ProduitDto {
  category?: CategorieDto;
  code?: string;
  description?: string;
  id?: number;
  nom?: string;
  prix?: number;
  stock?: number;
}
