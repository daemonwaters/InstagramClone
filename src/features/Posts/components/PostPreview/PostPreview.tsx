import Avatar, { Variants } from "../../../../components/Avatar/Avatar";
import Actions from "../Actions/Actions";
import styles from "./PostPreview.module.scss";
import Emoji from "../../../../assets/svgs/emoji.svg";
import Button from "../../../../components/Button/Button";
import { FaXmark } from "react-icons/fa6";
import Dots from "../../../../assets/svgs/dots.svg";
import { createPortal } from "react-dom";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import {
  clearPostPreview,
  closePostPreview,
} from "../../slices/postPreviewSlice";
import FilterClasses from "../../../Posts/components/Step/Edit/Filters.module.scss";
import { LikePostInPreview } from "../../services/LikePostInPreview";
import { UnlikePostInPreview } from "../../services/UnlikePostInPreview";

function PostPreview() {
  const post = useAppSelector((state) => state.postPreview.post);
  const { user } = useAppSelector((state) => state.preview);
  const currentUserId = useAppSelector((state) => state.auth.accessId);
  const dispatch = useAppDispatch();
  const handleClosePostPreview = () => {
    dispatch(closePostPreview());
    dispatch(clearPostPreview());
  };

  const getDate = (createdAt: number) => {
    const gap = new Date().getTime() - createdAt;
    const day = Math.floor(gap / (1000 * 60 * 60 * 24));
    const hour = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const min = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));

    if (day >= 1) {
      return `${day}d`;
    }
    if (hour >= 1) {
      return `${hour}h`;
    }
    if (min >= 1) {
      return `${min}m`;
    }
    return `just now`;
  };

  const handleLikePost = () => {
    dispatch(
      LikePostInPreview({
        authorId: post!.authorId,
        postToUpdate: post!,
        posts: user.posts,
        currentUserId: currentUserId!,
      })
    );
  };

  const handleUnlikePost = () => {
    dispatch(
      UnlikePostInPreview({
        authorId: post!.authorId,
        postToUpdate: post!,
        posts: user.posts,
        currentUserId: currentUserId!,
      })
    );
  };

  return createPortal(
    <div className={styles.preview_modal}>
      <div className={styles.post_preview}>
        <div className={styles.preview_img}>
          <img
            style={post!.editValue.customClass}
            id={FilterClasses[post!.editValue.filter]}
            src={post!.content_url}
            alt="Post"
          />
        </div>
        <div className={styles.preivew_data}>
          <header>
            <Avatar variant={Variants.postPreview} src={post!.avatar} />
            <span>{post!.author}</span>
            <img src={Dots} alt="Options" />
          </header>
          <div className={styles.comments_and_author}>
            <div className={styles.author_section}>
              <Avatar variant={Variants.postPreview} src={post!.avatar} />
              <div className={styles.author_username_and_caption}>
                <span className={styles.username}>{post!.author}</span>
                <span className={styles.caption}>{post!.caption}</span>
              </div>
              <span className={styles.date}>{getDate(post!.createdAt)}</span>
            </div>
          </div>
          <div className={styles.actions}>
            <Actions
              likeHandler={handleLikePost}
              unlikeHandler={handleUnlikePost}
              extraStyles={{ padding: 0 }}
              didLike={post!.likedBy.includes(currentUserId!)}
            />
          </div>
          <div className={styles.likes_count}>{post!.likes_count} Likes</div>
          <div className={styles.add_comment}>
            <img src={Emoji} alt="Emoji" />
            <span>Add a comment</span>
            <Button variant="ghost" title="Post" type="button" />
          </div>
        </div>
      </div>
      <div onClick={handleClosePostPreview} className={styles.x_button}>
        <FaXmark />
      </div>
    </div>,
    document.getElementById("post-preview")!
  );
}

export default PostPreview;
