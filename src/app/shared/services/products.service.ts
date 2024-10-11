import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {IProduct} from "../../../types/product.interface";
import {map, Observable,
} from "rxjs";
import {IOrder} from "../../../types/order.interface";
import {environment} from "../../../environments/environment";

@Injectable({providedIn: 'root'} )
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(searchString?: string):Observable<IProduct[]> {
    let params = new HttpParams();
    if (searchString) {
      params = params.append('search', searchString);
    }
    return this.http.get<IProduct[]>(environment.apiURL + 'tea', {params})
      .pipe(
        map( products => {
          if (Array.isArray(products)) {
            return products;
          }
          return Object.values(products);
        })
      );
  }

  getProduct(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${environment.apiURL}tea?id=${id}`)
  }

  createOrder(data: IOrder): Observable<{success: number, message?: string}> {
    return this.http.post<{success: number, message?: string}>(environment.apiURL + `order-tea`, data);
  }
}
