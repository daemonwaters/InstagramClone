import styles from "./Navigation.module.scss";
import Logo from "../../assets/svgs/logo-white.svg";
import Instagram from "../../assets/svgs/instagram-icon.svg";
import ListItem from "../ListItem/ListItem";
import { NavigationData } from "./NavigationData";
import Overlay from "../Overlay/Overlay";

type NavigationProps = {
  variant: "full-width" | "decreased";
};

function Navigation({ variant }: NavigationProps) {
  return (
    <aside className={styles.aside}>
      {variant == "full-width" ? (
        <img className={styles.logo} src={Logo} alt="Instagram Logo" />
      ) : (
        <img className={styles.logo} src={Instagram} alt="Instagram" />
      )}
      <ul className={styles.navigation}>
        {NavigationData.map((nav) => (
          <ListItem
            key={nav.id}
            variant={variant == "full-width" ? "default" : "icon-only"}
            icon={nav.icon}
            title={nav.title}
            hasAvatar={nav.id === 8 ? true : false}
            extraStyles={{
              width: variant === "decreased" ? "fit-content" : "",
            }}
          >
            {nav.id === 9 ? <Overlay /> : <></>}
          </ListItem>
        ))}
      </ul>
    </aside>
  );
}

export default Navigation;
