import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Input,
  Form,
  Label,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  InputGroup,
  InputGroupText,
  Row,
  Col,
  Button,
  Progress,
} from "reactstrap";
import PublicFooter from "../../containers/Public/PublicFooter";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [activeTab, setActiveTab] = useState("1");
  const _toggleTab = (newTab = "1") => {
    if (activeTab !== newTab) setActiveTab(newTab);
  };

  return (
    <>
      <div className="authWrapper">
        <div className="loginWrap">
          <div className="leftWrapper justify-content-start">
            <div className="leftInnerWrapper">
              <h6 className="fs-6 text-center">Basic Info</h6>

              <div className="sign-up-info">
                <div className="sign-up-info-header">
                  <Nav pills>
                    <NavItem
                      className={activeTab === "1" ? "active" : ""}
                      onClick={() => _toggleTab("1")}
                    >
                      <NavLink>
                        {activeTab === "1" ? (
                          <img
                            src={
                              require("../../assets/img/sign-up-user.svg")
                                .default
                            }
                            alt=""
                          />
                        ) : (
                          <img
                            src={
                              require("../../assets/img/successCheck.svg")
                                .default
                            }
                            alt=""
                          />
                        )}
                      </NavLink>
                    </NavItem>
                    <NavItem
                      className={activeTab === "2" ? "active" : ""}
                      onClick={() => _toggleTab("2")}
                    >
                      <NavLink>
                        <img
                          src={
                            require("../../assets/img/sign-up-doc.svg").default
                          }
                          alt=""
                        />
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <Progress color="success" value={50} />
                </div>

                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1">
                    <Form>
                      <Row>
                        <Col md="6">
                          {/* name */}
                          <div className="form-group">
                            <Label>First Name</Label>
                            <Input placeholder="Enter" />
                          </div>
                        </Col>
                        <Col md="6">
                          {/* name */}
                          <div className="form-group">
                            <Label>Last Name</Label>
                            <Input placeholder="Enter" />
                          </div>
                        </Col>
                      </Row>
                      {/* email */}
                      <div className="form-group">
                        <Label>Email Address</Label>
                        <Input placeholder="Enter" />
                      </div>
                      {/* password */}
                      <div className="form-group">
                        <Label>Password</Label>
                        <InputGroup>
                          <Input
                            placeholder="Enter"
                            type={`${showPassword ? "text" : "password"}`}
                          />
                          <InputGroupText
                            className="cursorPointer"
                            onClick={() => {
                              setShowPassword(!showPassword);
                            }}
                          >
                            <i
                              className={`far ${
                                showPassword ? "fa-eye" : "fa-eye-slash"
                              }`}
                            />
                          </InputGroupText>
                        </InputGroup>
                      </div>
                      {/* contact number */}
                      <div className="form-group">
                        <Label>Contact Number</Label>
                        <InputGroup>
                          <InputGroupText className="cursorPointer">
                            +1
                          </InputGroupText>
                          <Input placeholder="Enter" type="text" />
                        </InputGroup>
                      </div>

                      <Row>
                        <Col md="6">
                          {/* Year of Birth */}
                          <div className="form-group">
                            <Label>Year of Birth</Label>
                            <Input type="select">
                              <option>Select</option>
                            </Input>
                          </div>
                        </Col>
                        <Col md="6">
                          {/* Last 4 SSN */}
                          <div className="form-group">
                            <Label>Last 4 SSN</Label>
                            <InputGroup>
                              <Input
                                placeholder="Enter"
                                type={`${showPassword ? "text" : "password"}`}
                              />
                              <InputGroupText
                                className="cursorPointer"
                                onClick={() => {
                                  setShowPassword(!showPassword);
                                }}
                              >
                                <i
                                  className={`far ${
                                    showPassword ? "fa-eye" : "fa-eye-slash"
                                  }`}
                                />
                              </InputGroupText>
                            </InputGroup>
                          </div>
                        </Col>
                      </Row>

                      {/* Current Address */}
                      <div className="form-group">
                        <Label>Current Address</Label>
                        <Input placeholder="Enter" />
                      </div>

                      <Row>
                        <Col md="4">
                          {/* City */}
                          <div className="form-group">
                            <Label>City</Label>
                            <Input type="select">
                              <option>Select</option>
                            </Input>
                          </div>
                        </Col>
                        <Col md="4">
                          {/* Country */}
                          <div className="form-group">
                            <Label>Country</Label>
                            <Input type="select">
                              <option>Select</option>
                            </Input>
                          </div>
                        </Col>
                        <Col md="4">
                          {/* Zip */}
                          <div className="form-group">
                            <Label>Zip</Label>
                            <Input placeholder="Enter" />
                          </div>
                        </Col>
                      </Row>

                      {/* submit button */}
                      <Button color="primary" className="btn-submit">
                        Next
                      </Button>

                      {/*infoText*/}
                      <div className="text-center fs-14 mt-3 fw-medium">
                        Already have an account?
                        <Link to="/login" className="ms-1">
                          Sign In
                        </Link>
                      </div>
                    </Form>
                  </TabPane>
                  <TabPane tabId="2">
                    <Form>
                      {/* Upload Photo ID (Drivers license) */}
                      <div className="form-group">
                        <Label>Upload Photo ID (Drivers license)</Label>
                        <div className="customFileUpload">
                          <Input type="file" id="customFileUpload" />
                          {true ? (
                            <Label for="customFileUpload">
                              <img
                                src={
                                  require("../../assets/img/uploadDoc.svg")
                                    .default
                                }
                                alt=""
                              />
                              <div className="customUploadText">
                                <h6>Upload Document</h6>
                                <span>File size must be less than 5mb</span>
                              </div>
                            </Label>
                          ) : (
                            <Label for="customFileUpload" className="uploaded">
                              <img
                                src={
                                  require("../../assets/img/sign-up-doc.svg")
                                    .default
                                }
                                alt=""
                              />
                              <div className="customUploadText">
                                <h6>Group 378961.svg</h6>
                                <span>File size must be less than 5mb</span>
                              </div>
                            </Label>
                          )}
                        </div>
                      </div>

                      {/* Upload Address Proof (Utility Bill) */}
                      <div className="form-group">
                        <Label>Upload Address Proof (Utility Bill)</Label>
                        <div className="customFileUpload">
                          <Input type="file" id="customFileUpload" />
                          {false ? (
                            <Label for="customFileUpload">
                              <img
                                src={
                                  require("../../assets/img/uploadDoc.svg")
                                    .default
                                }
                                alt=""
                              />
                              <div className="customUploadText">
                                <h6>Upload Document</h6>
                                <span>File size must be less than 5mb</span>
                              </div>
                            </Label>
                          ) : (
                            <Label for="customFileUpload" className="uploaded">
                              <img
                                src={
                                  require("../../assets/img/sign-up-doc.svg")
                                    .default
                                }
                                alt=""
                              />
                              <div className="customUploadText">
                                <h6>Group 378961.svg</h6>
                                <span>File size must be less than 5mb</span>
                              </div>
                            </Label>
                          )}
                        </div>
                      </div>

                      {/* submit button */}
                      <Button
                        color="primary"
                        className="btn-submit"
                        onClick={() => navigate("/subscription")}
                      >
                        Sign Up
                      </Button>

                      {/*infoText*/}
                      <div className="text-center fs-14 mt-3 fw-medium">
                        Already have an account?
                        <Link to="/login" className="ms-1">
                          Sign In
                        </Link>
                      </div>
                    </Form>
                  </TabPane>
                </TabContent>
              </div>
            </div>
          </div>
          <div className="rightWrapper">
            {/* logo */}
            <img
              src={require("../../assets/img/logo-white.png")}
              alt="Brand Logo"
              className="companyLogo"
            />
          </div>
        </div>

        {/* footer */}
        <PublicFooter />
      </div>
    </>
  );
};

export default SignUpPage;
