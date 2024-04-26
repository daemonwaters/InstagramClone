import { ChangeEventHandler, useState } from "react";
import styles from "./Range.module.scss";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import {
  createCustomClass,
  mutateAdjustments,
  setFilterInteraction,
} from "../../slices/editSlice";
type RangeProps = {
  title: string;
};
function Range({ title }: RangeProps) {
  const dispatch = useAppDispatch();
  const { adjustments } = useAppSelector((state) => state.editProcess);
  const [adjustmentValue, setAdjustmentValue] = useState<null | string>(null);
  const handleAdjustmentChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch(setFilterInteraction(false));
    dispatch(mutateAdjustments({ title, value: Number(event.target.value) }));
    setAdjustmentValue(event.target.value);
    dispatch(
      createCustomClass({
        filter: `${Object.entries(adjustments)
          .map((entry) => `${entry[0]}(${entry[1]}%)`)
          .join(" ")}`,
      })
    );
  };
  return (
    <div className={styles.range}>
      <span className={styles.title}>{title}</span>
      <input
        onChange={handleAdjustmentChange}
        type="range"
        name={`range-${title}`}
        min={0}
        max={100}
      />
      <span className={styles.value}>{adjustmentValue}</span>
    </div>
  );
}

export default Range;
