import styles from "./styles.module.scss";

const TdStatus = ({ status }: { status: boolean }) => {
  return (
    <div
      className={`${styles.marker} ${styles[status ? "available" : "exhausted"]}`}
    >
      <p>{status ? "En stock" : "Agotado"}</p>
    </div>
  );
};

export default TdStatus;
