import { ActionReducerMap } from '@ngrx/store';
import { productReducer } from './product.reducer';
import { ProductState } from './product.reducer';

// Define the lobal application state
export interface AppState {
  products: ProductState;
}

// Create an ActionReducerMap which maps the slices of the global state to their respective reducers
export const reducers: ActionReducerMap<AppState> = {
  products: productReducer,
};
