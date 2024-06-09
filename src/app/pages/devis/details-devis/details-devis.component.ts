import { Component } from '@angular/core';
import { FactureDto } from '../../../api/models/facture-dto';
import { FactureService } from '../../../services/facture/facture.service';
import { ActivatedRoute } from '@angular/router';
import { PdfService } from '../../../services/pdf/pdf.service';
import { DevisDto } from '../../../api/models/devis-dto';
import { DevisService } from '../../../services/devis/devis.service';

@Component({
  selector: 'app-details-devis',
  templateUrl: './details-devis.component.html',
  styleUrls: ['./details-devis.component.css'],
})
export class DetailsDevisComponent {
  idDevis: number = 0;
  devis: DevisDto = {};
  isLoading = false;
  ids: Array<number> = [];

  constructor(
    private devisService: DevisService,
    private route: ActivatedRoute,
    private pdfService: PdfService
  ) {}

  ngOnInit() {
    this.idDevis = parseInt(<string>this.route.snapshot.paramMap.get('id'));
    this.findByID();
    this.ids.push(this.idDevis);
  }

  findByID() {
    this.isLoading = true;
    this.devisService.findById(this.idDevis).subscribe((data) => {
      this.devis = data;
      this.isLoading = false;
    });
  }

  openPDF2() {
    this.devisService.generatePdf(this.ids).subscribe((data) => {
      const file = new Blob([data], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    });
  }
}
