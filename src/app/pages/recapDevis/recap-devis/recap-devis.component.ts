import { Component } from '@angular/core';
import { PageRecapClient } from '../../../api/models/page-recap-client';
import { FactureService } from '../../../services/facture/facture.service';
import { ClientRecapProjection } from '../../../api/models/client-recap-projection';
import { DevisService } from '../../../services/devis/devis.service';

@Component({
  selector: 'app-recap-devis',
  templateUrl: './recap-devis.component.html',
  styleUrls: ['./recap-devis.component.css'],
})
export class RecapDevisComponent {
  page: PageRecapClient = {};
  currentPage: number = 0;
  pageSize: number = 10;
  listRecap: Array<ClientRecapProjection> = [];

  isLoading = false;

  constructor(private devisService: DevisService) {}

  ngOnInit() {
    this.findAllPaginated();
  }
  findAllPaginated() {
    this.isLoading = true;
    //this.isLoading = true
    this.devisService
      .recapClient(this.currentPage, this.pageSize)
      .subscribe((page) => {
        this.page = page;
        this.listRecap = page.content!;
        this.isLoading = false;
      });
  }
  onPageChange(event: any) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.findAllPaginated();
  }

  pageNumbers(): number[] {
    if (!this.page) {
      return [];
    }

    const pageNumbers = [];
    for (let i = 0; i < this.page.totalPages!; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  }

  protected readonly Math = Math;
}
