import UserProfile from "./UserProfile";
import ThemeToggle from "./ThemeToggle";
import NotificationPanel from "./NotificationPanel";
import { useTheme } from "../context/ThemeContext";

function Dashboard() {
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? "dashboard dark" : "dashboard"}>
      <h1>Student Portal Dashboard</h1>

      <UserProfile />

      <ThemeToggle />

      <NotificationPanel />
    </div>
  );
}

export default Dashboard;
