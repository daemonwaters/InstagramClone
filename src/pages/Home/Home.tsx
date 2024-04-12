import styles from "./Home.module.scss";
import Navigation from "../../components/Navigation/Navigation";
import StoryContainer from "../../features/Story/components/StoryContainer/StoryContainer";
import Story from "../../features/Story/components/Story/Story";
import Post from '../../features/Posts/components/Post/Post'
import AvatarMock from '../../assets/svgs/avatarmock.svg'
import MockPostImg from "../../assets/imgs/post-placeholder.avif";
 
function Home() {
  return (
    <div className={styles.home}>
      <Navigation variant="full-width" />
      <main className={styles.main_section}>
        <StoryContainer>
          {Array.from(Array(8)).map(() => (
            <Story avatar_url={AvatarMock} username="username" />
          ))}
        </StoryContainer>
        <Post 
        user_avatar_url={AvatarMock} 
        username="username" 
        date="1d" 
        likes_count={340} 
        caption="Wow are components are coming together!"
        post_img_url={MockPostImg}
        />
      </main>
      <div className={styles.suggestion_section}></div>
    </div>
  );
}

export default Home;
