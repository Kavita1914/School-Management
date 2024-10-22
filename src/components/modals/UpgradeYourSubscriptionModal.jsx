import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  Row,
  Col,
  Input,
  List,
} from "reactstrap";
import AddNewCardModal from "./AddNewCardModal";

const UpgradeYourSubscriptionModal = ({ isOpen, toggle }) => {
  const _closeModal = () => {
    toggle();
  };

  const [isOpenModal, setIsOpenModal] = useState(false);
  const _toggleModal = (isOpenModal = false) => {
    setIsOpenModal(isOpenModal);
  };

  return (
    <Modal
      isOpen={isOpen}
      toggle={() => _closeModal()}
      scrollable
      centered
      size="xl"
    >
      <ModalHeader>Upgrade Your Subscription</ModalHeader>
      <ModalBody className="p-0">
        <div className="mergeDualCard subscriptionPlanCards">
          <Row>
            <Col md="12" xl="6">
              {/* Current Plan */}
              <div className="d-flex justify-content-between">
                <div>
                  <p className="text-dark mb-1">Current Plan</p>
                  <p className="text-dark mb-0 fw-bold">Basic</p>
                </div>
                <p className="text-dark mb-0">$50</p>
              </div>
              {/* Upgrade Plan */}
              <div className="mt-3 d-flex justify-content-between">
                <div>
                  <p className="text-dark mb-1">Upgrade Plan</p>
                  <p className="text-dark mb-0 fw-bold">Premium</p>
                </div>
                <p className="text-dark mb-0">$100</p>
              </div>

              {/* features list */}
              <div className="features-list inline-list bg mt-4">
                <h6>Features</h6>
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
              {/* Pay Today */}
              <div className="d-flex justify-content-between mt-4">
                <p className="text-dark mb-1">Pay Today</p>
                <p className="text-dark mb-0">$50</p>
              </div>
            </Col>
            <Col md="12" xl="6" className="mt-4 mt-lg-0">
              {/* Select Payment Method */}
              <div className="d-flex justify-content-between">
                <p className="text-dark mb-1">Select Payment Method</p>
                <Button
                  color="link"
                  className="h-auto"
                  onClick={() => _toggleModal(true)}
                >
                  + Add New Card
                </Button>
              </div>

              <div className="selectCardList">
                <List>
                  <li>
                    <FormGroup check>
                      <Input id="radio1" type="radio" name="selectCard" />
                      <Label for="radio1">Card ending with 4242 (4/24)</Label>
                    </FormGroup>

                    <img
                      src={require("../../assets/img/trash.svg").default}
                      className="hoverBtn"
                      alt=""
                    />
                  </li>
                  <li>
                    <FormGroup check>
                      <Input id="radio2" type="radio" name="selectCard" />
                      <Label for="radio2">Card ending with 4242 (4/24)</Label>
                    </FormGroup>

                    <img
                      src={require("../../assets/img/trash.svg").default}
                      className="hoverBtn"
                      alt=""
                    />
                  </li>
                  <li>
                    <FormGroup check>
                      <Input id="radio3" type="radio" name="selectCard" />
                      <Label for="radio3">Card ending with 4242 (4/24)</Label>
                    </FormGroup>

                    <img
                      src={require("../../assets/img/trash.svg").default}
                      className="hoverBtn"
                      alt=""
                    />
                  </li>
                </List>
              </div>

              {/* submit button */}
              <div className="inlineBtnWrapper">
                <Button color="primary" outline onClick={() => _closeModal()}>
                  Cancel
                </Button>
                <Button color="primary" className="ms-3">
                  Upgrade
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </ModalBody>
      <AddNewCardModal isOpen={isOpenModal} toggle={() => _toggleModal()} />
    </Modal>
  );
};

export default UpgradeYourSubscriptionModal;
