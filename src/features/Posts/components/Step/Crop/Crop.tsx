import styles from "./Crop.module.scss";
import ModalHeader from "../../ModalHeader/ModalHeader";
import ModalControls from "../../ModalControls/ModalControls";
import { useAppSelector } from "../../../../../hooks/reduxHooks";
function Crop() {
  const selectedMedia = useAppSelector((state) => state.step.preview_src);

  return (
    <div className={styles.wrapper}>
      <ModalHeader
        variant="withActions"
        title="Crop"
        extended={false}
        buttonTitle="Next"
      />
      <div className={styles.body}>
        <img src={selectedMedia!} alt="Image" />
        <ModalControls />
      </div>
    </div>
  );
}

export default Crop;
