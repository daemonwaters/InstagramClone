import styles from "./Actions.module.scss";
import Heart from "../../../../assets/svgs/heart.svg";
import HeartActive from "../../../../assets/svgs/heart-red.svg";
import Comment from "../../../../assets/svgs/comment.svg";
import Direct from "../../../../assets/svgs/direct.svg";
import Bookmark from "../../../../assets/svgs/bookmark.svg";
import { useState } from "react";

function Actions() {
  const [liked, setLiked] = useState<boolean>(false);

  const handleClick = () => {
    setLiked(!liked);
  };

  return (
    <div className={styles.actions}>
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
