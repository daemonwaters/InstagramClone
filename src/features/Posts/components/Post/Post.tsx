import styles from "./Post.module.scss";
import Header from "../Header/Header";
import Actions from "../Actions/Actions";
import FilterClasses from "../Step/Edit/Filters.module.scss";
import { ActiveFilter, CustomClass } from "../../slices/editSlice";
import { HowLongAgo } from "../../utils/HowLongAgo";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import { LikePostInFeed } from "../../services/LikePstInFeed";
import { UnlikePostInFeed } from "../../services/UnlikePostInFeed";

type PostProps = {
  avatar: string;
  author: string;
  createdAt: number;
  content_url: string;
  likes_count: number;
  likedBy: string[];
  caption: string;
  authorId: string;
  id: string;
  editValue: {
    filter: ActiveFilter;
    customClass: CustomClass;
  };
};

function Post(props: PostProps) {
  const {
    avatar,
    author,
    createdAt,
    content_url,
    likes_count,
    caption,
    editValue,
    authorId,
    likedBy,
    id,
  } = props;
  const dispatch = useAppDispatch();
  const currentUserId = useAppSelector((state) => state.auth.accessId)!;
  const posts = useAppSelector((state) => state.feed.posts);

  const LikePost = () => {
    dispatch(
      LikePostInFeed({
        authorId,
        currentUserId,
        postToUpdate: {
          ...props,
        },
        posts,
      })
    );
  };

  const UnlikePost = () => {
    dispatch(
      UnlikePostInFeed({
        authorId,
        currentUserId,
        postToUpdate: {
          ...props,
        },
        posts,
      })
    );
  };

  return (
    <div className={styles.post}>
      <Header
        user_avatar_url={avatar}
        username={author}
        date={HowLongAgo(createdAt)}
      />
      <div className={styles.img_wrapper}>
        <img
          id={FilterClasses[editValue.filter]}
          style={editValue.customClass}
          src={content_url}
          alt="Image"
        />
      </div>
      <Actions
        likeHandler={LikePost}
        unlikeHandler={UnlikePost}
        didLike={likedBy.includes(currentUserId!)}
      />
      <div className={styles.meta}>
        <span className={styles.likes}> {likes_count} Likes</span>
        <div className={styles.user_caption}>
          <span>{author} </span>
          {caption}
        </div>
      </div>
      <div className={styles.comment}>Add a comment...</div>
    </div>
  );
}

export default Post;
