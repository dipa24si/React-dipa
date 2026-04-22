import { Routes, Route } from "react-router-dom";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import NotFound from "./pages/NotFound";
import ErrorPage from "./components/ErrorPage";
import "./assets/tailwind.css";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex">
      <div id="layout-wrapper" className="flex flex-row flex-1">
        <Sidebar />
        <div id="main-content" className="flex-1 p-4">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
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
                  errorDescription="You need to be authenticated to access this resource."
                />
              } 
            />
            <Route 
              path="/error/403" 
              element={
                <ErrorPage 
                  errorCode={403}
                  errorTitle="Forbidden"
                  errorDescription="You don't have permission to access this resource."
                />
              } 
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;