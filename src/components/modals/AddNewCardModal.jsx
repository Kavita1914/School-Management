import React from "react";
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

const AddNewCardModal = ({ isOpen, toggle }) => {
  const _closeModal = () => {
    toggle();
  };

  return (
    <Modal isOpen={isOpen} toggle={() => _closeModal()} scrollable centered>
      <ModalHeader>Add Card</ModalHeader>
      <ModalBody>
        {/* Card Number */}
        <div className="form-group">
          <Label>Card Number</Label>
          <Input type="text"></Input>
        </div>
        <Row>
          <Col md="6">
            {/* Expiry Date */}
            <div className="form-group">
              <Label>Expiry Date</Label>
              <Input type="text"></Input>
            </div>
          </Col>
          <Col md="6">
            {/* CVV */}
            <div className="form-group">
              <Label>CVV</Label>
              <Input type="text"></Input>
            </div>
          </Col>
        </Row>

        {/* submit button */}
        <div className="inlineBtnWrapper">
          <Button color="primary" outline onClick={() => _closeModal()}>
            Cancel
          </Button>
          <Button color="primary" className="ms-3">
            Add Card
          </Button>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default AddNewCardModal;
