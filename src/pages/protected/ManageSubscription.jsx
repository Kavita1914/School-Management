import React, { useState } from "react";
import { Button, Card, Row, Col, CardTitle, List } from "reactstrap";
import UpgradeYourSubscriptionModal from "../../components/modals/UpgradeYourSubscriptionModal";

const ManageSubscription = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const _toggleModal = (isOpenModal = false) => {
    setIsOpenModal(isOpenModal);
  };
  return (
    <>
      {/* cards */}
      <section className="mergeDualCard subscriptionPlanCards">
        <Card body className="shadow">
          <Row>
            <Col md="12" xl="6" className="px-1">
              <CardTitle> Basic</CardTitle>
              <span>Lorem Ipsum is simply dummy text</span>

              <div className="planPrice">
                <span className="price">$50</span>
                <span>per month</span>
              </div>

              <div className="features-list inline-list">
                <List>
                  <li>
                    <img
                      src={require("../../assets/img/successCheck.svg").default}
                      alt=""
                    />
                    <span>10 AI Disputes</span>
                  </li>
                  <li>
                    <img
                      src={require("../../assets/img/successCheck.svg").default}
                      alt=""
                    />
                    <span>2 Monthly Reports</span>
                  </li>
                  <li>
                    <img
                      src={require("../../assets/img/successCheck.svg").default}
                      alt=""
                    />
                    <span>Identity Theft Insurance</span>
                  </li>
                  <li>
                    <img
                      src={require("../../assets/img/successCheck.svg").default}
                      alt=""
                    />
                    <span>Standard report</span>
                  </li>
                </List>
              </div>
            </Col>
            <Col md="12" xl="6" className="rounded mt-4 mt-lg-0">
              {/* Active Since */}
              <div className="d-flex justify-content-between">
                <p className="text-dark mb-0">Active Since</p>
                <p className="text-dark mb-0">Jul 12, 2023</p>
              </div>
              {/* Next Bill */}
              <div className="mt-3 d-flex justify-content-between">
                <p className="text-dark mb-0">Next Bill</p>
                <p className="text-dark mb-0">Aug 11, 2023</p>
              </div>

              {/* submit button */}
              <div className="d-flex flex-column align-items-center">
                <Button color="primary" outline className="btn-submit mt-5">
                  Pause Subscription
                </Button>
                <Button
                  color="primary"
                  className="btn-submit mt-3"
                  onClick={() => _toggleModal(true)}
                >
                  Upgrade To Premium
                </Button>
              </div>
            </Col>
          </Row>
        </Card>
      </section>
      <UpgradeYourSubscriptionModal
        isOpen={isOpenModal}
        toggle={() => _toggleModal()}
      />
    </>
  );
};

export default ManageSubscription;
