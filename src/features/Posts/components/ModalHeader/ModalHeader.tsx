import styles from "./ModalHeader.module.scss";
import ArrowBack from "../../../../assets/svgs/Arrow-back.svg";
import Button from "../../../../components/Button/Button";
import { useAppDispatch } from "../../../../hooks/reduxHooks";
import { back, forward } from "../../slices/stepSlice";
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
  const handleStepBack = () => {
    dispatch(back());
  };

  const handleStepForward = () => {
    dispatch(forward());
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
          onClick={handleStepForward}
        />
      ) : (
        <></>
      )}
    </header>
  );
}

export default ModalHeader;
