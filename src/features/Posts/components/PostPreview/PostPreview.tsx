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

function PostPreview() {
  const post = useAppSelector((state) => state.postPreview.post);
  const dispatch = useAppDispatch();
  const handleClosePostPreview = () => {
    dispatch(closePostPreview());
    dispatch(clearPostPreview());
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
              <span className={styles.date}>{post!.createdAt}</span>
            </div>
          </div>
          <div className={styles.actions}>
            <Actions extraStyles={{ padding: 0 }} />
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
