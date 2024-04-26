import styles from "./Edit.module.scss";
import ModalHeader from "../../ModalHeader/ModalHeader";
import ModalControls from "../../ModalControls/ModalControls";
import FilterPlaceholder from "../../../../../assets/imgs/filter-placeholder.jpeg";
import FilterClasses from "./Filters.module.scss";
import {
  ActiveFilter,
  ActiveTab,
  activateFilter,
  activateTab,
  setAdjustments,
  setFilterInteraction,
} from "../../../slices/editSlice";
import { Filters } from "./Filters";
import Range from "../../Range/Range";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../hooks/reduxHooks";

const activeClass = {
  color: "#fff",
  borderColor: "#fff",
};

const adjustmentsData = [
  { name: "brightness", id: 1 },
  { name: "saturate", id: 2 },
  { name: "contrast", id: 3 },
  { name: "invert", id: 4 },
  { name: "sepia", id: 5 },
];

function Edit() {
  const PreviewSrc = useAppSelector((state) => state.step.preview_src);
  const {
    activeTab,
    activeFilter,
    adjustments,
    filtersInteraction,
    customClass,
  } = useAppSelector((state) => state.editProcess);
  const dispatch = useAppDispatch();

  const handleTabChange = (tab: ActiveTab) => {
    dispatch(activateTab(tab));
  };

  const handleFilterSelect = (filterName: ActiveFilter) => {
    dispatch(activateFilter(filterName));
    if (Object.keys(adjustments).length !== 0) {
      dispatch(setAdjustments({}));
    }
    if (!filtersInteraction) {
      dispatch(setFilterInteraction(true));
    }
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
          <img
            id={
              !filtersInteraction
                ? FilterClasses[""]
                : FilterClasses[activeFilter]
            }
            src={PreviewSrc!}
            alt="Image"
            style={customClass}
          />
          <ModalControls />
        </div>
        <div className={styles.edit_section}>
          <div className={styles.tabs}>
            <span
              style={activeTab == "filters" ? activeClass : {}}
              onClick={() => handleTabChange("filters")}
            >
              Filters
            </span>
            <span
              style={activeTab == "adjustments" ? activeClass : {}}
              onClick={() => handleTabChange("adjustments")}
            >
              Adjustments
            </span>
          </div>
          {activeTab == "filters" ? (
            <div className={styles.filters_preview}>
              {Filters.map((filter) => {
                return (
                  <div
                    onClick={() =>
                      handleFilterSelect(filter.name as ActiveFilter)
                    }
                    key={filter.id}
                    className={styles.filter}
                  >
                    <img
                      id={FilterClasses[filter.name]}
                      src={FilterPlaceholder}
                      alt={filter.name}
                    />
                    <span className={styles.filter_name}>{filter.name}</span>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className={styles.adjustments}>
              {adjustmentsData.map((adjustment) => (
                <Range key={adjustment.id} title={adjustment.name} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Edit;
