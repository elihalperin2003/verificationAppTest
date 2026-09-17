import { useState } from "react";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { fetchReq } = useFetch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await fetchReq("http://localhost:3000/sign-up", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });
    if (data.error) {
      alert(data.error);
      return navigate("/");
    }

    document.cookie = data.token;
    alert(data.message);
    navigate("/");
  };
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={handleChangeName}
          placeholder="Enter username:"
        ></input>
        <input
          type="text"
          value={email}
          onChange={handleChangeEmail}
          placeholder="Enter email:"
        ></input>
        <input
          type="text"
          value={password}
          onChange={handleChangePassword}
          placeholder="Enter password:"
        ></input>
        <button type="submit">sign up</button>
      </form>
    </>
  );
};

export default SignUpPage;
