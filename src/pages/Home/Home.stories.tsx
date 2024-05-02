import type { StoryObj, Meta } from "@storybook/react";
import Home from "./Home";
import styles from "./Home.module.scss";
import Navigation from "../../components/Navigation/Navigation";
import StoryContainer from "../../features/Story/components/StoryContainer/StoryContainer";
import Story from "../../features/Story/components/Story/Story";
import AvatarMock from "../../assets/svgs/avatarmock.svg";
import MockPostImg from "../../assets/imgs/post-placeholder.avif";
import Post from "../../features/Posts/components/Post/Post";
import PreviewBlock from "../../components/PreviewBlock/PreviewBlock";
import Button from "../../components/Button/Button";
import { withRedux } from "../../helpers/decorators/withRedux";
import {
  reactRouterParameters,
  withRouter,
} from "storybook-addon-remix-react-router";

const meta: Meta<typeof Home> = {
  title: "Pages/Home",
  component: Home,
  tags: ["autodocs"],
  decorators: [withRedux, withRouter],
  parameters: {
    reactRouter: reactRouterParameters({
      routing: {
        path: "/home",
      },
    }),
  },
};

export default meta;
type Story = StoryObj<typeof Home>;

export const Default: Story = {
  render: () => {
    return (
      <div className={styles.home}>
        <Navigation variant="full-width" />
        <main className={styles.main_section}>
          <StoryContainer>
            {Array.from(Array(8).keys()).map((key) => (
              <Story key={key} avatar_url={AvatarMock} username="username" />
            ))}
          </StoryContainer>
          <Post
            user_avatar_url={AvatarMock}
            username="username"
            date={100}
            likes_count={340}
            caption="Wow are components are coming together!"
            post_img_url={MockPostImg}
            editValue={{ filter: "", customClass: {} }}
            authorId="345577"
          />
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
              {Array.from(Array(5).keys()).map((key) => (
                <PreviewBlock
                  key={key}
                  variant="suggestion"
                  avatar_url={AvatarMock}
                  username="username"
                  name="somename"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  },
};

export const HomeWithRedux: Story = {
  render: () => <Home />,
};
