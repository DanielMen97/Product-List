import useContextHook from "../../hook/useContextHook";
import { formatPrice } from "../../utils/formatters";
import { headertable } from "../../mock/mock";
import TdStatus from "../tdstatus/TdStatus";
import styles from "./styles.module.scss";
import Button from "../button/Button";
import Checkbox from "../checkbox/Checkbox";

const ProductList = () => {
  const { state, addProduct, deleteProduct, filterOnlyAvailable } = useContextHook();

  const productsFiltered = state.onlyAvailable
    ? state.products.filter((product) => product.available)
    : state.products;

  return (
    <div className={styles.productList}>
      <div className={styles.header}>
        <h1>Lista de Productos</h1>
      </div>
      <div className={styles.body}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              {headertable.map(({ id, name }) => (
                <th key={id}>{name}</th>
              ))}
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {productsFiltered.map(({ id, name, price, available }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{formatPrice(price)}</td>
                <td>
                  <TdStatus status={available} />
                </td>
                <td>
                  <Button
                    variant="transparent"
                    onClick={() => deleteProduct(id)}
                  >
                    <i className="fas fa-trash" style={{ color: "#DC1212" }}></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.menu}>
          <Checkbox text="Mostrar solo disponibles" onChange={filterOnlyAvailable} />
          <Button onClick={addProduct}>
            Agregar Producto
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
