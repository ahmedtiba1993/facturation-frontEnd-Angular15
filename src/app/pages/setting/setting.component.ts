import { Component } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { TimbreFiscalDto } from '../../api/models/timbre-fiscal-dto';
import { SettingService } from '../../services/setting/setting.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css'],
})
export class SettingComponent {
  timbre: number = 0;
  tva: number = 0;
  numFacture: number = 0;

  alertTvaSuccess = false;
  alertTvaError = false;

  alertTimbreSuccess = false;
  alertTimbreError = false;

  alertNumFactureSuccess = false;
  alertNumFactureError = false;

  constructor(private settingService: SettingService) {}

  ngOnInit() {
    this.getTimreFiscal();
    this.getTva();
    this.getNumFacture();
  }

  getTimreFiscal() {
    this.settingService.getTimbre().subscribe((data) => {
      this.timbre = data.montant!;
    });
  }

  updateTimbre() {
    this.settingService.updateTimbre(this.timbre).subscribe((data) => {
      if (data['success']) {
        this.alertTimbreSuccess = true;
        this.alertTimbreError = false;
      } else {
        this.alertTimbreSuccess = false;
        this.alertTimbreError = true;
      }
    });
  }

  getTva() {
    this.settingService.getTva().subscribe((data) => {
      this.tva = data.tva!;
    });
  }

  updateTva() {
    this.settingService.updateTva(this.tva).subscribe((data) => {
      if (data['success']) {
        this.alertTvaSuccess = true;
        this.alertTvaError = false;
      } else {
        this.alertTvaSuccess = false;
        this.alertTvaError = true;
      }
    });
  }

  getNumFacture() {
    this.settingService.getNumFacture().subscribe((data) => {
      this.numFacture = data.numFacture!;
    });
  }

  updateNumFacture() {
    this.settingService.updateNumFacture(this.numFacture).subscribe((data) => {
      if (data['success']) {
        this.alertNumFactureSuccess = true;
        this.alertNumFactureError = false;
      } else {
        this.alertNumFactureSuccess = false;
        this.alertNumFactureError = true;
      }
    });
  }
}
