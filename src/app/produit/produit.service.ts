import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


import {API_URLS} from '../config/api.url.config';
import {Produit} from '../shared/produit';

@Injectable()
export class ProduitService{
    constructor(private http: HttpClient){

    }


    getProduits(): Observable<any>{
       return this.http.get(API_URLS.PRODUITS_URLS);
    }

    addProduct(produit: Produit): Observable<any>{
        return this.http.post(API_URLS.PRODUITS_URLS, produit);
     } 
    

     updateProduct(produit: Produit): Observable<any>{
        return this.http.get(API_URLS.PRODUITS_URLS, produit);
     } 

     deleteProduct(ref : String): Observable<any>{
        return this.http.get(API_URLS.PRODUITS_URLS+`/${ref}`);
     } 



}