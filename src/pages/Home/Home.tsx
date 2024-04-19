import styles from "./Home.module.scss";
import Navigation from "../../components/Navigation/Navigation";
import StoryContainer from "../../features/Story/components/StoryContainer/StoryContainer";
import AvatarMock from "../../assets/svgs/avatarmock.svg";
import PreviewBlock from "../../components/PreviewBlock/PreviewBlock";
import Button from "../../components/Button/Button";
import { useAppSelector } from "../../hooks/reduxHooks";

function Home() {
  return (
    <div className={styles.home}>
      <Navigation variant="full-width" />
      <main className={styles.main_section}>
        <StoryContainer>{/* this is where stories go */}</StoryContainer>
        {/* this is where posts go */}
      </main>
      <div className={styles.suggestion_section}>
        <PreviewBlock
          variant="profile"
          avatar_url={AvatarMock}
          username="username"
          name="somename"
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
