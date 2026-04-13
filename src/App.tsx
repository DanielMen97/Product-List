import styles from "./App.module.scss";
import ProductList from "./components/productlist/ProductList";
import { ContextProvider } from "./context/ContextProvider";

export const App = () => {
  return (
    <main className={styles.app}>
      <ContextProvider>
        <ProductList />
      </ContextProvider>
    </main>
  );
};
