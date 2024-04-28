import styles from "./ModalHeader.module.scss";
import ArrowBack from "../../../../assets/svgs/Arrow-back.svg";
import Button from "../../../../components/Button/Button";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import { back, clearStepProcess, forward } from "../../slices/stepSlice";
import { useUpload } from "../../../../hooks/useUpload";
import { closeModal } from "../../slices/modalSlice";
import { clearPostData } from "../../slices/postSlice";
import { clearEditProcess } from "../../slices/editSlice";
type ModalHeaderProps = {
  variant: "default" | "withActions";
  title: string;
  extended: boolean;
  buttonTitle?: string;
};

function ModalHeader({
  variant,
  title,
  buttonTitle,
  extended,
}: ModalHeaderProps) {
  const dispatch = useAppDispatch();
  const upload = useUpload();
  const { currentStep } = useAppSelector((state) => state.step);
  const { postData } = useAppSelector((state) => state.post);
  const { accessId } = useAppSelector((state) => state.auth);
  const { username, avatar_url } = useAppSelector((state) => state.currentUser);
  const { activeFilter, customClass } = useAppSelector(
    (state) => state.editProcess
  );

  const handleStepBack = () => {
    dispatch(back());
  };

  const handleStepForward = () => {
    dispatch(forward());
  };

  const handlePostShare = () => {
    const postInfo = {
      authorId: accessId!,
      author: username,
      avatar: avatar_url,
      caption: postData.caption,
      editValue: {
        filter: activeFilter,
        customClass,
      },
    };
    upload({ action: "post_upload", file: postData.file!, postInfo });
    dispatch(closeModal());
    dispatch(clearStepProcess())
    dispatch(clearPostData())
    dispatch(clearEditProcess())
  };

  return (
    <header
      style={{
        width: extended ? "813px" : "473px",
        justifyContent: variant == "withActions" ? "space-between" : "center",
      }}
      className={styles.header}
    >
      {variant == "withActions" ? (
        <img onClick={handleStepBack} src={ArrowBack} alt="arrow-back" />
      ) : (
        <></>
      )}
      <span>{title}</span>
      {variant == "withActions" ? (
        <Button
          type="button"
          variant="ghost"
          title={buttonTitle ? buttonTitle : ""}
          onClick={currentStep == 3 ? handlePostShare : handleStepForward}
        />
      ) : (
        <></>
      )}
    </header>
  );
}

export default ModalHeader;
