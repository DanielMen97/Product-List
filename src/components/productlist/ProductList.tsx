import useContextHook from "../../hook/useContextHook";
import { formatPrice } from "../../helpers/helpers";
import { headertable } from "../../mock/mock";
import CustomCheckbox from "../customcheckbox/CustomCheckbox";
import TdStatus from "../tdstatus/TdStatus";
import styles from "./styles.module.scss";
import CustomButton from "../custombutton/CustomButton";

const ProductList = () => {
  const { state, addProduct, deleteProduct } = useContextHook();

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
                  <CustomButton
                    variant="transparent"
                    onClick={() => deleteProduct(id)}
                  >
                    <i className="fas fa-trash" style={{ color: "#DC1212" }}></i>
                  </CustomButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.menu}>
          <CustomCheckbox />
          <CustomButton onClick={addProduct}>
            Agregar Producto
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
