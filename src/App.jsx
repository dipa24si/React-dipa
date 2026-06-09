import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
import Loading from "./components/Loading";
const ErrorPage = React.lazy(() => import("./components/ErrorPage"));
import "./assets/tailwind.css";
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));
const Products = React.lazy(() => import("./pages/Products"));

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const CustomerDetail = React.lazy(() => import("./pages/CustomerDetail"));
const Components = React.lazy(() => import("./pages/Components"));
const FiturXYZ = React.lazy(() => import("./pages/FiturXYZ"));
const Notes = React.lazy(() => import("./pages/Notes"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="customers/:id" element={<CustomerDetail />} />
          <Route path="customers" element={<Customers />} />
          <Route path="fitur-xyz" element={<FiturXYZ />} />
          <Route path="notes" element={<Notes />} />
          <Route path="components" element={<Components />} />
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
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="products" element={<Products />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
