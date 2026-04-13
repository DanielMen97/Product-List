import { createContext } from "react";
import { type ContextI, contextDefault} from "../models/context";

export const context = createContext<ContextI>({...contextDefault});
