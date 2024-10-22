import React from "react";
import { Button, ListGroup, ListGroupItem, NavbarBrand } from "reactstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { logout } from "../../helper-methods";
const DashboardSidebar = ({ isShow, setIsShow }) => {
  const navigate = useNavigate();
  const _logout = () => {
    logout(navigate);
  };
  const location = useLocation();
  // menu
  const _isActiveTab = (route) => {
    return location?.pathname === route ? true : false;
  };

  const _toggleSidebar = () => {
    setIsShow(!isShow);
  };

  const menus = ["dashboard", "disputes"];
  return (
    <>
      {/* add show class after click on bar icon  */}
      <div
        className={`sidebarWrapper show ${isShow ? "show" : ""}`}
        onClick={() => _toggleSidebar()}
      >
        <div className="sidebarInner pb-4">
          <NavbarBrand
            onClick={() => navigate("/")}
            className="py-4 px-3 d-flex justify-content-center"
            style={{ borderBottom: "1px solid #EBEBEB", marginBottom: "30px" }}
          >
            <img
              src={require("../../assets/img/company-logo.png")}
              alt="Logo"
              width="150px"
            />
          </NavbarBrand>

          <div
            className="d-flex flex-column justify-content-between px-3"
            style={{ flex: "1" }}
          >
            <div className="sidebarMenu">
              <ListGroup>
                <ListGroupItem
                  className={_isActiveTab("/dashboard") ? "active" : ""}
                  onClick={() => navigate("/dashboard")}
                >
                  {_isActiveTab("/dashboard") ? (
                    <img
                      src={require("../../assets/img/SidebarMenu/dashboardActive.png")}
                      alt=""
                    />
                  ) : (
                    <img
                      src={require("../../assets/img/SidebarMenu/dashboard.png")}
                      alt=""
                    />
                  )}

                  <span>Dashboard</span>
                </ListGroupItem>
                <ListGroupItem
                  className={_isActiveTab("/disputes") ? "active" : ""}
                  onClick={() => navigate("/disputes")}
                >
                  {_isActiveTab("/disputes") ? (
                    <img
                      src={require("../../assets/img/SidebarMenu/disputesActive.png")}
                      alt=""
                    />
                  ) : (
                    <img
                      src={require("../../assets/img/SidebarMenu/disputes.png")}
                      alt=""
                    />
                  )}
                  <span>Disputes</span>
                </ListGroupItem>
                <ListGroupItem
                  className={_isActiveTab("/payment") ? "active" : ""}
                  onClick={() => navigate("/payment")}
                >
                  {_isActiveTab("/payment") ? (
                    <img
                      src={require("../../assets/img/SidebarMenu/paymentActive.png")}
                      alt=""
                    />
                  ) : (
                    <img
                      src={require("../../assets/img/SidebarMenu/payment.png")}
                      alt=""
                    />
                  )}
                  <span>Payment</span>
                </ListGroupItem>
                <ListGroupItem
                  className={
                    _isActiveTab("/manage-subscription") ? "active" : ""
                  }
                  onClick={() => navigate("/manage-subscription")}
                >
                  {_isActiveTab("/manage-subscription") ? (
                    <img
                      src={require("../../assets/img/SidebarMenu/subscriptionActive.png")}
                      alt=""
                    />
                  ) : (
                    <img
                      src={require("../../assets/img/SidebarMenu/subscription.png")}
                      alt=""
                    />
                  )}
                  <span>Subscription</span>
                </ListGroupItem>
              </ListGroup>
            </div>

            <div className="sidebarTraining">
              <div>
                <img
                  src={require("../../assets/img/online-video.svg").default}
                  alt=""
                />
                <p>Basic Training</p>

                <Button>Learn More</Button>
              </div>
            </div>

            <div className="sidebarMenu">
              <ListGroup>
                <ListGroupItem onClick={() => _logout()}>
                  <img
                    src={require("../../assets/img/logout.svg").default}
                    alt=""
                  />
                  <span>Logout</span>
                </ListGroupItem>
              </ListGroup>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardSidebar;
