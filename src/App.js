import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";

import FullPageLoader from "./containers/FullPageLoader";
import ErrorNotFound from "./components/ErrorNotFound";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import PublicRoute from "./components/routes/PublicRoute";
import DashboardLayout from "./containers/Dashboard/DashboardLayout";
import LoginPage from "./pages/public/LoginPage";
import ForgotPasswordPage from "./pages/public/ForgotPasswordPage";
import ResetPasswordPage from "./pages/public/ResetPasswordPage";
import SignUpPage from "./pages/public/SignUpPage";
import SubscriptionPage from "./pages/public/Subscription";
import MembershipPage from "./pages/public/MembershipPage";

const App = () => {
  return (
    <Router>
      <>
        <FullPageLoader />
        <Toaster
          position="bottom-right"
          reverseOrder={false}
          toastOptions={{
            style: {
              color: "#666",
              fontSize: 14,
              letterSpacing: 0.3,
              // add the font-family to be used in the project here
              fontFamily: "Poppins",
            },
          }}
        />
        <Routes>
          <Route path="" element={<PublicRoute redirectRoute={"/dashboard"} />}>
            <Route exact path="/login" element={<LoginPage />} />
            <Route
              exact
              path="/forgot-password"
              element={<ForgotPasswordPage />}
            />
            <Route
              exact
              path="/reset-password"
              element={<ResetPasswordPage />}
            />
            <Route exact path="/sign-up" element={<SignUpPage />} />
            <Route exact path="/subscription" element={<SubscriptionPage />} />
            <Route exact path="/membership" element={<MembershipPage />} />

            <Route index element={<Navigate replace to="/login" />} />
          </Route>

          <Route path="" element={<ProtectedRoute redirectRoute={"/login"} />}>
            <Route path="/*" element={<DashboardLayout />} />
          </Route>

          <Route path="*" element={<Navigate replace to="/" />} />

          <Route element={<ErrorNotFound />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
