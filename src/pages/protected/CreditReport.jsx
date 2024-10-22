import React from "react";
import { Button, Row, Col, Card, CardTitle, Table, List } from "reactstrap";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import PaginatedItems from "../../components/PaginatedItems";

const CreditReport = () => {
  return (
    <>
      {/* Report Summary */}
      <section>
        <h6>Report Summary</h6>

        {/* cards */}
        <Row className="gy-4">
          <Col xl="4" lg="6">
            <Card body className="shadow h-100">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex flex-column me-2" style={{ flex: "1" }}>
                  <strong className="fs-20 text-primary">3</strong>
                  <span className="text-muted fs-14 mt-1">
                    Disputes found in Personal Information
                  </span>
                </div>

                <div className="roundImgWrapper">
                  <img
                    src={require("../../assets/img/icon1.svg").default}
                    alt=""
                  />
                </div>
              </div>
            </Card>
          </Col>

          <Col xl="4" lg="6">
            <Card body className="shadow h-100">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex flex-column me-2" style={{ flex: "1" }}>
                  <strong className="fs-20 text-primary">3</strong>
                  <span className="text-muted fs-14 mt-1">
                    Disputes found in Account History
                  </span>
                </div>
                <div className="roundImgWrapper">
                  <img
                    src={require("../../assets/img/icon2.svg").default}
                    alt=""
                  />
                </div>
              </div>
            </Card>
          </Col>
          <Col xl="4" lg="6">
            <Card body className="shadow h-100">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex flex-column me-2" style={{ flex: "1" }}>
                  <strong className="fs-20 text-primary">3</strong>
                  <span className="text-muted fs-14 mt-1">
                    Dispute found in Inquiries
                  </span>
                </div>
                <div className="roundImgWrapper">
                  <img
                    src={require("../../assets/img/icon3.svg").default}
                    alt=""
                  />
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Personal Information */}
      <section>
        <h6>Personal Information</h6>
        <Card body>
          <Table responsive>
            <thead>
              <tr>
                <th>Items</th>
                <th>Bureaus</th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <th></th>
                <th>TransUnion</th>
                <th>Experian</th>
                <th>Equifax</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Name</td>
                <td>
                  <span className="text-success">Correct</span>
                </td>
                <td>
                  <span className="text-danger">Incorrect</span>
                  <i className="fa fa-check-circle text-primary ms-2"></i>
                </td>
                <td>
                  <span className="text-success">Correct</span>
                </td>
              </tr>
              <tr>
                <td>Year of Birth</td>
                <td>
                  <span className="text-success">Correct</span>
                </td>
                <td>
                  <span className="text-success">Correct</span>
                </td>
                <td>
                  <span className="text-danger">Incorrect</span>
                  <i className="fa fa-check-circle text-primary ms-2"></i>
                </td>
              </tr>
              <tr>
                <td>Current Address</td>
                <td>
                  <span className="text-danger">Incorrect</span>
                </td>
                <td>
                  <span className="text-success">Correct</span>
                </td>
                <td>
                  <span className="text-danger">Incorrect</span>
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

      {/* Account History */}
      <section>
        <h6>Account History</h6>

        {/* Trade Line (AMEX) */}
        <Card body className="mb-4">
          <Table responsive>
            <thead>
              <tr>
                <th>Trade Line (AMEX)</th>
                <th>Bureaus</th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <th>Issue</th>
                <th>TransUnion</th>
                <th>Experian</th>
                <th>Equifax</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Account Number</td>
                <td>
                  <span className="text-success">Correct</span>
                </td>
                <td>
                  <span className="text-danger">Incorrect</span>
                </td>
                <td>
                  <span className="text-success">Correct</span>
                </td>
              </tr>
              <tr>
                <td>Credit Limit</td>
                <td>
                  <span className="text-success">Correct</span>
                </td>
                <td>
                  <span className="text-success">Correct</span>
                </td>
                <td>
                  <span className="text-danger">Incorrect</span>
                </td>
              </tr>
              <tr>
                <td>High Credit</td>
                <td>
                  <span className="text-danger">Incorrect</span>
                </td>
                <td>
                  <span className="text-success">Correct</span>
                </td>
                <td>
                  <span className="text-danger">Incorrect</span>
                </td>
              </tr>
            </tbody>
          </Table>

          {/* pagination */}
          <PaginatedItems itemsPerPage={4} />
        </Card>

        {/* Trade Line (Wells Fargo) */}
        <Card body>
          <Table responsive>
            <thead>
              <tr>
                <th>Trade Line (Wells Fargo)</th>
                <th>Bureaus</th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <th>Issue</th>
                <th>TransUnion</th>
                <th>Experian</th>
                <th>Equifax</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Account Number</td>
                <td>
                  <span className="text-success">Correct</span>
                </td>
                <td>
                  <span className="text-danger">Incorrect</span>
                </td>
                <td>
                  <span className="text-success">Correct</span>
                </td>
              </tr>
              <tr>
                <td>Credit Limit</td>
                <td>
                  <span className="text-success">Correct</span>
                </td>
                <td>
                  <span className="text-success">Correct</span>
                </td>
                <td>
                  <span className="text-danger">Incorrect</span>
                </td>
              </tr>
              <tr>
                <td>High Credit</td>
                <td>
                  <span className="text-danger">Incorrect</span>
                </td>
                <td>
                  <span className="text-success">Correct</span>
                </td>
                <td>
                  <span className="text-danger">Incorrect</span>
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

      {/* Inquiries */}
      <section>
        <h6>Inquiries</h6>

        {/* Trade Line (AMEX) */}
        <Card body>
          <Table responsive>
            <thead>
              <tr>
                <th>Trade Line (AMEX)</th>
                <th>Bureaus</th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <th>Issue</th>
                <th>TransUnion</th>
                <th>Experian</th>
                <th>Equifax</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Trade Line Info</td>
                <td>-</td>
                <td>
                  <span className="text-danger">Incorrect</span>
                </td>
                <td>-</td>
              </tr>
              <tr>
                <td>Bureau Info</td>
                <td>
                  <span className="text-success">Correct</span>
                </td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </Table>

          {/* See More */}
          <Button color="link" className="h-auto mb-2">
            See More <i className="fa fa-chevron-down"></i>
          </Button>
        </Card>
      </section>

      {true ? (
        <div className="d-flex justify-content-center align-items-center">
          <Button color="primary" outline>
            Save Progress
          </Button>
          <Button color="primary" className="ms-3">
            Proceed
          </Button>
        </div>
      ) : (
        <div className="d-flex justify-content-center align-items-center">
          <Button color="primary" outline>
            Preview Letter
          </Button>
        </div>
      )}
    </>
  );
};

export default CreditReport;
