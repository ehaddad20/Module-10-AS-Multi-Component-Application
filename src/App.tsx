import Dashboard from "./components/Dashboard";
import UserContext from "./context/UserContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <UserContext.Provider value={{ name: "Maria Johnson" }}>
      <ThemeProvider>
        <Dashboard />
      </ThemeProvider>
    </UserContext.Provider>
  );
}

export default App;
