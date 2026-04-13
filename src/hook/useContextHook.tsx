import React from "react";
import { context } from "../context/context";

const useContextHook = () => {
  const data = React.useContext(context);

  return data;
};

export default useContextHook;
