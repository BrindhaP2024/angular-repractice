import { createReducer, on } from '@ngrx/store';
import { Product } from '../../model/product.model';
import { addProductSuccess, loadProductsSuccess } from './product.action';

export interface ProductState {
  products: Product[];
}
export const initialState: ProductState = {
  products: []
};
export const productReducer = createReducer(
  initialState,
  on(loadProductsSuccess, (state, { products }) => ({    ...state,products
  })),
  on(addProductSuccess, (state, { product }) => ({...state, products: [...state.products, product]
  }))
);
