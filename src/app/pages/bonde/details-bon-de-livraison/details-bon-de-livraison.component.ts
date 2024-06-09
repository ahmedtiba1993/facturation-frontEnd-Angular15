import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PdfService } from '../../../services/pdf/pdf.service';
import { BondeLivraisonDto } from '../../../api/models/bonde-livraison-dto';
import { BondeLivraisonService } from '../../../services/bondeLivraison/bonde-livraison.service';

@Component({
  selector: 'app-details-bon-de-livraison',
  templateUrl: './details-bon-de-livraison.component.html',
  styleUrls: ['./details-bon-de-livraison.component.css']
})
export class DetailsBonDeLivraisonComponent {

  idBon: number = 0;
  bonLivraison: BondeLivraisonDto = {};
  isLoading = false;
  ids: Array<number> = [];

  constructor(
    private bonService: BondeLivraisonService,
    private route: ActivatedRoute,
    private pdfService: PdfService
  ) {}

  ngOnInit() {
    this.idBon = parseInt(<string>this.route.snapshot.paramMap.get('id'));
    this.findByID();
    this.ids.push(this.idBon);
  }

  findByID() {
    this.isLoading = true;
    this.bonService.findById(this.idBon).subscribe((data) => {
      this.bonLivraison = data;
      this.isLoading = false;
    });
  }

  openPDF2() {
    this.bonService.generatePdf(this.ids).subscribe((data) => {
      const file = new Blob([data], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    });
  }
}
