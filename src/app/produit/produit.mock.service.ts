import {Injectable} from '@angular/core';
import {Produit} from '../shared/produit';

@Injectable()
export class ProduitMockService{
    private Produits: Produit[] = [];
    constructor(){
       let  p1: Produit = new Produit('Livre',50,20);
       let  p2: Produit = new Produit('Cahier',200,5.55);
       let  p3: Produit = new Produit('Stylo',50,2.30);
       this.Produits.push(p1);
       this.Produits.push(p2);
       this.Produits.push(p3);
    }

    public getProduits(): Produit[]{
        return this.Produits;
    };
}