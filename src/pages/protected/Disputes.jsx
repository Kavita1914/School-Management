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
} from "reactstrap";

import CustomDateRangePicker from "../../components/CustomDateRangePicker";

const Disputes = () => {
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
              Dispute History
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab === "2" ? "active" : ""}
              onClick={() => _toggleTab("2")}
            >
              Sent Letters
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
              <Card body>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Dispute Items</th>
                      <th>Modified on</th>
                      <th></th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>
                        Dispute Report added simply dummy text of the printing
                      </td>
                      <td>Feb 14, 2023 08:00 PM</td>
                      <td>
                        {" "}
                        <i className="far fa-eye" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Dispute Report added simply dummy text of the printing
                      </td>
                      <td>Feb 14, 2023 08:00 PM</td>
                      <td>
                        {" "}
                        <i className="far fa-eye" />
                      </td>
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
          <TabPane tabId="2">asd</TabPane>
        </TabContent>
      </div>
    </>
  );
};

export default Disputes;
