import { Component } from '@angular/core';
import { FactureDto } from '../../../api/models/facture-dto';
import { ProduitDto } from '../../../api/models/produit-dto';
import { FactureService } from '../../../services/facture/facture.service';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from '../../../services/produit/produit.service';
import { DevisDto } from '../../../api/models/devis-dto';
import { DevisService } from '../../../services/devis/devis.service';

@Component({
  selector: 'app-modifier-devis',
  templateUrl: './modifier-devis.component.html',
  styleUrls: ['./modifier-devis.component.css'],
})
export class ModifierDevisComponent {
  idDevis: number = 0;
  devis: DevisDto = {};
  isLoading = false;
  ids: Array<number> = [];
  idLigneDevis: number = 0;
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
    private devisService: DevisService,
    private route: ActivatedRoute,
    private produitService: ProduitService
  ) {}

  ngOnInit() {
    this.idDevis = parseInt(<string>this.route.snapshot.paramMap.get('id'));
    this.findByID();
    this.ids.push(this.idDevis);
    this.findAllProduit();
  }

  findByID() {
    this.isLoading = true;
    this.devisService.findById(this.idDevis).subscribe((data) => {
      this.devis = data;
      this.isLoading = false;
    });
  }

  supprimer() {}

  setId(id: number | undefined) {
    this.idLigneDevis = id!;
  }

  delete() {
    this.isLoading = true;
    this.devisService
      .deleteFromDevis(this.idDevis, this.idLigneDevis)
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
      this.remiseP = this.devis.client?.remise;
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
      this.idDevis !== undefined &&
      this.produitP!.id !== undefined &&
      this.prixP !== undefined &&
      this.qunatiteP !== undefined &&
      this.remiseP !== undefined
    ) {
      this.devisService
        .ajouterProduit(
          this.idDevis,
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
