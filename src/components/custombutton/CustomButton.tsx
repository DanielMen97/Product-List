import styles from "./styles.module.scss";

interface Props {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "transparent";
  onClick: () => void;
}

const CustomButton = ({children, variant = "primary", onClick}: Props) => {

  return (
    <button className={`${styles.custombutton} ${styles[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default CustomButton;
