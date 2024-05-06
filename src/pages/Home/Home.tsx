import { useEffect } from "react";
import styles from "./Home.module.scss";
import Navigation from "../../components/Navigation/Navigation";
import StoryContainer from "../../features/Story/components/StoryContainer/StoryContainer";
import PreviewBlock from "../../components/PreviewBlock/PreviewBlock";
import Button from "../../components/Button/Button";
import Post from "../../features/Posts/components/Post/Post";
import Error from "../../components/Error/Error";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { useNavigate } from "react-router-dom";
import { GetUserFromFirestore } from "../../features/Users/services/GetUserFromFirestore";
import { GetSuggestions } from "../../features/Users/services/GetSuggestions";
import { GetFeedPosts } from "../../features/Posts/services/GetFeedPosts";
import FeedLoading from "../../features/Posts/components/FeedLoading/FeedLoading";
import FeedNoPosts from "../../features/Posts/components/FeedNoPosts/FeedNoPosts";

function Home() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { accessId, hasAccess } = useAppSelector((state) => state.auth);
  const { avatar_url, username, posts, error, uid } = useAppSelector(
    (state) => state.currentUser
  );
  const { status, posts: feed } = useAppSelector((state) => state.feed);
  const { suggestedUsers } = useAppSelector((state) => state.suggestion);

  useEffect(() => {
    if (!hasAccess) {
      return navigate("/");
    }
  }, []);

  useEffect(() => {
    dispatch(GetUserFromFirestore(accessId!));
    dispatch(GetSuggestions(uid));
    const timeOut = setTimeout(() => {
      dispatch(GetFeedPosts(accessId!));
    }, 1000);
    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  if (error) {
    return <Error />;
  }

  const handleFeedState = () => {
    const feedPosts = [...feed, ...posts];
    if (feedPosts.length == 0 && status == "succuss") {
      return <FeedNoPosts />;
    }
    if (status == "fetching") {
      return <FeedLoading />;
    }
    return feedPosts
      .reverse()
      .map((post) => (
        <Post
          id={post.id}
          key={post.id}
          avatar={post.avatar}
          author={post.author}
          createdAt={post.createdAt}
          likes_count={post.likes_count}
          caption={post.caption}
          content_url={post.content_url}
          editValue={post.editValue}
          authorId={post.authorId}
          likedBy={post.likedBy}
        />
      ));
  };

  return (
    <div className={styles.home}>
      <Navigation variant="full-width" />
      <main className={styles.main_section}>
        <StoryContainer>{/* this is where stories go */}</StoryContainer>
        {handleFeedState()}
      </main>
      <div className={styles.suggestion_section}>
        <PreviewBlock
          variant="profile"
          avatar_url={avatar_url}
          username={username}
        />
        {suggestedUsers.length !== 0 ? (
          <div className={styles.suggestions}>
            <header>
              <span>Suggested for you</span>
              <Button
                variant="ghost"
                title="See All"
                extraStyles={{ color: "#fff" }}
                type="button"
              />
            </header>
            <div className={styles.wrapper}>
              {suggestedUsers
                .filter((user) => user.user_id !== uid)
                .map((user) => {
                  return (
                    <PreviewBlock
                      key={user.user_id}
                      variant="suggestion"
                      username={user.username}
                      avatar_url={user.avatar}
                    />
                  );
                })}
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Home;
