import ModalHeader from "../../ModalHeader/ModalHeader";
import styles from "./SelectMedia.module.scss";
import Gallery from "../../../../../assets/svgs/gallery.svg";
import Button from "../../../../../components/Button/Button";
import { ChangeEventHandler } from "react";
import { useAppDispatch } from "../../../../../hooks/reduxHooks";
import { setFile } from "../../../slices/stepSlice";

function SelectMedia() {
  const dispatch = useAppDispatch();

  const handleInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    const selectedFile = event.target.files?.item(0) as File;
    const previewSrc = URL.createObjectURL(selectedFile);
    dispatch(setFile({ file: selectedFile, preview_src: previewSrc }));
  };

  return (
    <div className={styles.wrapper}>
      <ModalHeader variant="default" title="Create new post" extended={false} />
      <div className={styles.body}>
        <img src={Gallery} alt="Gallery icon" />
        <span className={styles.modal_body_text}>
          Drag photos and videos here
        </span>
        <div className={styles.input_wrapper}>
          <input
            type="file"
            name="media-select"
            id="media-select"
            onChange={handleInput}
          />
          <Button
            variant="primary"
            title="Select From Computer"
            type="button"
          />
        </div>
      </div>
    </div>
  );
}

export default SelectMedia;
