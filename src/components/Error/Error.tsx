import styles from "./Error.module.scss";
import ErrorImg from "../../assets/imgs/error.jpg";

function Error() {
  return (
    <div className={styles.error}>
      <div className={styles.content}>
        <div>
          <h1>Error...</h1>
          <p>Sorry there was an error loading your information.</p>
        </div>
        <img src={ErrorImg} alt="Error" />
      </div>
    </div>
  );
}

export default Error;
