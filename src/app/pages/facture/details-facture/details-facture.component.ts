import { Component } from '@angular/core';
import {FactureService} from "../../../services/facture/facture.service";
import {ActivatedRoute} from "@angular/router";
import {FactureDto} from "../../../api/models/facture-dto";
import {PdfService} from "../../../services/pdf/pdf.service";
import jsPDF from "jspdf";
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from "pdfmake/build/vfs_fonts";

@Component({
  selector: 'app-details-facture',
  templateUrl: './details-facture.component.html',
  styleUrls: ['./details-facture.component.css']
})
export class DetailsFactureComponent {

  idFacture : number = 0
  facture : FactureDto = {}

  constructor(
    private factureService : FactureService,
    private route: ActivatedRoute,
    private pdfService : PdfService,
  ) {
  }

  ngOnInit() {
    this.idFacture = parseInt(<string>this.route.snapshot.paramMap.get('id'));
    this.findByID()
  }

  findByID(){
    this.factureService.findById(this.idFacture).subscribe(data=>{
      this.facture = data
    })
  }

  openPDF(){

      this.pdfService.downloadPDF(this.facture.reference!);
  }
}
