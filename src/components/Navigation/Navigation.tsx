import styles from "./Navigation.module.scss";
import Logo from "../../assets/svgs/logo-white.svg";
import Instagram from "../../assets/svgs/instagram-icon.svg";
import ListItem from "../ListItem/ListItem";
import { NavigationData } from "./NavigationData";
import Overlay from "../Overlay/Overlay";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { showModal } from "../../features/Posts/slices/modalSlice";

type NavigationProps = {
  variant: "full-width" | "decreased";
};

function Navigation({ variant }: NavigationProps) {
  const dispatch = useAppDispatch();

  const handlePostModal = () => {
    dispatch(showModal());
  };

  return (
    <aside className={styles.aside}>
      {variant == "full-width" ? (
        <Link to="/home">
          <img className={styles.logo} src={Logo} alt="Instagram Logo" />
        </Link>
      ) : (
        <Link to="/home">
          <img className={styles.logo} src={Instagram} alt="Instagram" />
        </Link>
      )}
      <ul className={styles.navigation}>
        {NavigationData.map((nav) => {
          return (
            <>
              {nav.isLinkedTo ? (
                <Link to={nav.isLinkedTo}>
                  <ListItem
                    key={nav.id}
                    variant={variant == "full-width" ? "default" : "icon-only"}
                    icon={nav.icon}
                    title={nav.title}
                    hasAvatar={nav.id === 8 ? true : false}
                    extraStyles={{
                      width: variant === "decreased" ? "fit-content" : "",
                    }}
                  />
                </Link>
              ) : (
                <ListItem
                  key={nav.id}
                  variant={variant == "full-width" ? "default" : "icon-only"}
                  icon={nav.icon}
                  title={nav.title}
                  hasAvatar={nav.id === 8 ? true : false}
                  extraStyles={{
                    width: variant === "decreased" ? "fit-content" : "",
                  }}
                  onClick={nav.id == 7 ? handlePostModal : undefined}
                  id={nav.id}
                >
                  {nav.id === 9 ? <Overlay /> : <></>}
                </ListItem>
              )}
            </>
          );
        })}
      </ul>
    </aside>
  );
}

export default Navigation;
