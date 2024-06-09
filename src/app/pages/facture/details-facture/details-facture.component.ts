import { Component } from '@angular/core';
import {FactureService} from "../../../services/facture/facture.service";
import {ActivatedRoute} from "@angular/router";
import {FactureDto} from "../../../api/models/facture-dto";
import {PdfService} from "../../../services/pdf/pdf.service";
import jsPDF from "jspdf";
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-details-facture',
  templateUrl: './details-facture.component.html',
  styleUrls: ['./details-facture.component.css']
})
export class DetailsFactureComponent {

  idFacture : number = 0
  facture : FactureDto = {}
  isLoading = false;
  ids : Array<number> = []

  constructor(
    private factureService : FactureService,
    private route: ActivatedRoute,
    private pdfService : PdfService,
  ) {
  }

  ngOnInit() {
    this.idFacture = parseInt(<string>this.route.snapshot.paramMap.get('id'));
    this.findByID()
    this.ids.push(this.idFacture)
  }

  findByID(){
    this.isLoading = true
    this.factureService.findById(this.idFacture).subscribe(data=>{
      this.facture = data
      this.isLoading = false
    })
  }

  openPDF2() {
    this.factureService.generatePdf(this.ids).subscribe(data => {
      const file = new Blob([data], { type: 'application/pdf' });
      FileSaver.saveAs(file, 'facture.pdf');
    });
  }
}
