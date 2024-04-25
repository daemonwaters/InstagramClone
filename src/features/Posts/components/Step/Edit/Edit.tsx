import styles from "./Edit.module.scss";
import ModalHeader from "../../ModalHeader/ModalHeader";
import ModalControls from "../../ModalControls/ModalControls";
import FilterPlaceholder from "../../../../../assets/imgs/filter-placeholder.jpeg";
import { Filters } from "./Filters";
import Range from "../../Range/Range";
import { useAppSelector } from "../../../../../hooks/reduxHooks";
import { useState } from "react";
type ActiveTab = "filters" | "adjustments";
const ActiveClass = {
  color: "#fff",
  borderColor: "#fff",
};

function Edit() {
  const PreviewSrc = useAppSelector((state) => state.step.preview_src);
  const [activeTab, setActiveTab] = useState<ActiveTab>("filters");

  const handleTabChange = (tab: ActiveTab) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.wrapper}>
      <ModalHeader
        variant="withActions"
        extended
        title="Edit"
        buttonTitle="Next"
      />
      <div className={styles.body}>
        <div className={styles.preview}>
          <img src={PreviewSrc!} alt="Image" />
          <ModalControls />
        </div>
        <div className={styles.edit_section}>
          <div className={styles.tabs}>
            <span
              style={activeTab == "filters" ? ActiveClass : {}}
              onClick={() => handleTabChange("filters")}
            >
              Filters
            </span>
            <span
              style={activeTab == "adjustments" ? ActiveClass : {}}
              onClick={() => handleTabChange("adjustments")}
            >
              Adjustments
            </span>
          </div>
          {activeTab == "filters" ? (
            <div className={styles.filters_preview}>
              {Filters.map((filter) => {
                return (
                  <div key={filter.id} className={styles.filter}>
                    <img src={FilterPlaceholder} alt={filter.name} />
                    <span className={styles.filter_name}>{filter.name}</span>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className={styles.adjustments}>
              <Range title="Brightness" />
              <Range title="Saturation" />
              <Range title="Contrast" />
              <Range title="Fade" />
              <Range title="Temperature" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Edit;
