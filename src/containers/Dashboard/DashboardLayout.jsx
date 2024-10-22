import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import ProtectedRoute from "../../components/routes/ProtectedRoute";
import DashboardPage from "../../pages/protected/DashboardPage";
import TabsDesign from "../../pages/protected/TabsDesign";
import MediaQueueViewer from "../MediaQueueViewer";
import DashboardFooter from "./DashboardFooter";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
import CreditReport from "../../pages/protected/CreditReport";
import MyProfile from "../../pages/protected/MyProfile";
import ManageSubscription from "../../pages/protected/ManageSubscription";
import Disputes from "../../pages/protected/Disputes";
import Payment from "../../pages/protected/Payment";

const DashboardLayout = ({ props }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <div className="mainWrapper">
        <DashboardSidebar isShow={isShow} setIsShow={setIsShow} />
        <DashboardHeader isShow={isShow} setIsShow={setIsShow} />
        <div className="innerWrapper">
          <Routes>
            <Route
              path=""
              element={<ProtectedRoute redirectRoute={"/login"} />}
            >
              <Route exact path="/dashboard" element={<DashboardPage />} />
              <Route exact path="/credit-report" element={<CreditReport />} />
              <Route exact path="/my-profile" element={<MyProfile />} />
              <Route exact path="/disputes" element={<Disputes />} />
              <Route exact path="/payment" element={<Payment />} />
              <Route
                exact
                path="/manage-subscription"
                element={<ManageSubscription />}
              />
              <Route exact path="/tabs" element={<TabsDesign />} />
            </Route>

            <Route path="*" element={<Navigate replace to="/dashboard" />} />
          </Routes>

          <MediaQueueViewer />
        </div>

        <DashboardFooter />
      </div>
    </>
  );
};

export default DashboardLayout;
