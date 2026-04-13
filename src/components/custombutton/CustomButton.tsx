import styles from "./styles.module.scss";
import useContextHook from "../../hook/useContextHook";

const CustomButton = () => {
  const { addProduct } = useContextHook();

  return (
    <button className={styles.custombutton} onClick={addProduct}>
      Agregar Producto
    </button>
  );
};

export default CustomButton;
