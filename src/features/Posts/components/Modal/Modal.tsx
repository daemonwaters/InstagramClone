import { createPortal } from "react-dom";
import SelectMedia from "../Step/SelectMedia/SelectMedia";
import styles from "./Modal.module.scss";
import Crop from "../Step/Crop/Crop";
import Edit from "../Step/Edit/Edit";
import Final from "../Step/Final/Final";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import { FaXmark } from "react-icons/fa6";
import { closeModal } from "../../slices/modalSlice";
import { clearStepProcess } from "../../slices/stepSlice";
import { clearPostData } from "../../slices/postSlice";
import { clearEditProcess } from "../../slices/editSlice";
function Modal() {
  const steps = [<SelectMedia />, <Crop />, <Edit />, <Final />];
  const dispatch = useAppDispatch();
  const { currentStep } = useAppSelector((state) => state.step);

  const handleCloseModal = () => {
    dispatch(closeModal());
    dispatch(clearStepProcess());
    dispatch(clearPostData());
    dispatch(clearEditProcess());
  };

  return createPortal(
    <div className={styles.wrapper}>
      {steps[currentStep]}
      <FaXmark onClick={handleCloseModal} />
    </div>,
    document.getElementById("post-portal")!
  );
}

export default Modal;
