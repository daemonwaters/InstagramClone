import styles from './FeedLoading.module.scss';
import Spinner from '../../../../assets/svgs/spinner.svg';

function FeedLoading() {
  return (
    <div className={styles.spinner}>
        <img src={Spinner} alt="Loading" />
        <span>Loading</span>
    </div>
  )
}

export default FeedLoading