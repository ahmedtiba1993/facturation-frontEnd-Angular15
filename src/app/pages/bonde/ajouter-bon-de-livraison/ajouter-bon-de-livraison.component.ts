import { Component } from '@angular/core';
import { ClientDto } from '../../../api/models/client-dto';
import { ProduitDto } from '../../../api/models/produit-dto';
import { ClientService } from '../../../services/client/client.service';
import { ProduitService } from '../../../services/produit/produit.service';
import { Router } from '@angular/router';
import { BondeLivraisonDto } from '../../../api/models/bonde-livraison-dto';
import { LigneBondeLivraisonDto } from '../../../api/models/ligne-bonde-livraison-dto';
import { BondeLivraisonService } from '../../../services/bondeLivraison/bonde-livraison.service';
import { BondeLivraison } from '../../../api/models/bonde-livraison';

@Component({
  selector: 'app-ajouter-bon-de-livraison',
  templateUrl: './ajouter-bon-de-livraison.component.html',
  styleUrls: ['./ajouter-bon-de-livraison.component.css']
})
export class AjouterBonDeLivraisonComponent {

  bonDeLivraison: BondeLivraison = {};
  listeClient: ClientDto[] = [];
  client: ClientDto = {};
  listProduit: ProduitDto[] = [];
  codeProduit = '';
  searchProduit?: ProduitDto = {};
  quantite: any;
  prixUtitaire: any;
  listeProduitBonDeLivraison: LigneBondeLivraisonDto[] = [];
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
    private bondeLivraisonService: BondeLivraisonService,
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

  ajouterProduitBonDeLivraison() {
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
    let ligneBonDeLivraison = {
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
    if (ligneBonDeLivraison.produit!.id == null) {
      this.errorProduit = true;
    } else {
      this.errorProduit = false;
    }
    if (ligneBonDeLivraison.quantite == null || ligneBonDeLivraison.quantite < 0) {
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
    let ligneProduitTrouve: LigneBondeLivraisonDto = {};
    this.listeProduitBonDeLivraison.forEach((lnFact) => {
      if (
        JSON.stringify(lnFact.produit) === JSON.stringify(ligneBonDeLivraison.produit)
      ) {
        ligneProduitTrouve = lnFact;
      }
    });
    if (ligneProduitTrouve.produit != null) {
      ligneProduitTrouve.quantite =
        Number(ligneProduitTrouve.quantite) + Number(ligneBonDeLivraison.quantite);
      ligneProduitTrouve.prixTotal =
        ligneProduitTrouve.prixTotal! +
        ligneProduitTrouve.prixUnitaire! * ligneBonDeLivraison.quantite;
      this.totalHT = this.totalHT + ligneBonDeLivraison.prixTotal;
      this.totalTTC = this.totalHT + this.totalHT * (19 / 100);
    } else {
      this.listeProduitBonDeLivraison.push(ligneBonDeLivraison);
      this.totalHT = this.totalHT + ligneBonDeLivraison.prixTotal;
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
    this.bonDeLivraison.client = this.client;
    this.bonDeLivraison.ligneBondeLivraisons = this.listeProduitBonDeLivraison;
    this.bondeLivraisonService.ajouter(this.bonDeLivraison).subscribe(
      (data) => {
        this.router.navigate(['devis']);
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

  supprimerProdui(p: LigneBondeLivraisonDto) {
    this.totalHT = this.totalHT - p.prixTotal!;
    this.totalTTC = this.totalHT + this.totalHT * (this.tva / 100);
    this.listeProduitBonDeLivraison = this.listeProduitBonDeLivraison.filter(
      (item) => item !== p
    );
    if (this.listeProduitBonDeLivraison.length == 0) {
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
      this.remise = this.searchProduit.etatRemise ? this.client.remise! : 0;
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
