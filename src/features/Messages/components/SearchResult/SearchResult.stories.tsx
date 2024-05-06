import type { StoryObj, Meta } from "@storybook/react";
import SearchResult from "./SearchResult";
import MockAvatar from "../../../../assets/svgs/avatarmock.svg";
import Avatar, { Variants } from "../../../../components/Avatar/Avatar";
import styles from "./SearchResult.module.scss";
import { withRedux } from "../../../../helpers/decorators/withRedux";

const meta: Meta<typeof SearchResult> = {
  title: "Components/SearchResult",
  component: SearchResult,
  parameters: {
    layout: "padded",
  },
  decorators: [withRedux],
};

export default meta;
type Story = StoryObj<typeof SearchResult>;

export const Default: Story = {
  args: { avatar: MockAvatar, username: "James" },
};
export const HoverState: Story = {
  render: () => {
    return (
      <div id={styles["active"]} className={styles.search_result}>
        <Avatar variant={Variants.inboxHeader} src={MockAvatar} />
        <span className={styles.username}>James</span>
      </div>
    );
  },
};
