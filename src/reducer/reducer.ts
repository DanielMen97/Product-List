import { type ActionReducerDispatchI, type StateReducerI, actionReducer } from "../models/reducer";

export const fnReducer = (state: StateReducerI, action: ActionReducerDispatchI): StateReducerI => {
  switch (action.type) {
    case actionReducer.ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, {...action.payload, id: state.nextId}],
        nextId: state.nextId++,
      };
    case actionReducer.FILTER_ONLY_AVAILABLE:
      return {
        ...state,
        onlyAvailable: action.payload,
      };
    case actionReducer.DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((product) => product.id !== action.payload),
      };
    default:
      return state;
  }
}