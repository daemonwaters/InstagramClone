import styles from "./Post.module.scss";
import Header from "../Header/Header";
import Actions from "../Actions/Actions";
import FilterClasses from "../Step/Edit/Filters.module.scss";
import { ActiveFilter, CustomClass } from "../../slices/editSlice";

type PostProps = {
  user_avatar_url: string;
  username: string;
  date: number;
  //change later to string
  post_img_url: string;
  likes_count: number;
  caption: string;
  authorId: string;
  editValue: {
    filter: ActiveFilter;
    customClass: CustomClass;
  };
};

function Post(props: PostProps) {
  const {
    user_avatar_url,
    username,
    date,
    post_img_url,
    likes_count,
    caption,
    editValue,
    authorId,
  } = props;

  return (
    <div className={styles.post}>
      <Header
        user_avatar_url={user_avatar_url}
        username={username}
        date={`${date}`}
      />
      <div className={styles.img_wrapper}>
        <img
          id={FilterClasses[editValue.filter]}
          style={editValue.customClass}
          src={post_img_url}
          alt="Image"
        />
      </div>
      <Actions
        likeHandler={() => {}}
        unlikeHandler={() => {}}
        didLike={false}
      />
      <div className={styles.meta}>
        <span className={styles.likes}> {likes_count} Likes</span>
        <div className={styles.user_caption}>
          <span>{username} </span>
          {caption}
        </div>
      </div>
      <div className={styles.comment}>Add a comment...</div>
    </div>
  );
}

export default Post;
