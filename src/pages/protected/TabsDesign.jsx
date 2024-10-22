import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardText,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupText,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Table,
} from "reactstrap";
import ExampleComponent from "../../components/ExampleComponent";
import ReactSelect from "../../components/ReactSelect";
import TextEditor from "../../components/TextEditor";
import CustomDateRangePicker from "../../components/CustomDateRangePicker";

const TabsDesign = () => {
  const navigate = useNavigate();

  const [checked, setChecked] = useState(false);
  const [message, setMessage] = useState(false);

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  // dropdown
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const [activeTab, setActiveTab] = useState("1");
  const _toggleTab = (newTab = "1") => {
    if (activeTab !== newTab) setActiveTab(newTab);
  };

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

  return (
    <>
      <div className="innerHeader">
        <h2>
          <Button color="link" onClick={() => navigate(-1)}>
            <i className="fas fa-chevron-left" />
          </Button>
          Tabs
        </h2>
      </div>

      {/* filter */}
      <div className="filterWrapper">
        <div className="filterIcon">
          <i className="fas fa-filter" />
        </div>

        <div className="filterForm">
          <div className="formGroup">
            <Label>Added By</Label>
            <Input type="select">
              <option>All</option>
              <option>Kailash</option>
              <option>Anshumant</option>
              <option>Antareep</option>
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

          <div className="formGroup multiSelect">
            <Label>Country</Label>
            <ReactSelect />
          </div>

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

      <div className="bg-white p-2 mt-4" style={{ borderRadius: 8 }}>
        <Table responsive>
          <thead>
            <tr>
              <th className="checkColumn">
                <FormGroup check>
                  <Input id="checkbox2" type="checkbox" />
                </FormGroup>
              </th>
              <th>Name</th>
              <th>Mobile</th>
              <th>Email ID</th>
              <th>Address</th>
              <th>Status</th>
              <th>Expiry</th>

              <th style={{ width: 150, textAlign: "right" }}>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <FormGroup check>
                  <Input
                    id="checkbox2"
                    type="checkbox"
                    defaultChecked={checked}
                    onChange={() => setChecked(!checked)}
                  />
                </FormGroup>
              </td>
              <td>
                <div className="userInfo tableLink">
                  <img
                    src={
                      require("../../assets/img/default-profile.svg").default
                    }
                    alt="user"
                  />
                  Kailash
                </div>
              </td>
              <td>+91 83759 89898</td>
              <td>kailash@logic-square.com</td>
              <td>San Antonio , Texas , United States</td>
              <td>
                <FormGroup switch>
                  <Input type="checkbox" />
                </FormGroup>
              </td>

              <td>27 Feb, 2020</td>
              <td style={{ width: 100, textAlign: "right" }}>
                <div className="action">
                  <Button color="link" className="edit">
                    <i className="fas fa-pencil-alt" />
                  </Button>
                  <Button color="link" className="delete">
                    <i className="fas fa-trash-alt" />
                  </Button>
                  <Button color="link" className="edit">
                    <i className="far fa-eye" />
                  </Button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <FormGroup check>
                  <Input
                    id="checkbox2"
                    type="checkbox"
                    defaultChecked={checked}
                    onChange={() => setChecked(!checked)}
                  />
                </FormGroup>
              </td>
              <td>
                <div className="userInfo tableLink">
                  <img
                    src={
                      require("../../assets/img/default-profile.svg").default
                    }
                    alt="user"
                  />
                  Kailash
                </div>
              </td>
              <td>+91 83759 89898</td>
              <td>kailash@logic-square.com</td>
              <td>San Antonio , Texas , United States</td>
              <td>
                <FormGroup switch>
                  <Input type="checkbox" />
                </FormGroup>
              </td>

              <td>27 Feb, 2020</td>
              <td style={{ width: 100, textAlign: "right" }}>
                <div className="action">
                  <Button color="link" className="edit">
                    <i className="fas fa-pencil-alt" />
                  </Button>
                  <Button color="link" className="delete">
                    <i className="fas fa-trash-alt" />
                  </Button>
                  <Button color="link" className="edit">
                    <i className="far fa-eye" />
                  </Button>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>

      <div className="main_content_wrapper">
        <Nav pills>
          <NavItem>
            <NavLink
              className={activeTab === "1" ? "active" : ""}
              onClick={() => _toggleTab("1")}
            >
              Tab
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab === "2" ? "active" : ""}
              onClick={() => _toggleTab("2")}
            >
              More Tabs
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <ExampleComponent />
          </TabPane>
          <TabPane tabId="2">asd</TabPane>
        </TabContent>
      </div>

      {/* card */}
      <Row className="mt-4">
        <Col md={3}>
          <Card>
            <CardHeader>Header</CardHeader>
            <CardBody>
              <CardTitle tag="h5">Special Title Treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* message */}
      {checked === true ? (
        <div className="main_content_wrapper mt-3">
          <Row>
            <Col md="12">
              <FormGroup check inline>
                <Input
                  type="radio"
                  id="emailMessage"
                  value="Email Message"
                  name="option"
                  onChange={handleMessage}
                />
                <Label check for="emailMessage">
                  Email Message
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Input
                  type="radio"
                  id="textMessage"
                  value="Text Message"
                  name="option"
                  onChange={handleMessage}
                />
                <Label check for="textMessage">
                  Text Message
                </Label>
              </FormGroup>
            </Col>

            <Col lg={8} xl={6}>
              {message === "Email Message" ? (
                <FormGroup>
                  <div className="messageVeriabel">
                    <Label>Subject </Label>
                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                      <DropdownToggle caret>Insert Variables</DropdownToggle>
                      <DropdownMenu end>
                        <DropdownItem>Some Action</DropdownItem>
                        <DropdownItem>Some Action</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                  <Input />
                </FormGroup>
              ) : null}
              <FormGroup>
                <div className="messageVeriabel">
                  <Label>Body </Label>
                  <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle caret>Insert Variables</DropdownToggle>
                    <DropdownMenu end>
                      <DropdownItem>Some Action</DropdownItem>
                      <DropdownItem>Some Action</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
                <TextEditor />
              </FormGroup>

              <Button color="primary">Send</Button>
            </Col>
          </Row>
        </div>
      ) : null}
    </>
  );
};

export default TabsDesign;
