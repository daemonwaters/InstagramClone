import styles from "./Actions.module.scss";
import Heart from "../../../../assets/svgs/heart.svg";
import HeartActive from "../../../../assets/svgs/heart-red.svg";
import Comment from "../../../../assets/svgs/comment.svg";
import Direct from "../../../../assets/svgs/direct.svg";
import Bookmark from "../../../../assets/svgs/bookmark.svg";
import { useState } from "react";
type ActionProps = {
  extraStyles?: {};
  likeHandler: () => void;
  unlikeHandler: () => void;
  didLike: boolean;
};

function Actions({
  unlikeHandler,
  likeHandler,
  extraStyles = {},
  didLike,
}: ActionProps) {
  const [liked, setLiked] = useState<boolean>(didLike);

  const handleClick = () => {
    if (liked) {
      unlikeHandler();
    }
    if (!liked) {
      likeHandler();
    }
    setLiked(!liked);
  };

  return (
    <div style={extraStyles} className={styles.actions}>
      <img
        data-testid={liked ? "liked" : "notliked"}
        onClick={handleClick}
        src={liked ? HeartActive : Heart}
        alt="Like"
      />
      <img src={Comment} alt="Comment" />
      <img src={Direct} alt="Direct" />
      <img src={Bookmark} alt="Bookmark" />
    </div>
  );
}

export default Actions;
