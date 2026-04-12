import { formatPrice } from "../../helpers/helpers";
import { headertable, products } from "../../mock/mock";
import CustomCheckbox from "../customcheckbox/CustomCheckbox";
import TdStatus from "../tdstatus/TdStatus";
import styles from "./styles.module.scss";

const ProductList = () => {
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
            {products.map(({ id, name, price, available }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{formatPrice(price)}</td>
                <td>
                  <TdStatus status={available} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.menu}>
            <CustomCheckbox />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
