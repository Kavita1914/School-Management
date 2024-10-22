import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "reactstrap";

const DashboardHeader = ({ isShow, setIsShow }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const _innerHeader = () => {
    if (location?.pathname === "/dashboard") {
      return (
        <div className="innerHeader">
          <h2>Dashboard</h2>
          <div>
            <Button color="primary" onClick={() => navigate("/credit-report")}>
              Upload New Report
            </Button>
          </div>
        </div>
      );
    } else if (location?.pathname === "/credit-report") {
      return (
        <div className="innerHeader">
          <h2>Credit Report Dates 1st March, 2023</h2>
        </div>
      );
    } else if (location?.pathname === "/payment") {
      return (
        <div className="innerHeader">
          <h2>Payment</h2>
        </div>
      );
    } else if (location?.pathname === "/my-profile") {
      return (
        <div className="innerHeader">
          <h2>My Profile</h2>
        </div>
      );
    } else if (location?.pathname === "/manage-subscription") {
      return (
        <div className="innerHeader">
          <h2>Subscription</h2>
        </div>
      );
    } else if (location?.pathname === "/disputes") {
      return (
        <div className="innerHeader">
          <h2>Disputes</h2>
        </div>
      );
    } else {
      return <div className="innerHeader"></div>;
    }
  };

  useEffect(() => {
    _innerHeader();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <>
      <div className="projectHeader">
        {/* <div>
          <Button
            onClick={() => _toggleSidebar()}
            className="order-md-1 toggleIcon "
          >
            <span></span>
          </Button>
          <NavbarBrand onClick={() => navigate("/")} className="order-1">
            <img
              src={require("../../assets/img/company-logo.png")}
              alt="Logo"
            />
          </NavbarBrand>
        </div> */}

        {/* page title */}
        {_innerHeader()}

        <div className="right">
          <Button color="link" className="bellIcon active hoverBtn">
            <img
              src={require("../../assets/img/notification.svg").default}
              alt=""
            />
          </Button>
          <div
            className="userInfo ms-2"
            onClick={() => navigate("/my-profile")}
          >
            <div className="userAvatar">
              <img
                src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                alt="Profile"
              />
            </div>
            <div className="userName">John Doe</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHeader;
