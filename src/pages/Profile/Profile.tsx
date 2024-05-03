import styles from "./Profile.module.scss";
import Navigation from "../../components/Navigation/Navigation";
import Avatar, { Variants } from "../../components/Avatar/Avatar";
import Button from "../../components/Button/Button";
import Settings from "../../assets/svgs/settings.svg";
import Dots from "../../assets/svgs/dots.svg";
import PostsTab from "../../assets/svgs/posts-tab.svg";
import SavedTab from "../../assets/svgs/bookmark-tab.svg";
import TaggedTab from "../../assets/svgs/tagged-tab.svg";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { ChangeEventHandler, useEffect, useState } from "react";
import { useUpload } from "../../hooks/useUpload";
import { BiEdit } from "react-icons/bi";
import { FaCheck } from "react-icons/fa6";
import { ChangeBio } from "../../features/Users/services/ChangeBio";
import FilterClasses from "../../features/Posts/components/Step/Edit/Filters.module.scss";
import { useParams } from "react-router-dom";
import { GetUserPreview } from "../../features/Users/services/GetUserPreview";
import PostPreview from "../../features/Posts/components/PostPreview/PostPreview";
import { Post } from "../../features/Users/slices/currentUserSlice";
import {
  setPostPreview,
  showPostPreview,
} from "../../features/Posts/slices/postPreviewSlice";
import { FollowUser } from "../../features/Users/services/FollowUser";
import { UnfollowUser } from "../../features/Users/services/UnfollowUser";
import NoPostsInProfile from "../../features/Posts/components/NoPostsInProfile/NoPostsInProfile";

