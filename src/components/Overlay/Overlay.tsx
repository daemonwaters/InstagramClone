import styles from './Overlay.module.scss';
import { overlayData } from "./OverlayData";
import ListItem from "../ListItem/ListItem";

function Overlay() {
  return (
    <ul className={styles.overlay}>
      {overlayData.map((overlay) => (
        <ListItem
          key={overlay.id}
          variant={overlay.variant}
          icon={overlay.icon}
          title={overlay.title}
        />
      ))}
    </ul>
  );
}

export default Overlay;
