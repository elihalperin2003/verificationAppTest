import { useLocation } from "react-router-dom";

const ProfilePage = () => {
  const { state } = useLocation();
  const { username, email } = state;
  console.log(state);

  return (
    <div>
      hello - {username}, {email}
    </div>
  );
};

export default ProfilePage;
