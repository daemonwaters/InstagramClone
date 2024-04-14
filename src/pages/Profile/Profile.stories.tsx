import type { Meta, StoryObj } from "@storybook/react";
import styles from "./Profile.module.scss";
import Profile from "./Profile";
import MockAvatar from "../../assets/svgs/avatarmock.svg";
import Settings from "../../assets/svgs/settings.svg";
import PostsTab from "../../assets/svgs/posts-tab.svg";
import SavedTab from "../../assets/svgs/bookmark-tab.svg";
import TaggedTab from "../../assets/svgs/tagged-tab.svg";
import Navigation from "../../components/Navigation/Navigation";
import Avatar, { Variants } from "../../components/Avatar/Avatar";
import Button from "../../components/Button/Button";
import MockPost from "../../assets/imgs/post-placeholder.avif";

const meta: Meta<typeof Profile> = {
  title: "Pages/Profile",
  component: Profile,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Profile>;

export const Default: Story = {
  render: () => {
    return (
      <div className={styles.profile_page}>
        <Navigation variant="full-width" />
        <div className={styles.profile_main}>
          <header>
            <div className={styles.actions}>
              <Avatar variant={Variants.profile} src={MockAvatar} />
              <div className={styles.action_wrapper}>
                <div className={styles.upper_row}>
                  <span>username</span>
                  <Button variant="secondary" title="Edit Profile" />
                  <Button variant="secondary" title="View archive" />
                  <img src={Settings} alt="Settings" />
                </div>
                <div className={styles.profile_info}>
                  <span>7 posts</span>
                  <span>61 followers</span>
                  <span>779 following</span>
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
              {Array.from(Array(9)).map(() => (
                <img src={MockPost} alt="Image" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  },
};
