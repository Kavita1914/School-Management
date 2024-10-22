import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Form,
  Input,
  Label,
  InputGroup,
  InputGroupText,
} from "reactstrap";
import PublicFooter from "../../containers/Public/PublicFooter";

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="authWrapper">
        <div className="loginWrap">
          <div className="leftWrapper">
            <div className="leftInnerWrapper">
              <h2>Forgot Password?</h2>
              <p className="text-muted">
                Enter your email to receive a code to reset your password
              </p>

              <Form>
                {/* username */}
                <div className="form-group">
                  <Label>Email Address</Label>
                  <InputGroup>
                    <Input placeholder="Enter" />
                    <InputGroupText>
                      <i className="far fa-envelope" />
                    </InputGroupText>
                  </InputGroup>

                  {/* show this when you get any error */}
                  {/* <div className="form-error">
              Require
            </div> */}
                </div>

                {/* submit button */}
                <Button
                  color="primary"
                  className="btn-submit"
                  onClick={() => navigate("/reset-password")}
                >
                  Reset Password
                </Button>

                {/*infoText*/}
                <div className="text-center fs-14 mt-3 fw-medium">
                  Already have an account?
                  <Link to="/login" className="ms-1">
                    Sign In
                  </Link>
                </div>
              </Form>
            </div>
          </div>
          <div className="rightWrapper">
            {/* logo */}
            <img
              src={require("../../assets/img/logo-white.png")}
              alt="Brand Logo"
              className="companyLogo"
            />
          </div>
        </div>

        <PublicFooter />
      </div>
    </>
  );
};

export default ForgotPasswordPage;
