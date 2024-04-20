import styles from "./Home.module.scss";
import Navigation from "../../components/Navigation/Navigation";
import StoryContainer from "../../features/Story/components/StoryContainer/StoryContainer";
import PreviewBlock from "../../components/PreviewBlock/PreviewBlock";
import Button from "../../components/Button/Button";
import { useAppSelector } from "../../hooks/reduxHooks";
import Post from "../../features/Posts/components/Post/Post";

function Home() {
  const { avatar_url, username, posts } = useAppSelector(
    (state) => state.currentUser.data
  );

  const isCurrentUser = useAppSelector(state => state.currentUser.data)
  console.log(isCurrentUser)


  return (
    <div className={styles.home}>
      <Navigation variant="full-width" />
      <main className={styles.main_section}>
        <StoryContainer>{/* this is where stories go */}</StoryContainer>

        {posts.map((post) => (
          <Post
            key={post.id}
            user_avatar_url={post.avatar}
            username={post.author}
            date={post.date}
            likes_count={post.likes_count}
            caption={post.caption}
            post_img_url={post.post_img_url}
          />
        ))}
      </main>
      <div className={styles.suggestion_section}>
        <PreviewBlock
          variant="profile"
          avatar_url={avatar_url}
          username={username}
          name={username}
        />
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
            {/* this is where suggestion blocks go */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
