import { Component, Input } from '@angular/core';
import { DevisDto } from '../../../api/models/devis-dto';
import { UrlFileService } from '../../../services/urlFile/url-file.service';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-devis-ui',
  templateUrl: './devis-ui.component.html',
  styleUrls: ['./devis-ui.component.css']
})
export class DevisUiComponent {

  @Input() devis: DevisDto = {};

  constructor(
    private urlFileService: UrlFileService,
  ) {
  }

  openPDF2() {
    this.urlFileService.generatePdf(this.devis.id!, "devis").subscribe(data => {
      const file = new Blob([data], { type: 'application/pdf' });
      FileSaver.saveAs(file, 'devis-' + this.devis.reference + '.pdf');
    });
  }
}
