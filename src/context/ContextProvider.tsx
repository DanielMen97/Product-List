import { useReducer } from "react";
import { context } from "./context";
import { fnReducer } from "../reducer/reducer";
import { initialStateReducer } from "../models/reducer";

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(fnReducer, {...initialStateReducer});

  const addProduct = () => {
    dispatch({
      type: "ADD_PRODUCT",
      payload: {
        id: 0,
        name: "Celular Xiaomi P20",
        price: 560000,
        available: true,
      },
    });
  };

  const filterOnlyAvailable = (onlyAvailable: boolean) => {
    dispatch({
      type: "FILTER_ONLY_AVAILABLE",
      payload: onlyAvailable,
    });
  };

  const deleteProduct = (id: number) => {
    dispatch({
      type: "DELETE_PRODUCT",
      payload: id,
    });
  };

  const value = {
    state,
    addProduct,
    filterOnlyAvailable,
    deleteProduct,
  };

  return <context.Provider value={value}>{children}</context.Provider>;
};
