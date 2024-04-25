import styles from "./Range.module.scss";
type RangeProps = {
  title: string;
};

function Range({ title }: RangeProps) {
  return (
    <div className={styles.range}>
      <span className={styles.title}>{title}</span>
      <input type="range" name={`range-${title}`} min={0} max={100} />
      <span className={styles.value}>0</span>
    </div>
  );
}

export default Range;
