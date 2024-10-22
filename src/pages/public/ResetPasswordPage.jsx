import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Form,
  Input,
  Label,
  InputGroup,
  InputGroupText,
  FormGroup,
} from "reactstrap";
import PublicFooter from "../../containers/Public/PublicFooter";
import { addUserCredential } from "../../redux/actions/userCredential";

const ResetPasswordPage = () => {
  // navigation
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  // login
  const _login = () => {
    dispatch(addUserCredential({ token: "token", user: {} }));
    navigate("/dashboard");
  };

  return (
    <>
      <div className="authWrapper">
        <div className="loginWrap">
          <div className="leftWrapper">
            <div className="leftInnerWrapper">
              <h2>Reset Password?</h2>

              <Form>
                {/* Enter New Password */}
                <div className="form-group">
                  <Label>Enter New Password</Label>
                  <Input
                    placeholder="Enter"
                    type={`${showPassword ? "text" : "password"}`}
                  />

                  {/* show this when you get any error */}
                  {/* <div className="form-error">
                Require
              </div> */}
                </div>
                {/* Re-Enter New Password */}
                <div className="mb-2">
                  <Label>Re-Enter New Password</Label>
                  <Input
                    placeholder="Enter"
                    type={`${showPassword ? "text" : "password"}`}
                  />

                  {/* show this when you get any error */}
                  {/* <div className="form-error">
                Require
              </div> */}
                </div>

                {/* submit button */}
                <Button color="primary" className="btn-submit">
                  Submit
                </Button>
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

export default ResetPasswordPage;