function Profile() {
  const { username, posts, avatar_url, followers, following, bio } =
    useAppSelector((state) => state.currentUser);
  const dispatch = useAppDispatch();
  const upload = useUpload();
  const params = useParams<{ username: string }>();
  const { accessId } = useAppSelector((state) => state.auth);
  const [edit, setEdit] = useState(false);
  const [newBio, setNewBio] = useState<null | string>(null);
  const [isAdmin, setIsAdmin] = useState(params.username === username);
  const { user: PreviewUser } = useAppSelector((state) => state.preview);
  const { isOnScreen } = useAppSelector((state) => state.postPreview);
  const [isFollowed, setIsFollowed] = useState(
    following.includes(PreviewUser.documentId)
  );

  const handleProfileChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const newFile = event.target.files?.item(0) as File;
    upload({ action: "avatar_change", file: newFile, documentId: accessId! });
  };

  const handleEditBio: ChangeEventHandler<HTMLInputElement> = (event) => {
    setNewBio(event.target.value);
  };

  const handleChangeBio = () => {
    setEdit(false);
    dispatch(ChangeBio({ new_bio: newBio!, documentId: accessId! }));
  };

  const handlePostPreview = (post: Post) => {
    dispatch(setPostPreview(post));
    dispatch(showPostPreview());
  };

  const handleFollow = () => {
    if (!isFollowed) {
      dispatch(
        FollowUser({
          currentUserId: accessId!,
          userWhoGetsFollowedId: PreviewUser.documentId,
          signal: setIsFollowed,
        })
      );
    } else {
      dispatch(
        UnfollowUser({
          currentUserId: accessId!,
          userWhoGetsUnfollowedId: PreviewUser.documentId,
          signal: setIsFollowed,
        })
      );
    }
  };

  useEffect(() => {
    if (params.username !== username) {
      dispatch(GetUserPreview(params.username!));
    }
    setIsAdmin(username === params.username);
  }, [params.username, isOnScreen, isFollowed]);

  const showPosts = () => {
    if (isAdmin) {
      if (posts.length == 0) {
        return (
          <div className={styles.no_content}>
            <NoPostsInProfile />
          </div>
        );
      } else {
        return (
          <div className={styles.content}>
            {[...posts].reverse().map((post) => (
              <img
                style={post.editValue.customClass}
                id={FilterClasses[post.editValue.filter]}
                src={post.content_url}
                alt={post.caption}
                onClick={() => handlePostPreview(post)}
              />
            ))}
          </div>
        );
      }
    } else {
      if (PreviewUser.posts.length == 0) {
        return (
          <div className={styles.no_content}>
            <NoPostsInProfile />
          </div>
        );
      } else {
        return (
          <div className={styles.content}>
            {[...PreviewUser.posts].reverse().map((post) => (
              <img
                style={post.editValue.customClass}
                id={FilterClasses[post.editValue.filter]}
                src={post.content_url}
                alt={post.caption}
                onClick={() => handlePostPreview(post)}
              />
            ))}
          </div>
        );
      }
    }
  };

  return (
    <div className={styles.profile_page}>
      <Navigation variant="full-width" />
      <div className={styles.profile_main}>
        <header>
          <div className={styles.actions}>
            <div className={styles.avatar_wrapper}>
              <Avatar
                variant={Variants.profile}
                src={isAdmin ? avatar_url : PreviewUser.avatar_url}
              />
              {isAdmin ? (
                <input
                  type="file"
                  name="avatar"
                  id="avatar"
                  onChange={handleProfileChange}
                  accept="image/*"
                />
              ) : (
                <></>
              )}
            </div>
            <div className={styles.action_wrapper}>
              <div
                id={!isAdmin ? styles["not_admin"] : ""}
                className={styles.upper_row}
              >
                <span>{isAdmin ? username : PreviewUser.username}</span>
                {isAdmin ? (
                  <Button
                    type="button"
                    variant="secondary"
                    title="Edit Profile"
                  />
                ) : (
                  <Button
                    onClick={handleFollow}
                    type="button"
                    variant={isFollowed ? "secondary" : "primary"}
                    title={isFollowed ? "Following" : "Follow"}
                  >
                    {isFollowed ? (
                      <>
                        Following
                        <FaCheck />
                        <div className={styles.hover_element}>Unfollow</div>
                      </>
                    ) : (
                      "Follow"
                    )}
                  </Button>
                )}

                {isAdmin ? (
                  <Button
                    type="button"
                    variant="secondary"
                    title="View archive"
                  />
                ) : (
                  <></>
                )}

                <img
                  src={isAdmin ? Settings : Dots}
                  alt={isAdmin ? "Settings" : "Options"}
                />
              </div>
              <div className={styles.profile_info}>
                <span>
                  {isAdmin ? posts.length : PreviewUser.posts.length} posts
                </span>
                <span>
                  {isAdmin ? followers.length : PreviewUser.followers.length}{" "}
                  followers
                </span>
                <span>
                  {isAdmin ? following.length : PreviewUser.following.length}{" "}
                  following
                </span>
              </div>
              <div className={styles.bio}>
                {edit ? (
                  <div className={styles.edit_bio}>
                    <input
                      onChange={handleEditBio}
                      type="text"
                      name="edit-bio"
                      id="edit-bio"
                    />
                    <FaCheck onClick={handleChangeBio} />
                  </div>
                ) : (
                  <>
                    {isAdmin ? bio : PreviewUser.bio}
                    {isAdmin ? <BiEdit onClick={() => setEdit(true)} /> : <></>}
                  </>
                )}
              </div>
            </div>
          </div>
          <div className={styles.highlights}>
            <div className={styles.highlight}>
              <div style={{ cursor: !isAdmin ? "default" : "pointer" }}>+</div>
              <span>New</span>
            </div>
          </div>
        </header>
        <div className={styles.media}>
          <nav>
            <div className={styles.tab}>
              <img src={PostsTab} alt="Posts" />
              <span>POSTS</span>
            </div>
            <div className={styles.tab}>
              <img src={SavedTab} alt="Saved" />
              <span>SAVED</span>
            </div>
            <div className={styles.tab}>
              <img src={TaggedTab} alt="Tagged" />
              <span>TAGGED</span>
            </div>
          </nav>
          {showPosts()}
        </div>
      </div>
      {isOnScreen ? <PostPreview /> : <></>}
    </div>
  );
}

export default Profile;
