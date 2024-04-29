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
import { setPreviewUser } from "../../features/Users/slices/previewSlice";
function Profile() {
  const {
    username,
    posts,
    avatar_url,
    followers,
    following,
    bio,
    uid
  } = useAppSelector((state) => state.currentUser);
  const dispatch = useAppDispatch();
  const upload = useUpload();
  const params = useParams<{ username: string }>();
  const { accessId } = useAppSelector((state) => state.auth);
  const [edit, setEdit] = useState(false);
  const [newBio, setNewBio] = useState<null | string>(null);
  const {
    user: PreviewUser,
  } = useAppSelector((state) => state.preview);

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

  useEffect(()=> {
    if(username !== params.username){
      dispatch(GetUserPreview(params.username!))
    } else {
      dispatch(setPreviewUser({
        username,
        avatar_url,
        bio,
        posts,
        followers,
        following,
        uid
      }))
    }
  },[])

  return (
    <div className={styles.profile_page}>
      <Navigation variant="full-width" />
      <div className={styles.profile_main}>
        <header>
          <div className={styles.actions}>
            <div className={styles.avatar_wrapper}>
              <Avatar
                variant={Variants.profile}
                src={PreviewUser.avatar_url}
              />
              <input
                type="file"
                name="avatar"
                id="avatar"
                onChange={handleProfileChange}
                accept="image/*"
              />
            </div>
            <div className={styles.action_wrapper}>
              <div className={styles.upper_row}>
                <span>{PreviewUser.username}</span>
                {username == params.username ? (
                  <Button
                    type="button"
                    variant="secondary"
                    title="Edit Profile"
                  />
                ) : (
                  <Button type="button" variant="primary" title="Follow" />
                )}

                {username == params.username ? (
                  <Button
                    type="button"
                    variant="secondary"
                    title="View archive"
                  />
                ) : (
                  <></>
                )}

                <img
                  src={username == params.username ? Settings : Dots}
                  alt={username == params.username ? "Settings" : "Options"}
                />
              </div>
              <div className={styles.profile_info}>
                <span>
                  {PreviewUser.posts.length}
                  posts
                </span>
                <span>
                  {PreviewUser.followers.length}
                  followers
                </span>
                <span>
                  { PreviewUser.following.length}
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
                    {PreviewUser.bio}
                    {username == params.username ? (
                      <BiEdit onClick={() => setEdit(true)} />
                    ) : (
                      <></>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
          <div className={styles.highlights}>
            <div className={styles.highlight}>
              <div>+</div>
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
          <div className={styles.content}>
            {PreviewUser.posts.map((post) => (
              <img
                style={post.editValue.customClass}
                id={FilterClasses[post.editValue.filter]}
                src={post.content_url}
                alt={post.caption}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
