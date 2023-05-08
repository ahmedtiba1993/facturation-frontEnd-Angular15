import { Injectable } from '@angular/core';
import { CategorieControllerService } from '../../api/services/categorie-controller.service';
import { CategorieDto } from '../../api/models/categorie-dto';
import { Observable } from 'rxjs';
import { PageCategorieDto } from '../../api/models/page-categorie-dto';

@Injectable({
  providedIn: 'root',
})
export class CategorieService {
  constructor(private categorieService: CategorieControllerService) {}

  add(categorie: CategorieDto): Observable<CategorieDto> {
    return this.categorieService.save3({ body: categorie });
  }

  findAllPaginated(page: number, size: number): Observable<PageCategorieDto> {
    return this.categorieService.findAllPaginated2({ page, size });
  }

  findAll(): Observable<CategorieDto[]> {
    return this.categorieService.findAll3();
  }
}
