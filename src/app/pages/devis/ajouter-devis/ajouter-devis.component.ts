import { Component } from '@angular/core';
import { FactureDto } from '../../../api/models/facture-dto';
import { ClientDto } from '../../../api/models/client-dto';
import { ProduitDto } from '../../../api/models/produit-dto';
import { LigneFactureDto } from '../../../api/models/ligne-facture-dto';
import { DevisDto } from '../../../api/models/devis-dto';
import { LigneDevisDto } from '../../../api/models/ligne-devis-dto';
import { FactureService } from '../../../services/facture/facture.service';
import { ClientService } from '../../../services/client/client.service';
import { ProduitService } from '../../../services/produit/produit.service';
import { Router } from '@angular/router';
import { DevisService } from '../../../services/devis/devis.service';

@Component({
  selector: 'app-ajouter-devis',
  templateUrl: './ajouter-devis.component.html',
  styleUrls: ['./ajouter-devis.component.css'],
})
export class AjouterDevisComponent {
  devis: DevisDto = {};
  listeClient: ClientDto[] = [];
  client: ClientDto = {};
  prixTotalProduit: number = 0;
  listProduit: ProduitDto[] = [];
  listProduitFiltrer: ProduitDto[] = [];
  codeProduit = '';
  searchProduit: ProduitDto = {};
  produitSelectedYet: Boolean = true;
  quantite: any;
  prixUtitaire: any;
  listeProduitFacture: LigneDevisDto[] = [];
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

  constructor(
    private devisService: DevisService,
    private clientService: ClientService,
    private produitService: ProduitService,
    private router: Router
  ) {}

  ngOnInit() {
    this.findAllClient();
    this.findAllProduit();
  }

  findAllClient() {
    this.clientService.findAll().subscribe((data) => {
      this.listeClient = data;
    });
  }

  findAllProduit() {
    this.produitService.findAll().subscribe((data) => {
      this.listProduit = data;
    });
  }

  selectPrdotui(p: ProduitDto) {
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
  }

  search() {
    if (this.codeProduit == '') {
      this.findAllProduit();
    }
    this.listProduitFiltrer = this.listProduit;
    this.listProduitFiltrer = this.listProduitFiltrer.filter(
      (pro) =>
        pro.code?.toLowerCase()?.startsWith(this.codeProduit.toLowerCase()) ||
        pro.nom?.startsWith(this.codeProduit.toLowerCase())
    );
  }

  ajouterProduitFacture() {
    let prix;
    if (this.searchProduit.etatRemise == true) {
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
    if (ligneFacture.produit.id == null) {
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
    this.listProduit = [];
    this.quantite = null;
    this.prixUtitaire = null;
    this.searchProduit = {};
    this.errorClient = false;
    this.errorProduit = false;
    this.errorQnt = false;
  }

  save() {
    this.devis.paymentStatus = this.isPaid;
    this.devis.client = this.client;
    this.devis.ligneDevis = this.listeProduitFacture;
    this.devisService.ajouter(this.devis).subscribe(
      (data) => {
        this.router.navigate(['devis']);
      },
      (error) => {
        this.errorMessage = error.error.errors;
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
    this.totalTTC = this.totalHT + this.totalHT * (19 / 100);
    this.listeProduitFacture = this.listeProduitFacture.filter(
      (item) => item !== p
    );
    if (this.listeProduitFacture.length == 0) {
      this.totalTTC = 0;
    }
  }
}