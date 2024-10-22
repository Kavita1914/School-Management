import React, { useState } from "react";
import {
  Button,
  Card,
  Row,
  Col,
  CardTitle,
  Label,
  InputGroup,
  Input,
  InputGroupText,
} from "reactstrap";

const MyProfile = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [activeTab, setActiveTab] = useState("1");
  const _toggleTab = (newTab = "1") => {
    if (activeTab !== newTab) setActiveTab(newTab);
  };

  return (
    <>
      <section>
        <Row className="gy-3 gy-xl-0">
          <Col xl="4">
            <Card body className="profileCard">
              <div className="cardImg">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                  alt=""
                />
              </div>
              <CardTitle>John Doe</CardTitle>
              <span>jdoe@gmail.com</span>
            </Card>

            <hr />

            <Card body className="mt-2">
              {/* My Doc */}
              <h6>My Docs</h6>
              {/* Photo */}
              <div className="form-group">
                <Label>Photo</Label>
                <div className="customFileUpload">
                  <Input type="file" id="customFileUpload" />
                  {true ? (
                    <Label for="customFileUpload" className="p-3">
                      <img
                        src={require("../../assets/img/uploadDoc.svg").default}
                        alt=""
                      />
                      <div className="customUploadText">
                        <h6>Upload Document</h6>
                        <span>File size must be less than 5mb</span>
                      </div>
                    </Label>
                  ) : (
                    <Label for="customFileUpload" className="uploaded p-3">
                      <img
                        src={
                          require("../../assets/img/sign-up-doc.svg").default
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

              {/* Address Proof */}
              <div className="form-group mb-0">
                <Label>Address Proof</Label>
                <div className="customFileUpload">
                  <Input type="file" id="customFileUpload" />
                  {false ? (
                    <Label for="customFileUpload" className="p-3">
                      <img
                        src={require("../../assets/img/uploadDoc.svg").default}
                        alt=""
                      />
                      <div className="customUploadText">
                        <h6>Upload Document</h6>
                        <span>File size must be less than 5mb</span>
                      </div>
                    </Label>
                  ) : (
                    <Label for="customFileUpload" className="uploaded p-3">
                      <img
                        src={
                          require("../../assets/img/sign-up-doc.svg").default
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
            </Card>
          </Col>
          <Col xl="8">
            <Card body>
              <div>
                <h6>Basic Info</h6>

                <Row>
                  <Col md="6" lg="4">
                    {/* name */}
                    <div className="form-group">
                      <Label>Name</Label>
                      <Input placeholder="Enter" />
                    </div>
                  </Col>
                  <Col md="6" lg="4">
                    {/* Email */}
                    <div className="form-group">
                      <Label>Email</Label>
                      <Input placeholder="Enter" />
                    </div>
                  </Col>
                  <Col md="6" lg="4">
                    {/* phone number */}
                    <div className="form-group">
                      <Label>Phone Number</Label>
                      <Input placeholder="Enter" />
                    </div>
                  </Col>
                  <Col md="6" lg="4">
                    {/* Year of Birth */}
                    <div className="form-group">
                      <Label>Year of Birth</Label>
                      <Input type="select">
                        <option>Select</option>
                      </Input>
                    </div>
                  </Col>
                  <Col md="6" lg="4">
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
                  <Input type="textarea" placeholder="Enter" />
                </div>

                <Row className="gy-3 gy-xl-0">
                  <Col lg="6" xl="4">
                    {/* City */}
                    <div className="form-group mb-0">
                      <Label>City</Label>
                      <Input type="select">
                        <option>Select</option>
                      </Input>
                    </div>
                  </Col>
                  <Col lg="6" xl="4">
                    {/* State */}
                    <div className="form-group mb-0">
                      <Label>State</Label>
                      <Input type="select">
                        <option>Select</option>
                      </Input>
                    </div>
                  </Col>
                  <Col lg="6" xl="4">
                    {/* Zip */}
                    <div className="form-group mb-0">
                      <Label>Zip</Label>
                      <Input placeholder="Enter" />
                    </div>
                  </Col>
                </Row>
              </div>
            </Card>
          </Col>
        </Row>

        {/* submit button */}
        <div className="d-flex justify-content-center mt-5">
          <Button color="primary" className="btn-submit">
            Save
          </Button>
        </div>
      </section>
    </>
  );
};

export default MyProfile;
