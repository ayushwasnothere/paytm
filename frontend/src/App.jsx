import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { SignUp } from "./pages/signup";
import { SignIn } from "./pages/signin";
import { Send } from "./pages/send";
import { Dashboard } from "./pages/dashboard";
import { RequireAuth } from "./components/RequireAuth";
import { NoAuth } from "./components/NoAuth";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<NoAuth><SignIn /></NoAuth>} />
          <Route path="/signup" element={<NoAuth><SignUp /></NoAuth>} />
          <Route
            path="/send"
            element={
              <RequireAuth>
                {" "}
                <Send />{" "}
              </RequireAuth>
            }
          />
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
