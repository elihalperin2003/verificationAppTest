import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ProfilePage from "./pages/ProfilePage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/sign-up" element={<SignUpPage />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
