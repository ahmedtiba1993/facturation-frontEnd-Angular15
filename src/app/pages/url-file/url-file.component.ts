import { Component, OnInit } from '@angular/core';
import { UrlFileService } from '../../services/urlFile/url-file.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FactureDto } from '../../api/models/facture-dto';
import * as FileSaver from 'file-saver';
import { DevisDto } from '../../api/models/devis-dto';
import { BondeLivraisonDto } from '../../api/models/bonde-livraison-dto';

@Component({
  selector: 'app-url-file',
  templateUrl: './url-file.component.html',
  styleUrls: ['./url-file.component.css']
})
export class UrlFileComponent implements OnInit {

  uuid: string = '';
  facture: FactureDto = {};
  devis: DevisDto = {} ;
  bonLivraison: BondeLivraisonDto = {};
  isLoading = false;
  ids: Array<number> = [];

  constructor(
    private urlFileService: UrlFileService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.uuid = this.route.snapshot.paramMap.get('uuid') as string;
    this.findByID();
  }

  findByID() {
    this.isLoading = true;
    this.urlFileService.getFacture(this.uuid).subscribe(data => {
      this.facture = data.factureDto!;
      this.devis = data.devisDto!;
      this.isLoading = false;
    });
  }
}
