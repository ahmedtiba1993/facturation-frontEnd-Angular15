import { Component, OnInit } from '@angular/core';
import { UrlFileService } from '../../services/urlFile/url-file.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FactureDto } from '../../api/models/facture-dto';
import * as FileSaver from 'file-saver';
import { FactureService } from '../../services/facture/facture.service';

@Component({
  selector: 'app-url-file',
  templateUrl: './url-file.component.html',
  styleUrls: ['./url-file.component.css']
})
export class UrlFileComponent implements OnInit {

  uuid : string = ""
  facture : FactureDto = {}
  isLoading = false;
  ids : Array<number> = []

  constructor(
    private urlFileService: UrlFileService,
    private route: ActivatedRoute,
    private factureService : FactureService,
  ) {
  }

  ngOnInit() {
    this.uuid = this.route.snapshot.paramMap.get('uuid') as string;
    this.findByID();
    console.log(this.facture)
  }

  findByID(){
    this.isLoading = true
    this.urlFileService.getFacture(this.uuid).subscribe(data=>{
      this.facture = data
      this.isLoading = false
    })
  }

  openPDF2() {
    this.isLoading = true
    this.urlFileService.generatePdf(this.facture.id!).subscribe(data => {
      const file = new Blob([data], { type: 'application/pdf' });
      FileSaver.saveAs(file, "facture-"+this.facture.reference+'.pdf');
    });
    this.isLoading = false
  }
}
