import Home from "../../assets/svgs/home.svg";
import Search from "../../assets/svgs/search.svg";
import Explore from "../../assets/svgs/explore.svg";
import Reels from "../../assets/svgs/reels.svg";
import Messages from "../../assets/svgs/direct.svg";
import Notification from "../../assets/svgs/heart.svg";
import Create from "../../assets/svgs/create.svg";
import More from "../../assets/svgs/burger-menu.svg";

export const NavigationData = [
  {
    icon: Home,
    title: "Home",
    id: 1,
    isLinkedTo : "/home"
  },
  {
    icon: Search,
    title: "Search",
    id: 2,
  },
  {
    icon: Explore,
    title: "Explore",
    id: 3,
  },
  {
    icon: Reels,
    title: "Reels",
    id: 4,
  },
  {
    icon: Messages,
    title: "Messages",
    id: 5,
    isLinkedTo : "/inbox"
  },
  {
    icon: Notification,
    title: "Notifications",
    id: 6,
  },
  {
    icon: Create,
    title: "create",
    id: 7,
  },
  {
    icon: "",
    title: "Profile",
    id: 8,
    isLinkedTo : "/profile"
  },
  {
    icon: More,
    title: "More",
    id: 9,
  },
];
