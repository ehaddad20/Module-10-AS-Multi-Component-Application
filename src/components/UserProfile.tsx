import { useUser } from "../context/UserContext";
import { useGreeting } from "../hooks/useGreeting";

function UserProfile() {
  const { name } = useUser();
  const greeting = useGreeting(name);

  return (
    <div>
      <h2>{greeting}</h2>
    </div>
  );
}

export default UserProfile;
