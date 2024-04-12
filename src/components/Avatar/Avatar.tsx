import styles from "./Avatar.module.scss";

export enum Variants {
  navigation = "24",
  profile = "150",
  story = "66",
  userPreview = "42",
  inboxRow = "56",
  inboxHeader = "44",
  msg = "28",
}

type AvatarProps = {
  src: string;
  variant: Variants;
};

function Avatar({ src, variant }: AvatarProps) {
  const style = {
    width: `${variant}px`,
    height: `${variant}px`,
  };

  return (
    <div className={styles.avatar}>
      <img src={src} style={style} alt="user avatar" />
    </div>
  );
}

export default Avatar;
