import styles from "./App.module.scss";
import ProductList from "./components/productlist/ProductList";

export const App = () => {
  return (
    <main className={styles.app}>
      <ProductList />
    </main>
  );
};
