import { Component } from '@angular/core';
import {FactureService} from "../../services/facture/facture.service";
import {ClientService} from "../../services/client/client.service";
import {Statistique} from "../../api/models/statistique";

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent {

  statistique : Statistique = {}
  isLoading: boolean = true;
  constructor(
    private factureService : FactureService,
  ) {
  }

  ngOnInit(){
    this.get()
  }

  get(){
    this.factureService.getStatistique().subscribe(data=>{
      this.statistique = data
      this.isLoading = false
    })
  }
}
