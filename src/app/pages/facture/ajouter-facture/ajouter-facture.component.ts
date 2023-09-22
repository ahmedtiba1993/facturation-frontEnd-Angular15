import { Component } from '@angular/core';
import { FactureService } from '../../../services/facture/facture.service';
import { FactureDto } from '../../../api/models/facture-dto';
import { ClientDto } from '../../../api/models/client-dto';
import { ClientService } from '../../../services/client/client.service';
import { ProduitDto } from '../../../api/models/produit-dto';
import { ProduitService } from '../../../services/produit/produit.service';
import { LigneFactureDto } from '../../../api/models/ligne-facture-dto';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-ajouter-facture',
  templateUrl: './ajouter-facture.component.html',
  styleUrls: ['./ajouter-facture.component.css'],
})
export class AjouterFactureComponent {
  facture: FactureDto = {};
  listeClient: ClientDto[] = [];
  client: ClientDto = {};
  listProduit: ProduitDto[] = [];
  codeProduit = '';
  searchProduit?: ProduitDto = {};
  quantite: any;
  prixUtitaire: any;
  listeProduitFacture: LigneFactureDto[] = [];
  isPaid = false;
  tva: number = 19;
  timbre: number = 1;
  totalHT: number = 0;
  totalTTC: number = 0;
  errorMessage: Array<string> = [];
  errorClient = false;
  errorProduit: boolean = false;
  errorQnt: boolean = false;
  remise: number = 0;
  searchErreur = false;
  clientErreur = false;
  isButtonLoading = false;
  isClientDivLoader = false;
  isProduitDivLoader = false;

  constructor(
    private factureService: FactureService,
    private clientService: ClientService,
    private produitService: ProduitService,
    private router: Router
  ) {}

  ngOnInit() {
    this.findAllClient();
    this.findAllProduit();
  }

  findAllClient() {
    this.isClientDivLoader = true;
    this.clientService.findAll().subscribe((data) => {
      this.listeClient = data;
      this.isClientDivLoader = false;
    });
  }

  findAllProduit() {
    this.isProduitDivLoader = true;
    this.produitService.findAll().subscribe((data) => {
      this.listProduit = data;
      this.isProduitDivLoader = false;
    });
  }

  ajouterProduitFacture() {
    if (this.searchErreur || this.searchProduit == null) {
      return;
    }
    let prix;
    if (this.searchProduit!.etatRemise == true) {
      prix =
        this.prixUtitaire * this.quantite -
        this.prixUtitaire * this.quantite * (this.remise! / 100);
    } else {
      prix = this.prixUtitaire * this.quantite;
    }
    let ligneFacture = {
      produit: this.searchProduit,
      quantite: this.quantite,
      prixUnitaire: this.prixUtitaire,
      prixTotal: prix,
      remise: this.remise,
    };
    if (this.client.id == null) {
      this.errorClient = true;
    } else {
      this.errorClient = false;
    }
    if (ligneFacture.produit!.id == null) {
      this.errorProduit = true;
    } else {
      this.errorProduit = false;
    }
    if (ligneFacture.quantite == null || ligneFacture.quantite < 0) {
      this.errorQnt = true;
    } else {
      this.errorQnt = false;
    }
    if (
      this.errorProduit == true ||
      this.errorClient == true ||
      this.errorQnt == true
    ) {
      return;
    }
    let ligneProduitTrouve: LigneFactureDto = {};
    this.listeProduitFacture.forEach((lnFact) => {
      if (
        JSON.stringify(lnFact.produit) === JSON.stringify(ligneFacture.produit)
      ) {
        ligneProduitTrouve = lnFact;
      }
    });
    if (ligneProduitTrouve.produit != null) {
      ligneProduitTrouve.quantite =
        Number(ligneProduitTrouve.quantite) + Number(ligneFacture.quantite);
      ligneProduitTrouve.prixTotal =
        ligneProduitTrouve.prixTotal! +
        ligneProduitTrouve.prixUnitaire! * ligneFacture.quantite;
      this.totalHT = this.totalHT + ligneFacture.prixTotal;
      this.totalTTC = this.totalHT + this.totalHT * (19 / 100);
    } else {
      this.listeProduitFacture.push(ligneFacture);
      this.totalHT = this.totalHT + ligneFacture.prixTotal;
      this.totalTTC = this.totalHT + this.totalHT * (19 / 100);
    }

    this.codeProduit = '';
    this.quantite = null;
    this.prixUtitaire = null;
    this.searchProduit = {};
    this.errorClient = false;
    this.errorProduit = false;
    this.errorQnt = false;
  }

  save() {
    this.isButtonLoading = true;
    this.facture.paymentStatus = this.isPaid;
    this.facture.client = this.client;
    this.facture.lignesFacture = this.listeProduitFacture;
    this.factureService.ajouter(this.facture).subscribe(
      (data) => {
        this.router.navigate(['facture']);
      },
      (error) => {
        this.errorMessage = error.error.errors;
        this.isButtonLoading = false;
      }
    );
  }

  handleChangeTrue() {
    this.isPaid = true;
    console.log(this.isPaid);
  }
  handleChangeFalse() {
    this.isPaid = false;
    console.log(this.isPaid);
  }

  supprimerProdui(p: LigneFactureDto) {
    this.totalHT = this.totalHT - p.prixTotal!;
    this.totalTTC = this.totalHT + this.totalHT * (this.tva / 100);
    this.listeProduitFacture = this.listeProduitFacture.filter(
      (item) => item !== p
    );
    if (this.listeProduitFacture.length == 0) {
      this.totalTTC = 0;
    }
  }

  afficher() {
    if (this.codeProduit === '' || this.codeProduit === null) {
      this.prixUtitaire = null;
      this.quantite = null;
      this.remise = this.client.remise!;
      this.clientErreur = false;
      this.searchErreur = false;
      return;
    }
    if (this.client === null || Object.keys(this.client).length === 0) {
      this.clientErreur = true;
      return;
    } else {
      this.clientErreur = false;
    }
    this.searchProduit = this.listProduit.find(
      (p) => p.code === this.codeProduit
    );
    if (this.searchProduit) {
      this.searchErreur = false;
      this.errorProduit = false;
      this.errorQnt = false;
      this.quantite = 1;
      this.prixUtitaire = this.searchProduit!.prix;
      this.remise = this.client.remise!;
    } else {
      this.searchErreur = true;
    }
  }
  /*selectPrdotui(p: ProduitDto) {
    this.searchProduit = p;
    this.produitSelectedYet = true;
    this.codeProduit = p.code!;
    this.listProduitFiltrer = [];
    this.prixUtitaire = p.prix;
    this.quantite = 1;
    if (p.etatRemise) {
      this.remise = this.client.remise!;
    } else {
      this.remise = 0;
    }
  }*/
}
