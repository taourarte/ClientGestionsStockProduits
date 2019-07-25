import { Component,OnInit} from '@angular/core';
import { FormGroup,FormBuilder,Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";


import {ProduitService} from './produit.service';
import {Produit} from '../shared/produit';

@Component({
    selector: 'app-produit',
    templateUrl: './produit.component.html',
    styleUrls: ['./produit.component.css']
})


export class ProduitComponent implements OnInit{
    
  Allproduct: Produit[];
  produitForm: FormGroup;
  operation : String = 'add'
  selectedProduct : Produit

  constructor(private produitService:ProduitService,private fb: FormBuilder,private route:ActivatedRoute){
    this.createForm();
  }
  ngOnInit(){
   
    this.inpitProduct();
    this.Allproduct = this.route.snapshot.data.produits;
  }
  loadProduit(){
    this.produitService.getProduits().subscribe(
      (data:any) => {this.Allproduct = data},
      (error :any) => {console.log(error)},
      () => {console.log('loading produits was done')}
      
    )
  }
  
  createForm(){
    this.produitForm = this.fb.group({
      ref: ['',Validators.required],
      quantite: '',
      prixUnitaire: ''
  })
  }
  addProduct(){
    const p = this.produitForm.value;
    this.produitService.addProduct(p).subscribe(
      res => {
        this.inpitProduct();
        this.loadProduit();
      }
    );
  }
  updateProduct(){
    this.produitService.addProduct({}).subscribe(
      res => {
        this.loadProduit();
      }
    );
  }
  removeProduct(){
    this.produitService.deleteProduct(this.selectedProduct.ref).subscribe(
      res => {
        this.selectedProduct= new Produit();
        this.loadProduit();
      }
    );
  }

  inpitProduct(){
    this.selectedProduct = new Produit();
  }
}