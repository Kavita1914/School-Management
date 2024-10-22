import React, { useState } from "react";
import {
  Button,
  Row,
  Col,
  Card,
  CardTitle,
  Table,
  List,
  NavLink,
  UncontrolledTooltip,
  Label,
  Input,
} from "reactstrap";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import PaginatedItems from "../../components/PaginatedItems";
import ReactApexChart from "react-apexcharts";

const DashboardPage = () => {
  const [chartOptions, setChartOptions] = useState({
    series: [
      {
        name: "series1",
        data: [300, 550, 500, 450, 700, 450, 600],
      },
      {
        name: "series2",
        data: [600, 550, 350, 350, 500, 650, 700],
      },
    ],
    options: {
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "month",
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      tooltip: {
        x: {
          format: "MM",
        },
      },
    },
  });

  return (
    <>
      {/* Based on generation of latest report */}
      <section>
        <h6>Based on generation of latest report</h6>

        {/* cards */}
        <Row className="gy-4">
          <Col xl="4" lg="6">
            <Card body className="shadow">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex flex-column">
                  <span className="text-muted fs-16">Transunion</span>
                  <strong className="fs-18">300-850</strong>
                  <small className="text-muted fs-14 mt-2">
                    As of 1st April, 2023
                  </small>
                </div>

                <CircularProgressbar
                  value="70"
                  text="750"
                  className="success"
                  styles={buildStyles({
                    strokeLinecap: "round",
                  })}
                />
              </div>
            </Card>
          </Col>
          <Col xl="4" lg="6">
            <Card body className="shadow">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex flex-column">
                  <span className="text-muted fs-16">Experian</span>
                  <strong className="fs-18">300-850</strong>
                  <small className="text-muted fs-14 mt-2">
                    As of 1st April, 2023
                  </small>
                </div>

                <CircularProgressbar
                  value="50"
                  text="600"
                  className="warning"
                  styles={buildStyles({
                    strokeLinecap: "round",
                  })}
                />
              </div>
            </Card>
          </Col>
          <Col xl="4" lg="6">
            <Card body className="shadow">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex flex-column">
                  <span className="text-muted fs-16">Equifax</span>
                  <strong className="fs-18">300-850</strong>
                  <small className="text-muted fs-14 mt-2">
                    As of 1st April, 2023
                  </small>
                </div>

                <CircularProgressbar
                  value="35"
                  text="300"
                  className="danger"
                  styles={buildStyles({
                    strokeLinecap: "round",
                  })}
                />
              </div>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Repair Activity */}
      <section className="repair-activity">
        <h6>Repair Activity</h6>
        <Row className="gy-4">
          <Col xl="4" lg="6">
            <Card body>
              <List>
                <li>
                  <h6>Today</h6>
                  <List>
                    <li className="sent">
                      <div className="cardBox">
                        <div className="imgBox">
                          <img
                            src={
                              require("../../assets/img/high-quality.svg")
                                .default
                            }
                            alt=""
                          />
                        </div>
                        <div className="textBox">
                          <NavLink to="" id="UncontrolledTooltipExample1">
                            Certified Letter Sent
                            <UncontrolledTooltip
                              placement="top"
                              autohide={false}
                              target="UncontrolledTooltipExample1"
                            >
                              Dispute-Credit Limit
                            </UncontrolledTooltip>
                          </NavLink>
                        </div>
                      </div>
                    </li>
                    <li className="received">
                      <div className="cardBox">
                        <div className="imgBox">
                          <img
                            src={
                              require("../../assets/img/new-email.svg").default
                            }
                            alt=""
                          />
                        </div>
                        <div className="textBox">
                          <NavLink to="" id="UncontrolledTooltipExample2">
                            Response Received
                            <UncontrolledTooltip
                              placement="top"
                              autohide={false}
                              target="UncontrolledTooltipExample2"
                            >
                              Dispute-Credit Limit
                            </UncontrolledTooltip>
                          </NavLink>
                        </div>
                      </div>
                    </li>
                    <li className="sent">
                      <div className="cardBox">
                        <div className="imgBox">
                          <img
                            src={
                              require("../../assets/img/email-sent.svg").default
                            }
                            alt=""
                          />
                        </div>
                        <div className="textBox">
                          <NavLink to="" id="UncontrolledTooltipExample3">
                            Letter Sent
                            <UncontrolledTooltip
                              placement="top"
                              autohide={false}
                              target="UncontrolledTooltipExample3"
                            >
                              Dispute-Credit Limit
                            </UncontrolledTooltip>
                          </NavLink>
                        </div>
                      </div>
                    </li>
                    <li className="sent">
                      <div className="cardBox">
                        <div className="imgBox">
                          <img
                            src={
                              require("../../assets/img/email-sent.svg").default
                            }
                            alt=""
                          />
                        </div>
                        <div className="textBox">
                          <NavLink to="" id="UncontrolledTooltipExample4">
                            Letter Sent
                            <UncontrolledTooltip
                              placement="top"
                              autohide={false}
                              target="UncontrolledTooltipExample4"
                            >
                              Dispute-Account Number, High Credit
                            </UncontrolledTooltip>
                          </NavLink>
                        </div>
                      </div>
                    </li>
                    <li className="received">
                      <div className="cardBox">
                        <div className="imgBox">
                          <img
                            src={
                              require("../../assets/img/new-email.svg").default
                            }
                            alt=""
                          />
                        </div>
                        <div className="textBox">
                          <NavLink to="" id="UncontrolledTooltipExample5">
                            Response Received
                            <UncontrolledTooltip
                              placement="top"
                              autohide={false}
                              target="UncontrolledTooltipExample5"
                            >
                              Dispute-Credit Limit
                            </UncontrolledTooltip>
                          </NavLink>
                        </div>
                      </div>
                    </li>
                  </List>
                </li>
                <li>
                  <h6>Yesterday</h6>
                  <List>
                    <li className="received">
                      <div className="cardBox">
                        <div className="imgBox">
                          <img
                            src={require("../../assets/img/warning.png")}
                            alt=""
                          />
                        </div>
                        <div className="textBox">
                          <NavLink to="" id="UncontrolledTooltipExample6">
                            Dispute Suggested
                            <UncontrolledTooltip
                              placement="top"
                              autohide={false}
                              target="UncontrolledTooltipExample6"
                            >
                              Dispute-Credit Limit
                            </UncontrolledTooltip>
                          </NavLink>
                        </div>
                      </div>

                      <List>
                        <li className="primary">
                          <div className="cardBox">
                            <div className="imgBox">
                              <img
                                src={
                                  require("../../assets/img/check.svg").default
                                }
                                alt=""
                              />
                            </div>
                            <div className="textBox">
                              <p>Account Number High</p>
                            </div>
                          </div>
                        </li>
                        <li className="primary">
                          <div className="cardBox">
                            <div className="imgBox">
                              <img
                                src={
                                  require("../../assets/img/check.svg").default
                                }
                                alt=""
                              />
                            </div>
                            <div className="textBox">
                              <p>High Credit</p>
                            </div>
                          </div>
                        </li>
                        <li className="danger">
                          <div className="cardBox">
                            <div className="imgBox">
                              <img
                                src={
                                  require("../../assets/img/not.svg").default
                                }
                                alt=""
                              />
                            </div>
                            <Button
                              color="link"
                              className="h-auto px-0 fw-normal"
                            >
                              Credit Limit
                            </Button>
                          </div>
                        </li>
                      </List>
                    </li>
                    <li className="received">
                      <div className="cardBox">
                        <div className="imgBox">
                          <img
                            src={
                              require("../../assets/img/debit-card.svg").default
                            }
                            alt=""
                          />
                        </div>
                        <div className="textBox">
                          <NavLink to="" id="UncontrolledTooltipExample7">
                            Credit Reported Dated
                            <UncontrolledTooltip
                              placement="top"
                              autohide={false}
                              target="UncontrolledTooltipExample7"
                            >
                              Dispute-Credit Limit
                            </UncontrolledTooltip>
                          </NavLink>
                        </div>
                      </div>
                    </li>
                  </List>
                </li>
                <li>
                  <h6>Last 7 days</h6>
                  <List>
                    <li className="sent">
                      <div className="cardBox">
                        <div className="imgBox">
                          <img
                            src={
                              require("../../assets/img/high-quality.svg")
                                .default
                            }
                            alt=""
                          />
                        </div>
                        <div className="textBox">
                          <NavLink to="" id="UncontrolledTooltipExample8">
                            Certified Letter Sent
                            <UncontrolledTooltip
                              placement="top"
                              autohide={false}
                              target="UncontrolledTooltipExample8"
                            >
                              Dispute-Credit Limit
                            </UncontrolledTooltip>
                          </NavLink>
                          <small>Jan 15, 2023</small>
                        </div>
                      </div>
                    </li>
                    <li className="received">
                      <div className="cardBox">
                        <div className="imgBox">
                          <img
                            src={
                              require("../../assets/img/new-email.svg").default
                            }
                            alt=""
                          />
                        </div>
                        <div className="textBox">
                          <NavLink to="" id="UncontrolledTooltipExample9">
                            Response Received
                            <UncontrolledTooltip
                              placement="top"
                              autohide={false}
                              target="UncontrolledTooltipExample9"
                            >
                              Dispute-Credit Limit
                            </UncontrolledTooltip>
                          </NavLink>
                          <small>Jan 15, 2023</small>
                        </div>
                      </div>
                    </li>
                    <li className="sent">
                      <div className="cardBox">
                        <div className="imgBox">
                          <img
                            src={
                              require("../../assets/img/email-sent.svg").default
                            }
                            alt=""
                          />
                        </div>
                        <div className="textBox">
                          <NavLink to="" id="UncontrolledTooltipExample9">
                            Letter Sent
                            <UncontrolledTooltip
                              placement="top"
                              autohide={false}
                              target="UncontrolledTooltipExample9"
                            >
                              Dispute-Credit Limit
                            </UncontrolledTooltip>
                          </NavLink>
                          <small>Jan 15, 2023</small>
                        </div>
                      </div>
                    </li>
                    <li className="sent">
                      <div className="cardBox">
                        <div className="imgBox">
                          <img
                            src={
                              require("../../assets/img/email-sent.svg").default
                            }
                            alt=""
                          />
                        </div>
                        <div className="textBox">
                          <NavLink to="" id="UncontrolledTooltipExample10">
                            Letter Sent
                            <UncontrolledTooltip
                              placement="top"
                              autohide={false}
                              target="UncontrolledTooltipExample10"
                            >
                              Dispute-Account Number, High Credit
                            </UncontrolledTooltip>
                          </NavLink>
                          <small>Jan 15, 2023</small>
                        </div>
                      </div>
                    </li>
                    <li className="received">
                      <div className="cardBox">
                        <div className="imgBox">
                          <img
                            src={
                              require("../../assets/img/new-email.svg").default
                            }
                            alt=""
                          />
                        </div>
                        <div className="textBox">
                          <NavLink to="" id="UncontrolledTooltipExample11">
                            Response Received
                            <UncontrolledTooltip
                              placement="top"
                              autohide={false}
                              target="UncontrolledTooltipExample11"
                            >
                              Dispute-Credit Limit
                            </UncontrolledTooltip>
                          </NavLink>
                          <small>Jan 15, 2023</small>
                        </div>
                      </div>
                    </li>
                  </List>
                </li>
              </List>

              <Button color="link" className="h-auto mt-4">
                See More <i className="fa fa-chevron-down"></i>
              </Button>
            </Card>
          </Col>
          <Col xl="4" lg="6">
            <Card body>
              <List>
                <li>
                  <h6>Today</h6>
                  <List>
                    <li className="sent">
                      <div className="cardBox">
                        <div className="imgBox">
                          <img
                            src={
                              require("../../assets/img/high-quality.svg")
                                .default
                            }
                            alt=""
                          />
                        </div>
                        <div className="textBox">
                          <NavLink to="" id="UncontrolledTooltipExample1">
                            Certified Letter Sent
                            <UncontrolledTooltip
                              placement="top"
                              autohide={false}
                              target="UncontrolledTooltipExample1"
                            >
                              Dispute-Credit Limit
                            </UncontrolledTooltip>
                          </NavLink>
                        </div>
                      </div>
                    </li>
                    <li className="received">
                      <div className="cardBox">
                        <div className="imgBox">
                          <img
                            src={
                              require("../../assets/img/new-email.svg").default
                            }
                            alt=""
                          />
                        </div>
                        <div className="textBox">
                          <NavLink to="" id="UncontrolledTooltipExample2">
                            Response Received
                            <UncontrolledTooltip
                              placement="top"
                              autohide={false}
                              target="UncontrolledTooltipExample2"
                            >
                              Dispute-Credit Limit
                            </UncontrolledTooltip>
                          </NavLink>
                        </div>
                      </div>
                    </li>
                    <li className="sent">
                      <div className="cardBox">
                        <div className="imgBox">
                          <img
                            src={require("../../assets/img/email-sent.svg")}
                            alt=""
                          />
                        </div>
                        <div className="textBox">
                          <NavLink to="" id="UncontrolledTooltipExample3">
                            Letter Sent
                            <UncontrolledTooltip
                              placement="top"
                              autohide={false}
                              target="UncontrolledTooltipExample3"
                            >
                              Dispute-Credit Limit
                            </UncontrolledTooltip>
                          </NavLink>
                        </div>
                      </div>
                    </li>
                    <li className="sent">
                      <div className="cardBox">
                        <div className="imgBox">
                          <img
                            src={require("../../assets/img/email-sent.svg")}
                            alt=""
                          />
                        </div>
                        <div className="textBox">
                          <NavLink to="" id="UncontrolledTooltipExample4">
                            Letter Sent
                            <UncontrolledTooltip
                              placement="top"
                              autohide={false}
                              target="UncontrolledTooltipExample4"
                            >
                              Dispute-Account Number, High Credit
                            </UncontrolledTooltip>
                          </NavLink>
                        </div>
                      </div>
                    </li>
                    <li className="received">
                      <div className="cardBox">
                        <div className="imgBox">
                          <img
                            src={
                              require("../../assets/img/new-email.svg").default
                            }
                            alt=""
                          />
                        </div>
                        <div className="textBox">
                          <NavLink to="" id="UncontrolledTooltipExample5">
                            Response Received
                            <UncontrolledTooltip
                              placement="top"
                              autohide={false}
                              target="UncontrolledTooltipExample5"
                            >
                              Dispute-Credit Limit
                            </UncontrolledTooltip>
                          </NavLink>
                        </div>
                      </div>
                    </li>
                  </List>
                </li>
                <li>
                  <h6>Yesterday</h6>
                  <List>
                    <li className="received">
                      <div className="cardBox">
                        <div className="imgBox">
                          <img
                            src={require("../../assets/img/warning.png")}
                            alt=""
                          />
                        </div>
                        <div className="textBox">
                          <NavLink to="" id="UncontrolledTooltipExample6">
                            Dispute Suggested
                            <UncontrolledTooltip
                              placement="top"
                              autohide={false}
                              target="UncontrolledTooltipExample6"
                            >
                              Dispute-Credit Limit
                            </UncontrolledTooltip>
                          </NavLink>
                        </div>
                      </div>

                      <List>
                        <li className="primary">
                          <div className="cardBox">
                            <div className="imgBox">
                              <img
                                src={
                                  require("../../assets/img/check.svg").default
                                }
                                alt=""
                              />
                            </div>
                            <div className="textBox">
                              <p>Account Number High</p>
                            </div>
                          </div>
                        </li>
                        <li className="primary">
                          <div className="cardBox">
                            <div className="imgBox">
                              <img
                                src={
                                  require("../../assets/img/check.svg").default
                                }
                                alt=""
                              />
                            </div>
                            <div className="textBox">
                              <p>High Credit</p>
                            </div>
                          </div>
                        </li>
                        <li className="danger">
                          <div className="cardBox">
                            <div className="imgBox">
                              <img
                                src={
                                  require("../../assets/img/not.svg").default
                                }
                                alt=""
                              />
                            </div>
                            <Button
                              color="link"
                              className="h-auto px-0 fw-normal"
                            >
                              Credit Limit
                            </Button>
                          </div>
                        </li>
                      </List>
                    </li>
                    <li className="received">
                      <div className="cardBox">
                        <div className="imgBox">
                          <img
                            src={
                              require("../../assets/img/debit-card.svg").default
                            }
                            alt=""
                          />
                        </div>
                        <div className="textBox">
                          <NavLink to="" id="UncontrolledTooltipExample7">
                            Credit Reported Dated
                            <UncontrolledTooltip
                              placement="top"
                              autohide={false}
                              target="UncontrolledTooltipExample7"
                            >
                              Dispute-Credit Limit
                            </UncontrolledTooltip>
                          </NavLink>
                        </div>
                      </div>
                    </li>
                  </List>
                </li>
                <li>
                  <h6>Last 7 days</h6>
                  <List>
                    <li className="sent">
                      <div className="cardBox">
                        <div className="imgBox">
                          <img
                            src={
                              require("../../assets/img/high-quality.svg")
                                .default
                            }
                            alt=""
                          />
                        </div>
                        <div className="textBox">
                          <NavLink to="" id="UncontrolledTooltipExample8">
                            Certified Letter Sent
                            <UncontrolledTooltip
                              placement="top"
                              autohide={false}
                              target="UncontrolledTooltipExample8"
                            >
                              Dispute-Credit Limit
                            </UncontrolledTooltip>
                          </NavLink>
                          <small>Jan 15, 2023</small>
                        </div>
                      </div>
                    </li>
                    <li className="received">
                      <div className="cardBox">
                        <div className="imgBox">
                          <img
                            src={
                              require("../../assets/img/new-email.svg").default
                            }
                            alt=""
                          />
                        </div>
                        <div className="textBox">
                          <NavLink to="" id="UncontrolledTooltipExample9">
                            Response Received
                            <UncontrolledTooltip
                              placement="top"
                              autohide={false}
                              target="UncontrolledTooltipExample9"
                            >
                              Dispute-Credit Limit
                            </UncontrolledTooltip>
                          </NavLink>
                          <small>Jan 15, 2023</small>
                        </div>
                      </div>
                    </li>
                    <li className="sent">
                      <div className="cardBox">
                        <div className="imgBox">
                          <img
                            src={
                              require("../../assets/img/email-sent.svg").default
                            }
                            alt=""
                          />
                        </div>
                        <div className="textBox">
                          <NavLink to="" id="UncontrolledTooltipExample9">
                            Letter Sent
                            <UncontrolledTooltip
                              placement="top"
                              autohide={false}
                              target="UncontrolledTooltipExample9"
                            >
                              Dispute-Credit Limit
                            </UncontrolledTooltip>
                          </NavLink>
                          <small>Jan 15, 2023</small>
                        </div>
                      </div>
                    </li>
                    <li className="sent">
                      <div className="cardBox">
                        <div className="imgBox">
                          <img
                            src={
                              require("../../assets/img/email-sent.svg").default
                            }
                            alt=""
                          />
                        </div>
                        <div className="textBox">
                          <NavLink to="" id="UncontrolledTooltipExample10">
                            Letter Sent
                            <UncontrolledTooltip
                              placement="top"
                              autohide={false}
                              target="UncontrolledTooltipExample10"
                            >
                              Dispute-Account Number, High Credit
                            </UncontrolledTooltip>
                          </NavLink>
                          <small>Jan 15, 2023</small>
                        </div>
                      </div>
                    </li>
                    <li className="received">
                      <div className="cardBox">
                        <div className="imgBox">
                          <img
                            src={
                              require("../../assets/img/new-email.svg").default
                            }
                            alt=""
                          />
                        </div>
                        <div className="textBox">
                          <NavLink to="" id="UncontrolledTooltipExample11">
                            Response Received
                            <UncontrolledTooltip
                              placement="top"
                              autohide={false}
                              target="UncontrolledTooltipExample11"
                            >
                              Dispute-Credit Limit
                            </UncontrolledTooltip>
                          </NavLink>
                          <small>Jan 15, 2023</small>
                        </div>
                      </div>
                    </li>
                  </List>
                </li>
              </List>

              <Button color="link" className="h-auto mt-4">
                See More <i className="fa fa-chevron-down"></i>
              </Button>
            </Card>
          </Col>
          <Col xl="4" lg="6">
            <Card body>
              <List>
                <li>
                  <h6>Today</h6>
                  <List>
                    <li className="sent">
                      <div className="cardBox">
                        <div className="imgBox">
                          <img
                            src={
                              require("../../assets/img/high-quality.svg")
                                .default
                            }
                            alt=""
                          />
                        </div>
                        <div className="textBox">
                          <NavLink to="" id="UncontrolledTooltipExample1">
                            Certified Letter Sent
                            <UncontrolledTooltip
                              placement="top"
                              autohide={false}
                              target="UncontrolledTooltipExample1"
                            >
                              Dispute-Credit Limit
                            </UncontrolledTooltip>
                          </NavLink>
                        </div>
                      </div>
                    </li>
                    <li className="received">
                      <div className="cardBox">
                        <div className="imgBox">
                          <img
                            src={
                              require("../../assets/img/new-email.svg").default
                            }
                            alt=""
                          />
                        </div>
                        <div className="textBox">
                          <NavLink to="" id="UncontrolledTooltipExample2">
                            Response Received
                            <UncontrolledTooltip
                              placement="top"
                              autohide={false}
                              target="UncontrolledTooltipExample2"
                            >
                              Dispute-Credit Limit
                            </UncontrolledTooltip>
                          </NavLink>
                        </div>
                      </div>
                    </li>
                    <li className="sent">
                      <div className="cardBox">
                        <div className="imgBox">
                          <img
                            src={
                              require("../../assets/img/email-sent.svg").default
                            }
                            alt=""
                          />
                        </div>
                        <div className="textBox">
                          <NavLink to="" id="UncontrolledTooltipExample3">
                            Letter Sent
                            <UncontrolledTooltip
                              placement="top"
                              autohide={false}
                              target="UncontrolledTooltipExample3"
                            >
                              Dispute-Credit Limit
                            </UncontrolledTooltip>
                          </NavLink>
                        </div>
                      </div>
                    </li>
                    <li className="sent">
                      <div className="cardBox">
                        <div className="imgBox">
                          <img
                            src={
                              require("../../assets/img/email-sent.svg").default
                            }
                            alt=""
                          />
                        </div>
                        <div className="textBox">
                          <NavLink to="" id="UncontrolledTooltipExample4">
                            Letter Sent
                            <UncontrolledTooltip
                              placement="top"
                              autohide={false}
                              target="UncontrolledTooltipExample4"
                            >
                              Dispute-Account Number, High Credit
                            </UncontrolledTooltip>
                          </NavLink>
                        </div>
                      </div>
                    </li>
                    <li className="received">
                      <div className="cardBox">
                        <div className="imgBox">
                          <img
                            src={
                              require("../../assets/img/new-email.svg").default
                            }
                            alt=""
                          />
                        </div>
                        <div className="textBox">
                          <NavLink to="" id="UncontrolledTooltipExample5">
                            Response Received
                            <UncontrolledTooltip
                              placement="top"
                              autohide={false}
                              target="UncontrolledTooltipExample5"
                            >
                              Dispute-Credit Limit
                            </UncontrolledTooltip>
                          </NavLink>
                        </div>
                      </div>
                    </li>
                  </List>
                </li>
                <li>
                  <h6>Yesterday</h6>
                  <List>
                    <li className="received">
                      <div className="cardBox">
                        <div className="imgBox">
                          <img
                            src={require("../../assets/img/warning.png")}
                            alt=""
                          />
                        </div>
                        <div className="textBox">
                          <NavLink to="" id="UncontrolledTooltipExample6">
                            Dispute Suggested
                            <UncontrolledTooltip
                              placement="top"
                              autohide={false}
                              target="UncontrolledTooltipExample6"
                            >
                              Dispute-Credit Limit
                            </UncontrolledTooltip>
                          </NavLink>
                        </div>
                      </div>

                      <List>
                        <li className="primary">
                          <div className="cardBox">
                            <div className="imgBox">
                              <img
                                src={
                                  require("../../assets/img/check.svg").default
                                }
                                alt=""
                              />
                            </div>
                            <div className="textBox">
                              <p>Account Number High</p>
                            </div>
                          </div>
                        </li>
                        <li className="primary">
                          <div className="cardBox">
                            <div className="imgBox">
                              <img
                                src={
                                  require("../../assets/img/check.svg").default
                                }
                                alt=""
                              />
                            </div>
                            <div className="textBox">
                              <p>High Credit</p>
                            </div>
                          </div>
                        </li>
                        <li className="danger">
                          <div className="cardBox">
                            <div className="imgBox">
                              <img
                                src={
                                  require("../../assets/img/not.svg").default
                                }
                                alt=""
                              />
                            </div>
                            <Button
                              color="link"
                              className="h-auto px-0 fw-normal"
                            >
                              Credit Limit
                            </Button>
                          </div>
                        </li>
                      </List>
                    </li>
                    <li className="received">
                      <div className="cardBox">
                        <div className="imgBox">
                          <img
                            src={
                              require("../../assets/img/debit-card.svg").default
                            }
                            alt=""
                          />
                        </div>
                        <div className="textBox">
                          <NavLink to="" id="UncontrolledTooltipExample7">
                            Credit Reported Dated
                            <UncontrolledTooltip
                              placement="top"
                              autohide={false}
                              target="UncontrolledTooltipExample7"
                            >
                              Dispute-Credit Limit
                            </UncontrolledTooltip>
                          </NavLink>
                        </div>
                      </div>
                    </li>
                  </List>
                </li>
                <li>
                  <h6>Last 7 days</h6>
                  <List>
                    <li className="sent">
                      <div className="cardBox">
                        <div className="imgBox">
                          <img
                            src={
                              require("../../assets/img/high-quality.svg")
                                .default
                            }
                            alt=""
                          />
                        </div>
                        <div className="textBox">
                          <NavLink to="" id="UncontrolledTooltipExample8">
                            Certified Letter Sent
                            <UncontrolledTooltip
                              placement="top"
                              autohide={false}
                              target="UncontrolledTooltipExample8"
                            >
                              Dispute-Credit Limit
                            </UncontrolledTooltip>
                          </NavLink>
                          <small>Jan 15, 2023</small>
                        </div>
                      </div>
                    </li>
                    <li className="received">
                      <div className="cardBox">
                        <div className="imgBox">
                          <img
                            src={
                              require("../../assets/img/new-email.svg").default
                            }
                            alt=""
                          />
                        </div>
                        <div className="textBox">
                          <NavLink to="" id="UncontrolledTooltipExample9">
                            Response Received
                            <UncontrolledTooltip
                              placement="top"
                              autohide={false}
                              target="UncontrolledTooltipExample9"
                            >
                              Dispute-Credit Limit
                            </UncontrolledTooltip>
                          </NavLink>
                          <small>Jan 15, 2023</small>
                        </div>
                      </div>
                    </li>
                    <li className="sent">
                      <div className="cardBox">
                        <div className="imgBox">
                          <img
                            src={
                              require("../../assets/img/email-sent.svg").default
                            }
                            alt=""
                          />
                        </div>
                        <div className="textBox">
                          <NavLink to="" id="UncontrolledTooltipExample9">
                            Letter Sent
                            <UncontrolledTooltip
                              placement="top"
                              autohide={false}
                              target="UncontrolledTooltipExample9"
                            >
                              Dispute-Credit Limit
                            </UncontrolledTooltip>
                          </NavLink>
                          <small>Jan 15, 2023</small>
                        </div>
                      </div>
                    </li>
                    <li className="sent">
                      <div className="cardBox">
                        <div className="imgBox">
                          <img
                            src={
                              require("../../assets/img/email-sent.svg").default
                            }
                            alt=""
                          />
                        </div>
                        <div className="textBox">
                          <NavLink to="" id="UncontrolledTooltipExample10">
                            Letter Sent
                            <UncontrolledTooltip
                              placement="top"
                              autohide={false}
                              target="UncontrolledTooltipExample10"
                            >
                              Dispute-Account Number, High Credit
                            </UncontrolledTooltip>
                          </NavLink>
                          <small>Jan 15, 2023</small>
                        </div>
                      </div>
                    </li>
                    <li className="received">
                      <div className="cardBox">
                        <div className="imgBox">
                          <img
                            src={
                              require("../../assets/img/new-email.svg").default
                            }
                            alt=""
                          />
                        </div>
                        <div className="textBox">
                          <NavLink to="" id="UncontrolledTooltipExample11">
                            Response Received
                            <UncontrolledTooltip
                              placement="top"
                              autohide={false}
                              target="UncontrolledTooltipExample11"
                            >
                              Dispute-Credit Limit
                            </UncontrolledTooltip>
                          </NavLink>
                          <small>Jan 15, 2023</small>
                        </div>
                      </div>
                    </li>
                  </List>
                </li>
              </List>

              <Button color="link" className="h-auto mt-4">
                See More <i className="fa fa-chevron-down"></i>
              </Button>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Credit Items */}
      <section>
        <Card body>
          <CardTitle>Credit Items</CardTitle>

          <Table responsive>
            <thead>
              <tr>
                <th></th>
                <th>TransUnion</th>
                <th>Experian</th>
                <th>Equifax</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Positive</td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
              </tr>
              <tr>
                <td>Disputed</td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
              </tr>
              <tr>
                <td>Reapired</td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
              </tr>
              <tr>
                <td>Deleted</td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
              </tr>
            </tbody>
          </Table>

          {/* pagination */}
          <PaginatedItems itemsPerPage={4} />
        </Card>
      </section>

      {/* History */}
      <section>
        <Card body>
          <div className="d-flex justify-content-between align-items-center">
            <CardTitle>History</CardTitle>
            {/* Bureau */}
            <div className="form-group">
              <Label>Bureau</Label>
              <Input type="select" size="sm">
                <option>Select</option>
                <option>TransUnion</option>
                <option>Experian</option>
                <option>Equifax</option>
              </Input>
            </div>
          </div>

          <ReactApexChart
            options={chartOptions.options}
            series={chartOptions.series}
            type="area"
            height={350}
          />
        </Card>
      </section>
      {/* Reports */}
      <section>
        <Card body>
          <CardTitle>Reports</CardTitle>

          <Table responsive>
            <thead>
              <tr>
                <th>Date</th>
                <th>TransUnion</th>
                <th>Experian</th>
                <th>Equifax</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Apr 20, 2023</td>
                <td>591</td>
                <td>591</td>
                <td>591</td>
                <td>
                  <div className="action">
                    <Button color="link">
                      <i className="fa fa-eye"></i>
                    </Button>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>

          {/* pagination */}
          <PaginatedItems itemsPerPage={4} />
        </Card>
      </section>
    </>
  );
};

export default DashboardPage;
