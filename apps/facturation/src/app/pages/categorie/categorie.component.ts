import { Component } from '@angular/core';
import { CategorieService } from '../../services/categorie/categorie.service';
import { CategorieDto } from '../../api/models/categorie-dto';
import { PageProduitDto } from '../../api/models/page-produit-dto';
import { PageCategorieDto } from '../../api/models/page-categorie-dto';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css'],
})
export class CategorieComponent {
  listCategorie: Array<CategorieDto> = [];
  pageCategorie: PageCategorieDto = {};
  currentPage: number = 0;
  pageSize: number = 10;
  constructor(private categorieService: CategorieService) {}

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.categorieService
      .findAllPaginated(this.currentPage, this.pageSize)
      .subscribe((data) => {
        this.pageCategorie = data;
        this.listCategorie = data.content!;
      });
  }
  onPageChange(event: any) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.findAll();
  }

  pageNumbers(): number[] {
    if (!this.pageCategorie) {
      return [];
    }

    const pageNumbers = [];
    for (let i = 0; i < this.pageCategorie.totalPages!; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  }

  protected readonly Math = Math;
}
