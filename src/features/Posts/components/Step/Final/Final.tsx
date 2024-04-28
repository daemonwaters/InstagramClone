import ModalHeader from "../../ModalHeader/ModalHeader";
import styles from "./Final.module.scss";
import Avatar, { Variants } from "../../../../../components/Avatar/Avatar";
import MockAvatar from "../../../../../assets/svgs/avatarmock.svg";
import Emoji from "../../../../../assets/svgs/emoji.svg";
import Location from "../../../../../assets/svgs/Location.svg";
import ArrowDown from "../../../../../assets/svgs/arrow-down.svg";
import FilterClasses from "../Edit/Filters.module.scss";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../hooks/reduxHooks";
import { ChangeEventHandler } from "react";
import { setCaption } from "../../../slices/postSlice";
function Final() {
  const dispatch = useAppDispatch();
  const PreviewSrc = useAppSelector((state) => state.step.preview_src);
  const { customClass, activeFilter } = useAppSelector(
    (state) => state.editProcess
  );

  const handleCaption: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    dispatch(setCaption(event.target.value));
  };

  return (
    <div className={styles.final}>
      <ModalHeader
        extended
        title="Create new post"
        variant="withActions"
        buttonTitle="Share"
      />
      <div className={styles.body}>
        <div className={styles.preview}>
          <img
            style={customClass}
            id={FilterClasses[activeFilter]}
            src={PreviewSrc!}
            alt="Image"
          />
        </div>
        <div className={styles.post_info}>
          <div className={styles.username_avatar}>
            <Avatar variant={Variants.msg} src={MockAvatar} />
            <span>username</span>
          </div>
          <div className={styles.caption_area}>
            <textarea
              onChange={handleCaption}
              placeholder="Write a caption..."
              name="caption"
              id="caption"
            ></textarea>
            <footer className={styles.footer}>
              <img src={Emoji} alt="Emoji" />
              <span className={styles.counter}>0/200</span>
            </footer>
          </div>
          <div className={styles.more_settings}>
            <div>
              <span>Add Location</span>
              <img src={Location} alt="location" />
            </div>
            <div>
              <span>Accessibility</span>
              <img src={ArrowDown} alt="arrow down" />
            </div>
            <div>
              <span>Advanced Settings</span>
              <img src={ArrowDown} alt="arrow down" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Final;
