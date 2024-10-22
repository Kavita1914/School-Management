import React, { useState } from "react";
import {
  Button,
  Input,
  Label,
  FormGroup,
  Card,
  CardTitle,
  List,
  Badge,
} from "reactstrap";
import PublicFooter from "../../containers/Public/PublicFooter";
import { useNavigate } from "react-router-dom";

const SubscriptionPage = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(false);

  return (
    <>
      <div className="authWrapper">
        <div className="loginWrap select-subscription flex-column">
          <div className="authWrapper-banner">
            <h2>Select Your Subscription</h2>

            {/* custom switch */}
            <FormGroup switch className="customSwitch">
              <Input
                type="switch"
                id="customSwitch"
                checked={state}
                onClick={() => {
                  setState(!state);
                }}
              />

              <Label for="customSwitch">
                <span>Monthly</span>
                <span>Yearly</span>
                <span className="pos-abs"></span>
              </Label>
            </FormGroup>

            <h6 className="text-white mt-3 fs-20">Save 15% with yearly</h6>
          </div>

          {/* cards */}
          <section className="subscriptionPlanCards ">
            <Card body>
              <CardTitle>Basic</CardTitle>
              <span>Lorem Ipsum is simply dummy text</span>

              <div className="planPrice">
                {!state ? (
                  <>
                    <span className="price">$39</span>
                    <span>per month</span>
                  </>
                ) : (
                  <>
                    <span className="price">$399</span>
                    <span>per year</span>
                  </>
                )}
              </div>

              <Button
                color="primary"
                className="btn-submit mt-3"
                onClick={() => navigate("/membership")}
              >
                Buy Plan
              </Button>

              <div className="features-list">
                <List>
                  <li>
                    <img
                      src={require("../../assets/img/successCheck.svg").default}
                      alt=""
                    />
                    <span>Upload Credit Reports</span>
                  </li>
                  <li>
                    <img
                      src={require("../../assets/img/successCheck.svg").default}
                      alt=""
                    />
                    <span>Report Analysis & Disputes Suggested</span>
                  </li>
                  <li>
                    <img
                      src={require("../../assets/img/successCheck.svg").default}
                      alt=""
                    />
                    <span>Add-on charges for each letter sent.</span>
                  </li>
                </List>
              </div>
            </Card>
            <Card body className="premium">
              <CardTitle className="d-flex justify-content-between align-items-center">
                Pro
                <Badge color="primary" pill className="ms-2">
                  Popular
                </Badge>
              </CardTitle>
              <span>Lorem Ipsum is simply dummy text</span>

              <div className="planPrice">
                {!state ? (
                  <>
                    <span className="price">$79</span>
                    <span>per month</span>
                  </>
                ) : (
                  <>
                    <span className="price">$799</span>
                    <span>per year</span>
                  </>
                )}
              </div>

              <Button
                color="primary"
                className="btn-submit mt-3"
                onClick={() => navigate("/membership")}
              >
                Buy Plan
              </Button>

              <div className="features-list">
                <List>
                  <li>
                    <img
                      src={require("../../assets/img/successCheck.svg").default}
                      alt=""
                    />
                    <span>Get Automated Credit Reports</span>
                  </li>
                  <li>
                    <img
                      src={require("../../assets/img/successCheck.svg").default}
                      alt=""
                    />
                    <span>Upload Credit Reports</span>
                  </li>
                  <li>
                    <img
                      src={require("../../assets/img/successCheck.svg").default}
                      alt=""
                    />
                    <span>Report Analysis & Disputes Suggested</span>
                  </li>
                  <li>
                    <img
                      src={require("../../assets/img/successCheck.svg").default}
                      alt=""
                    />
                    <span>
                      Send 2 Certified & 1 Regular Letter every month (No
                      rollover of unused letters to next month)
                    </span>
                  </li>
                  <li>
                    <img
                      src={require("../../assets/img/successCheck.svg").default}
                      alt=""
                    />
                    <span>Add-on charges for any extra letters sent.</span>
                  </li>
                </List>
              </div>
            </Card>
          </section>
        </div>

        {/* footer */}
        <PublicFooter />
      </div>
    </>
  );
};

export default SubscriptionPage;
