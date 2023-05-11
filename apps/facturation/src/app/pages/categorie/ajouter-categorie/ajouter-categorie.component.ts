import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategorieDto } from '../../../api/models/categorie-dto';
import { CategorieService } from '../../../services/categorie/categorie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-categorie',
  templateUrl: './ajouter-categorie.component.html',
  styleUrls: ['./ajouter-categorie.component.css'],
})
export class AjouterCategorieComponent {
  categorie: CategorieDto = {};
  errorMessage: Array<string> = [];

  constructor(
    private categorieServie: CategorieService,
    private router: Router
  ) {}

  ajouter() {
    this.categorieServie.add(this.categorie).subscribe(
      (data) => {
        this.router.navigate(['categorie']);
      },
      (error) => {
        this.errorMessage = error.error.errors;
      }
    );
  }
}
