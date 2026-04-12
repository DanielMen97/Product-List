import styles from "./styles.module.scss";

const CustomCheckbox = () => {
  return (
    <div className={styles.wrapper}>
      <span>✔</span>
      <input type="checkbox" id="checkbox"/>
      <label htmlFor="checkbox">Mostrar solo disponibles</label>
    </div>
  );
};

export default CustomCheckbox;