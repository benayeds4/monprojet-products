import { Injectable } from '@angular/core';
import { Product } from '../domain/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {

url  = 'http://127.0.0.1:3000/products';

  constructor(private http: HttpClient) { }

public getProducts( ): Observable <Product[]> {

  return this.http.get<Product[]>(this.url) ;

}

}
