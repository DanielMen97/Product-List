import styles from "./styles.module.scss";

const Checkbox = ({text, onChange}:{text:string, onChange: (check: boolean) => void}) => {

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  }

  return (
    <div className={styles.wrapper}>
      <span>✔</span>
      <input
        type="checkbox"
        id="checkbox"
        onChange={handleInputChange}
      />
      <label htmlFor="checkbox">{text}</label>
    </div>
  );
};

export default Checkbox;
