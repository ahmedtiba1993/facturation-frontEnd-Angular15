import { Component } from '@angular/core';
import { ClientService } from '../../services/client/client.service';
import { ProduitDto } from '../../api/models/produit-dto';
import { PageProduitDto } from '../../api/models/page-produit-dto';
import { ClientDto } from '../../api/models/client-dto';
import { PageClientDto } from '../../api/models/page-client-dto';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
})
export class ClientComponent {
  listeClients: Array<ClientDto> = [];
  pageClient: PageClientDto = {};
  currentPage: number = 0;
  pageSize: number = 10;
  isLoading: boolean = false;
  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.findAllPaginated();
  }

  findAllPaginated() {
    this.isLoading = true;
    this.clientService
      .findAllPaginated(this.currentPage, this.pageSize)
      .subscribe((page) => {
        this.pageClient = page;
        this.listeClients = page.content!;
        this.isLoading = false;
      });
  }

  onPageChange(event: any) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.findAllPaginated();
  }

  pageNumbers(): number[] {
    if (!this.pageClient) {
      return [];
    }

    const pageNumbers = [];
    for (let i = 0; i < this.pageClient.totalPages!; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  }

  protected readonly Math = Math;
}
