import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from '../service/product.service';
import { addProduct, addProductSuccess, loadProducts, loadProductsSuccess } from './product.action';
import { mergeMap, map } from 'rxjs/operators';
import { inject } from '@angular/core';

@Injectable()
export class ProductEffects {
  private actions = inject(Actions);
  private productService = inject(ProductService);

  // Load Products Effect
  loadProducts = createEffect(() =>
    this.actions.pipe(
      ofType(loadProducts),
      mergeMap(() =>
        this.productService.getProducts().pipe(
          map(products => loadProductsSuccess({ products }))
        )
      )
    )
  );

  // Add Product Effect
  addProduct = createEffect(() =>
    this.actions.pipe(
      ofType(addProduct),
      mergeMap(action =>
        this.productService.addProduct(action.product).pipe(
          map(product => addProductSuccess({ product }))
        )
      )
    )
  );
}
