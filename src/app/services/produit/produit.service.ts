import { Injectable } from '@angular/core';
import {ProduitControllerService} from "../../api/services/produit-controller.service";
import {ProduitDto} from "../../api/models/produit-dto";
import {Observable} from "rxjs";
import {PageProduitDto} from "../../api/models/page-produit-dto";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(
    private produitService : ProduitControllerService
  ) { }


  add(produit : ProduitDto):Observable<ProduitDto>{
    return this.produitService.save({ body:produit});
  }

  findAllPagnated(page: number, size: number):Observable<PageProduitDto>{
    return this.produitService.findAllPaginated({page,size});
  }

  findAll():Observable<ProduitDto[]>{
    return this.produitService.findAll()
  }

  findById(idProdtuit : number):Observable<ProduitDto>{
    return this.produitService.findById({idProdtuit})
  }
}
