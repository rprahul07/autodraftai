import { Navigate, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Page from "./pages/Page.jsx";
import LoginPage from "./pages/login/Login.jsx";
import SignupForm from "./pages/signup/Signup.jsx";
import GenerateLetterPage from "./pages/Letter.jsx";
import DownloadLetter from "./pages/Download.jsx";
import { useAuthContext } from "./context/AuthContext.jsx";
function App() {
  const { authUser } = useAuthContext();
  return (
    <>
      <Routes>
        <Route path="/" element={authUser ? <Page /> : <LoginPage />} />
        <Route
          path="/login"
          element={
            authUser ? (
              <Navigate to={"/"} />
            ) : (
              <>
                <LoginPage />
              </>
            )
          }
        />
        <Route
          path="/signup"
          element={
            authUser ? (
              <Navigate to={"/"} />
            ) : (
              <>
                <SignupForm />
              </>
            )
          }
        />
        <Route
          path="/letter"
          element={
            <>
              <GenerateLetterPage />
            </>
          }
        />
        <Route
          path="/download"
          element={
            <>
              <DownloadLetter />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
