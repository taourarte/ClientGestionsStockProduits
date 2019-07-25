import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import { ProduitService } from "./produit.service";

@Injectable()
export class ProductResolver{
    constructor(private produitService: ProduitService){

    }
  resolve(){
    return this.produitService.getProduits();
  }
}