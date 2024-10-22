import React, { useState } from "react";
import {
  Button,
  Card,
  CardTitle,
  Col,
  Form,
  Input,
  Label,
  List,
  Row,
  UncontrolledTooltip,
} from "reactstrap";
import PublicFooter from "../../containers/Public/PublicFooter";

const MembershipPage = () => {
  return (
    <>
      <div className="authWrapper">
        <div className="loginWrap membership flex-column">
          <div className="authWrapper-banner">
            <h2>Start Your Basic Membership</h2>
          </div>

          {/* cards */}
          <section className="mergeDualCard">
            <Card body className="shadow">
              <Row>
                <Col md="12" xl="6">
                  <CardTitle>Payment Details</CardTitle>

                  <Form>
                    {/* Card Number */}
                    <div className="form-group">
                      <Label>Card Number</Label>
                      <Input placeholder="Enter" />
                    </div>

                    <Row>
                      <Col md="6">
                        {/* Expiry */}
                        <div className="form-group">
                          <Label>Expiry</Label>
                          <Input type="date" />
                        </div>
                      </Col>
                      <Col md="6">
                        {/* CVV */}
                        <div className="form-group">
                          <Label className="d-inline-flex align-items-center justify-content-between w-100">
                            CVV
                            <i
                              style={{ display: "inline-block" }}
                              className="fa fa-info-circle ms-2 text-primary"
                              id="UncontrolledTooltipExample"
                            ></i>
                            <UncontrolledTooltip
                              placement="left"
                              autohide={false}
                              target="UncontrolledTooltipExample"
                            >
                              Last 3 digits on the back of your card
                            </UncontrolledTooltip>
                          </Label>

                          <Input placeholder="Enter" />
                        </div>
                      </Col>
                      <Col md="6">
                        {/* Country */}
                        <div className="form-group">
                          <Label>Country</Label>
                          <Input type="select">
                            <option>USA</option>
                          </Input>
                        </div>
                      </Col>
                      <Col md="6">
                        {/* Zip */}
                        <div className="form-group">
                          <Label>Zip</Label>
                          <Input placeholder="Enter" />
                        </div>
                      </Col>
                    </Row>
                  </Form>

                  {/* Monthly Fee */}
                  <div className="mt-3">
                    <div className="d-flex justify-content-between mb-1">
                      <p className="text-dark">Monthly Fee</p>
                      <p className="text-dark">$50</p>
                    </div>
                    <p>Next payment $50 on July 10, 2023</p>
                  </div>

                  {/* Payment Due Today */}
                  <div className="mt-3">
                    <div className="d-flex justify-content-between mb-1">
                      <p className="text-dark">Payment Due Today</p>
                      <p className="text-dark">$50</p>
                    </div>
                    <p>Taxes Encluded</p>
                  </div>

                  {/* submit button */}
                  <Button color="primary" className="btn-submit mt-4">
                    Make Payment
                  </Button>
                </Col>
                <Col md="12" xl="6">
                  <CardTitle>Billing Address</CardTitle>

                  <Form>
                    {/* Full Name */}
                    <div className="form-group">
                      <Label>Full Name</Label>
                      <Input placeholder="Enter" />
                    </div>
                    {/* Billing Address */}
                    <div className="form-group">
                      <Label>Billing Address</Label>
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
                  </Form>

                  <hr />

                  <section className="features-list inline-list mt-4 mb-0">
                    <h6>Features</h6>
                    <List className="mt-0">
                      <li>
                        <img
                          src={
                            require("../../assets/img/successCheck.svg").default
                          }
                          alt=""
                        />
                        <span>10 AI Disputes</span>
                      </li>
                      <li>
                        <img
                          src={
                            require("../../assets/img/successCheck.svg").default
                          }
                          alt=""
                        />
                        <span>2 Monthly Reports</span>
                      </li>
                      <li>
                        <img
                          src={
                            require("../../assets/img/successCheck.svg").default
                          }
                          alt=""
                        />
                        <span>Identity Theft Insurance</span>
                      </li>
                      <li>
                        <img
                          src={
                            require("../../assets/img/successCheck.svg").default
                          }
                          alt=""
                        />
                        <span>Standard report</span>
                      </li>
                    </List>

                    <Button color="link" className="p-0 h-auto mt-3">
                      Modify Plan
                    </Button>
                  </section>
                </Col>
              </Row>
            </Card>
          </section>
        </div>

        {/* footer */}
        <PublicFooter />
      </div>
    </>
  );
};

export default MembershipPage;
