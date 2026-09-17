import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const negative = useNavigate();
  return (
    <>
      <button onClick={() => negative("/login")}>login</button>
      <button onClick={() => negative("/sign-up")}>sign up</button>
    </>
  );
};

export default HomePage;
