import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
import Loading from "./components/Loading";
import ProtectedRoute from "./components/ProtectedRoute";
import RoleRedirect from "./components/RoleRedirect";
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
        <Route element={<ProtectedRoute roles={["Admin", "Member"]} />}>
          <Route path="/" element={<RoleRedirect />} />
        </Route>

        <Route element={<ProtectedRoute roles={["Admin"]} />}>
          <Route element={<MainLayout />}>
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/orders" element={<Orders />} />
            <Route path="/admin/customers" element={<Customers />} />
            <Route path="/admin/customers/:id" element={<CustomerDetail />} />
            <Route path="/admin/products" element={<Products />} />
            <Route path="/admin/products/:id" element={<ProductDetail />} />
            <Route path="/admin/fitur-xyz" element={<FiturXYZ />} />
            <Route path="/admin/notes" element={<Notes />} />
            <Route path="/admin/components" element={<Components />} />
            <Route
              path="/admin/error/400"
              element={
                <ErrorPage
                  errorCode={400}
                  errorTitle="Bad Request"
                  errorDescription="The server cannot process the request due to client error (e.g., malformed request syntax)."
                />
              }
            />
            <Route
              path="/admin/error/401"
              element={
                <ErrorPage
                  errorCode={401}
                  errorTitle="Unauthorized"
                  errorDescription="You need to be authenticated untuk mengakses resource ini."
                />
              }
            />
            <Route
              path="/admin/error/403"
              element={
                <ErrorPage
                  errorCode={403}
                  errorTitle="Forbidden"
                  errorDescription="You do not have permission to access this resource."
                />
              }
            />
          </Route>
        </Route>

        <Route element={<ProtectedRoute roles={["Member"]} />}>
          <Route element={<MainLayout />}>
            <Route path="/member" element={<Dashboard />} />
            <Route path="/member/products" element={<Products />} />
            <Route path="/member/products/:id" element={<ProductDetail />} />
            <Route path="/member/orders" element={<Orders />} />
          </Route>
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
