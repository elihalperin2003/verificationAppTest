import { useLocation, useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const { state } = useLocation();
  const { username, email } = state;
  const navigate = useNavigate();
  return (
    <>
      <div>
        hello {username}. email: {email}
      </div>
      <button
        onClick={() => {
          document.cookie = "";
          alert("log out succesfully");
          navigate("/");
        }}
      >
        logout
      </button>
    </>
  );
};

export default ProfilePage;
