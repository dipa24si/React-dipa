import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import NotFound from "./pages/NotFound";
import ErrorPage from "./components/ErrorPage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Forgot from "./pages/auth/Forgot";
import "./assets/tailwind.css";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}> 
        <Route path="/" element={<Dashboard />} />
        <Route path="orders" element={<Orders />} />
        <Route path="customers" element={<Customers />} />
        <Route
          path="/error/400"
          element={
            <ErrorPage
              errorCode={400}
              errorTitle="Bad Request"
              errorDescription="The server cannot process the request due to client error (e.g., malformed request syntax)."
            />
          }
        />
        <Route
          path="/error/401"
          element={
            <ErrorPage
              errorCode={401}
              errorTitle="Unauthorized"
              errorDescription="You need to be authenticated untuk mengakses resource ini."
            />
          }
        />
        <Route
          path="/error/403"
          element={
            <ErrorPage
              errorCode={403}
              errorTitle="Forbidden"
              errorDescription="You do not have permission to access this resource."
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
      </Route>
    </Routes>
  );
}

export default App;
