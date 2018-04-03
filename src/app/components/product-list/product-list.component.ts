import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  data: Product[];

  constructor() {



  this.data = [

    {code: 'P100', libelle: 'cafe', prixUnitaire: 500 },
    {code: 'P200', libelle: 'The', prixUnitaire: 300 },
    {code: 'P300', libelle: 'Jus orange', prixUnitaire: 700 }

  ];


  }

  ngOnInit() {
  }

}
