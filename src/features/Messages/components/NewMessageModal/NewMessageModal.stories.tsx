import type { StoryObj, Meta } from "@storybook/react";
import NewMessageModal from "./NewMessageModal";
import styles from "./NewMessageModal.module.scss";
import X from "../../../../assets/svgs/xbutton.svg";
import Button from "../../../../components/Button/Button";
import SearchResult from "../SearchResult/SearchResult";
import MockAvatar from "../../../../assets/svgs/avatarmock.svg";
import { withRedux } from "../../../../helpers/decorators/withRedux";

const meta: Meta<typeof NewMessageModal> = {
  title: "Components/NewMessageModal",
  component: NewMessageModal,
  decorators: [
    (story) => <div style={{ position: "relative" }}>{story()}</div>,
    withRedux,
  ],
};

export default meta;
type Story = StoryObj<typeof NewMessageModal>;

export const Default: Story = {};
export const withResults: Story = {
  render: () => (
    <div className={styles.new_message_modal}>
      <div className={styles.content}>
        <header>
          <span>New message</span>
          <img src={X} alt="close" />
        </header>
        <div className={styles.input_wrapper}>
          <span>To:</span>
          <input type="text" placeholder="Search..." />
        </div>
        <div className={styles.list}>
          <SearchResult id="466" username="Johnny" avatar={MockAvatar} />
          <SearchResult id="246" username="Jack" avatar={MockAvatar} />
          <SearchResult id="456" username="Alex" avatar={MockAvatar} />
          <SearchResult id="123" username="Mark" avatar={MockAvatar} />
        </div>
        <footer>
          <Button title="Chat" variant="primary" type="button" />
        </footer>
      </div>
    </div>
  ),
};
