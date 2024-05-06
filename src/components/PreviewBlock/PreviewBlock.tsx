import styles from "./PreviewBlock.module.scss";
import Button from "../Button/Button";
import Avatar, { Variants } from "../Avatar/Avatar";
import { useNavigate } from "react-router-dom";
type PreviewBlockProps = {
  variant: "profile" | "suggestion";
  avatar_url: string;
  username: string;
};

function PreviewBlock({
  variant,
  avatar_url,
  username,
}: PreviewBlockProps) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/profile/${username}`)}
      className={styles.preview}
    >
      <Avatar src={avatar_url} variant={Variants.userPreview} />
      <div className={styles.user_meta}>
        <span className={styles.username}>{username}</span>
      </div>
      {variant == "profile" ? (
        <Button type="button" variant="ghost" title="Switch" />
      ) : (
        <Button type="button" variant="ghost" title="Follow" />
      )}
    </div>
  );
}

export default PreviewBlock;
