import styles from "./ModalControls.module.scss";
import Scale from "../../../../assets/svgs/Scale.svg";
import Zoom from '../../../../assets/svgs/Zoom.svg';
import Duplicate from '../../../../assets/svgs/Duplicate.svg';

function ModalControls() {
  return (
    <div className={styles.controls}>
      <span>
        <img src={Scale} alt="scale" />
      </span>
      <span>
        <img src={Zoom} alt="zoom" />
      </span>
      <span>
        <img src={Duplicate} alt="duplicate" />
      </span>
    </div>
  );
}

export default ModalControls;
