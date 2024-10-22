import React, { useState } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Button,
  Card,
  Table,
  Label,
  Input,
  InputGroup,
  InputGroupText,
  List,
} from "reactstrap";

import CustomDateRangePicker from "../../components/CustomDateRangePicker";
import { useNavigate } from "react-router-dom";
import AddNewCardModal from "../../components/modals/AddNewCardModal";

const Payment = () => {
  const navigate = useNavigate();
  // date range
  const [filters, setFilters] = useState({
    dateRange: {
      startDate: null,
      endDate: null,
    },
  });

  const _onDatesChange = (startDate = null, endDate = null) => {
    const newFilters = { ...filters };

    newFilters["dateRange"] = {
      startDate,
      endDate,
    };
    setFilters(newFilters);
  };

  const [isOpenModal, setIsOpenModal] = useState(false);
  const _toggleModal = (isOpenModal = false) => {
    setIsOpenModal(isOpenModal);
  };

  const [activeTab, setActiveTab] = useState("1");
  const _toggleTab = (newTab = "1") => {
    if (activeTab !== newTab) setActiveTab(newTab);
  };

  return (
    <>
      <div className="disputes_tab">
        <Nav pills>
          <NavItem>
            <NavLink
              className={activeTab === "1" ? "active" : ""}
              onClick={() => _toggleTab("1")}
            >
              Payment History
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab === "2" ? "active" : ""}
              onClick={() => _toggleTab("2")}
            >
              Payment Method
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            {/* filter */}
            <div className="filterWrapper">
              <div className="filterIcon">
                <i className="fas fa-filter" />
              </div>

              <div className="filterForm">
                <div className="formGroup">
                  <Label>Transaction Date</Label>
                  <CustomDateRangePicker
                    startDate={filters.dateRange.startDate}
                    endDate={filters.dateRange.endDate}
                    startDateId={"startDate_kpi_dashboard"}
                    endDateId={`endDate_kpi_dashboard`}
                    onDatesChange={(startDate, endDate) =>
                      _onDatesChange(startDate, endDate)
                    }
                  />
                </div>

                <div className="formGroup">
                  <Label>Transaction Type</Label>
                  <Input type="select">
                    <option>All</option>
                    <option>Basic Subscription</option>
                    <option>Premium Subscription</option>
                  </Input>
                </div>

                <div className="formGroup">
                  <Label>Status</Label>
                  <Input type="select">
                    <option>All</option>
                    <option>Active</option>
                    <option>Inactive</option>
                  </Input>
                </div>

                {/* search */}
                <div className="formGroup searchbar">
                  <Label>Search</Label>
                  <InputGroup>
                    <Input placeholder="Search..." />
                    <InputGroupText>
                      <i className="fas fa-search" />
                    </InputGroupText>
                  </InputGroup>
                </div>
              </div>
            </div>

            {/* Personal Information */}
            <section>
              <h6>Personal Information</h6>
              <Card body>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Transaction Type</th>
                      <th>Transaction ID</th>
                      <th>Payment Method</th>
                      <th>Fee</th>
                      <th>Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>Basic Subscription</td>
                      <td>ABC 12458547</td>
                      <td>Visa 4242</td>
                      <td>$50</td>
                      <td>Jul 12. 2023</td>
                      <td>
                        <span className="badge-danger">Inactive</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Premium Subscription</td>
                      <td>ABC 12458547</td>
                      <td>Visa 4242</td>
                      <td>$100</td>
                      <td>Jul 12. 2023</td>
                      <td>
                        <span className="badge-success">Active</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Dispute Letter</td>
                      <td>ABC 12458547</td>
                      <td>Visa 4242</td>
                      <td>$2</td>
                      <td>Jul 12. 2023</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Certified Letter</td>
                      <td>ABC 12458547</td>
                      <td>Visa 4242</td>
                      <td>$5</td>
                      <td>Jul 12. 2023</td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>

                {/* See More */}
                <Button color="link" className="h-auto mb-2">
                  See More <i className="fa fa-chevron-down"></i>
                </Button>
              </Card>
            </section>
          </TabPane>
          <TabPane tabId="2">
            <section className="payment-methods">
              <div className="innerHeader">
                <h2>Your Cards</h2>
                <div>
                  <Button color="primary" onClick={() => _toggleModal(true)}>
                    Add Card
                  </Button>
                </div>
              </div>

              <div className="main_content_wrapper">
                <List>
                  <li>
                    <div>
                      <div>
                        <img
                          src={require("../../assets/img/visa.png")}
                          alt=""
                        />
                        <div className="ms-3">
                          <p className="text-dark mb-0">**** **** **** 4242</p>
                          {/* Active Since */}
                          <div className="d-flex justify-content-between">
                            <p className="text-dark mb-0">4/42</p>
                            <p className="text-dark mb-0">Visa</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <span>Default</span>
                        <Button color="link" className="ms-3">
                          <img
                            src={require("../../assets/img/trash.svg").default}
                            alt=""
                          />
                        </Button>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div>
                        <img
                          src={require("../../assets/img/visa.png")}
                          alt=""
                        />
                        <div className="ms-3">
                          <p className="text-dark mb-0">**** **** **** 4242</p>
                          {/* Active Since */}
                          <div className="d-flex justify-content-between">
                            <p className="text-dark mb-0">4/42</p>
                            <p className="text-dark mb-0">Visa</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <Button color="link" className="px-0">
                          Make Default
                        </Button>
                        <Button color="link" className="ms-3">
                          <img
                            src={require("../../assets/img/trash.svg").default}
                            alt=""
                          />
                        </Button>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div>
                        <img
                          src={require("../../assets/img/visa.png")}
                          alt=""
                        />
                        <div className="ms-3">
                          <p className="text-dark mb-0">**** **** **** 4242</p>
                          {/* Active Since */}
                          <div className="d-flex justify-content-between">
                            <p className="text-dark mb-0">4/42</p>
                            <p className="text-dark mb-0">Visa</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <Button color="link" className="px-0">
                          Make Default
                        </Button>
                        <Button color="link" className="ms-3">
                          <img
                            src={require("../../assets/img/trash.svg").default}
                            alt=""
                          />
                        </Button>
                      </div>
                    </div>
                  </li>
                </List>
              </div>
            </section>
          </TabPane>
        </TabContent>
      </div>

      <AddNewCardModal isOpen={isOpenModal} toggle={() => _toggleModal()} />
    </>
  );
};

export default Payment;
