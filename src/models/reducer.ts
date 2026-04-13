import { products } from "../mock/mock";
import type { ProductI } from "./global";

export interface StateReducerI {
  products: ProductI[];
  nextId: number;
  onlyAvailable: boolean;
}

export const initialStateReducer: StateReducerI = {
  products: products,
  nextId: products.length,
  onlyAvailable: false,
};

export const actionReducer = {
  ADD_PRODUCT: "ADD_PRODUCT",
  FILTER_ONLY_AVAILABLE: "FILTER_ONLY_AVAILABLE",
  DELETE_PRODUCT: "DELETE_PRODUCT",
} as const;

interface UpdateAddProductActionI {
  type: typeof actionReducer.ADD_PRODUCT;
  payload: ProductI;
}

interface UpdateFilterOnlyAvailableActionI {
  type: typeof actionReducer.FILTER_ONLY_AVAILABLE;
  payload: boolean;
}

interface UpdateDeleteProductActionI {
  type: typeof actionReducer.DELETE_PRODUCT;
  payload: number;
}

export type ActionReducerDispatchI = UpdateAddProductActionI | UpdateFilterOnlyAvailableActionI | UpdateDeleteProductActionI;