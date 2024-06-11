import { Component, Input } from '@angular/core';
import { FactureDto } from '../../../api/models/facture-dto';
import { UrlFileService } from '../../../services/urlFile/url-file.service';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-facture-ui',
  templateUrl: './facture-ui.component.html',
  styleUrls: ['./facture-ui.component.css']
})
export class FactureUiComponent {

  @Input() facture : FactureDto = {}

  constructor(
    private urlFileService: UrlFileService,
  ) {
  }

  openPDF2() {
    this.urlFileService.generatePdf(this.facture.id!, "facture").subscribe(data => {
      const file = new Blob([data], { type: 'application/pdf' });
      FileSaver.saveAs(file, 'Facture-' + this.facture.reference + '.pdf');
    });
  }
}
