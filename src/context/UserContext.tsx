import { createContext, useContext } from "react";

interface UserContextType {
  name: string;
}

const UserContext = createContext<UserContextType>({
  name: "Guest",
});

export const useUser = () => useContext(UserContext);

export default UserContext;
