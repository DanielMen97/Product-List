import type { StateReducerI } from './reducer';

export interface ContextI {
  state: StateReducerI;
  addProduct: () => void;
  filterOnlyAvailable: (onlyAvailable: boolean) => void;
  deleteProduct: (id: number) => void;  
}

export const contextDefault: ContextI = {
  state: { products: [], onlyAvailable: false },
  addProduct: () => {},
  filterOnlyAvailable: () => {},
  deleteProduct: () => {}
};