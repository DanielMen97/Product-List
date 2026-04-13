import styles from "./styles.module.scss";
import useContextHook from "../../hook/useContextHook";

const CustomCheckbox = () => {
  const { filterOnlyAvailable } = useContextHook();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    filterOnlyAvailable(e.target.checked);
  }

  return (
    <div className={styles.wrapper}>
      <span>✔</span>
      <input
        type="checkbox"
        id="checkbox"
        onChange={handleInputChange}
      />
      <label htmlFor="checkbox">Mostrar solo disponibles</label>
    </div>
  );
};

export default CustomCheckbox;
