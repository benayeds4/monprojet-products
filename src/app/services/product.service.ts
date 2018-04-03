import { Injectable } from '@angular/core';
import { Product } from '../domain/product';

@Injectable()
export class ProductService {

  constructor() { }

public getProducts(): Product[] {

return [

  {code: 'P100', libelle: 'cafe', prixUnitaire: 500 },
  {code: 'P200', libelle: 'The', prixUnitaire: 300 },
  {code: 'P300', libelle: 'Jus orange', prixUnitaire: 700 },
  {code: 'P400', libelle: 'SHIPS', prixUnitaire: 800 }
];


}

}
