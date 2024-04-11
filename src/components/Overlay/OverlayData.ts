import Settings from "../../assets/svgs/settings.svg";
import Activity from "../../assets/svgs/activity.svg";
import Bookmark from "../../assets/svgs/bookmark.svg";
import Moon from "../../assets/svgs/problem-report.svg";
import ProblemReport from "../../assets/svgs/settings.svg";
import Threads from "../../assets/svgs/threads.svg";

export const overlayData = [
  {
    variant: "default" as const,
    icon: Settings,
    title: "Settings",
    id: 1,
  },
  {
    variant: "default" as const,
    icon: Activity,
    title: "Your Activity",
    id: 2,
  },
  {
    variant: "default" as const,
    icon: Bookmark,
    title: "Saved",
    id: 3,
  },
  {
    variant: "default" as const,
    icon: Moon,
    title: "Switch appearance",
    id: 4,
  },
  {
    variant: "default" as const,
    icon: ProblemReport,
    title: "Report a problem",
    id: 5,
  },
  {
    variant: "default" as const,
    icon: Threads,
    title: "Threads",
    id: 6,
  },
  {
    variant: "title-only" as const,
    icon: "",
    title: "Switch accounts",
    id: 7,
  },
  {
    variant: "title-only" as const,
    icon: "",
    title: "Log out",
    id: 8,
  },
];
