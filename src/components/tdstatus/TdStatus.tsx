import styles from './styles.module.scss'

type StatusType = "En stock" | "Agotado"

interface TdStatusProp {
  status: StatusType
}

const TdStatus = ({status}: TdStatusProp) => {
  const isAvailable = status === "En stock" ? "available": "exhausted"
  return (
    <div className={`${styles.marker} ${styles[isAvailable]}`}>
      <p>{status}</p>
    </div>
  )
}

export default TdStatus
