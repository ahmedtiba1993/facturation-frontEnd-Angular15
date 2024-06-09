import { Component } from '@angular/core';
import { ProduitDto } from '../../../api/models/produit-dto';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from '../../../services/produit/produit.service';
import { BondeLivraison } from '../../../api/models/bonde-livraison';
import { BondeLivraisonService } from '../../../services/bondeLivraison/bonde-livraison.service';
import { BondeLivraisonDto } from '../../../api/models/bonde-livraison-dto';

@Component({
  selector: 'app-modifier-bon-de-livraison',
  templateUrl: './modifier-bon-de-livraison.component.html',
  styleUrls: ['./modifier-bon-de-livraison.component.css']
})
export class ModifierBonDeLivraisonComponent {
  idBon: number = 0;
  bondeLivraison: BondeLivraisonDto = {};
  isLoading = false;
  ids: Array<number> = [];
  idLigneBon: number = 0;
  listProduit: ProduitDto[] = [];

  produitP?: ProduitDto = {};
  codeP: any;
  prixP: any;
  qunatiteP: any;
  remiseP: any;

  searchErreur = false;
  prixErreur: boolean = false;
  quantiteErreur: boolean = false;
  remiseErreur: boolean = false;

  constructor(
    private bondeLivraisonService: BondeLivraisonService,
    private route: ActivatedRoute,
    private produitService: ProduitService
  ) {}

  ngOnInit() {
    this.idBon = parseInt(<string>this.route.snapshot.paramMap.get('id'));
    this.findByID();
    this.ids.push(this.idBon);
    this.findAllProduit();
  }

  findByID() {
    this.isLoading = true;
    this.bondeLivraisonService.findById(this.idBon).subscribe((data) => {
      this.bondeLivraison = data;
      console.log(this.bondeLivraison)

      this.isLoading = false;
    });
  }

  supprimer() {}

  setId(id: number | undefined) {
    this.idLigneBon = id!;
  }

  delete() {
    this.isLoading = true;
    this.bondeLivraisonService
      .deleteFromBonde(this.idBon, this.idLigneBon)
      .subscribe((data) => {
        this.findByID();
      });
  }

  findAllProduit() {
    this.produitService.findAll().subscribe((data) => {
      this.listProduit = data;
    });
  }

  afficher() {
    this.produitP = this.listProduit.find((p) => p.code === this.codeP);
    if (this.produitP) {
      this.searchErreur = false;
      this.qunatiteP = 1;
      this.prixP = this.produitP!.prix;
      this.remiseP = this.bondeLivraison.client?.remise;
    } else {
      this.searchErreur = true;
    }
  }

  ajouter() {
    if (this.codeP == null || !this.produitP) {
      this.searchErreur = true;
    } else {
      this.searchErreur = false;
    }
    if (this.prixP == null || this.prixP < 0) {
      this.prixErreur = true;
    } else {
      this.prixErreur = false;
    }
    if (this.qunatiteP == null || this.qunatiteP < 1) {
      this.quantiteErreur = true;
    } else {
      this.quantiteErreur = false;
    }
    if (this.remiseP == null || this.remiseP < 0) {
      this.remiseErreur = true;
    } else {
      this.remiseErreur = false;
    }

    if (this.remiseErreur || this.quantiteErreur || this.prixErreur) {
      return;
    }
    if (
      this.idBon !== undefined &&
      this.produitP!.id !== undefined &&
      this.prixP !== undefined &&
      this.qunatiteP !== undefined &&
      this.remiseP !== undefined
    ) {
      this.bondeLivraisonService
        .ajouterProduit(
          this.idBon,
          this.produitP!.id,
          this.prixP,
          this.qunatiteP,
          this.remiseP
        )
        .subscribe((data) => {
          this.produitP = {};
          this.codeP = null;
          this.prixP = null;
          this.qunatiteP = null;
          this.remiseP = null;
          this.findByID();
        });
    } else {
      // Handle the case where any of the required values are undefined
      console.error('One or more values are undefined');
    }
  }
}
