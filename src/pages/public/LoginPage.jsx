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
} from "reactstrap";
import PublicFooter from "../../containers/Public/PublicFooter";
import { addUserCredential } from "../../redux/actions/userCredential";
import { login } from "../../http/http-calls";
import { decodeToken, errorHandler } from "../../helper-methods";

const LoginPage = () => {
  // navigation
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [formFields, setFormFields] = useState({});
  console.log("formFields",formFields);

  const handleChange = (event, field) => {   
    const updatedFormFields = {...formFields}
    updatedFormFields[field] = event.target.value
    setFormFields(updatedFormFields)

  }

  // login
  const _login = async () => {
    
    try {
      const params = {
        loginType : "admin",
        email : formFields.email,
        password : formFields.password
      }
      const response = await login(params) 
      console.log("response >>", response);
      console.log("token >>", response.token);
      const user = decodeToken(response.token)
      console.log("user >>", user);
      
      dispatch(addUserCredential({ token: response.token, user: user }));
      navigate("/dashboard");

    } catch(error) {
      errorHandler(error)
    }
  };

  return (
    <>
      <div className="authWrapper">
        <div className="loginWrap">
          <div className="leftWrapper">
            <div className="leftInnerWrapper">
              <h2>Welcome Back!</h2>
              <p className="text-muted">Please enter your email and password</p>

              <Form>
                {/* username */}
                <div className="form-group">
                  <Label>Email</Label>
                  <InputGroup>
                    <Input placeholder="Enter your Email ID" value={formFields?.email} onChange={(e) => handleChange(e, "email")}/>
                    <InputGroupText>
                      <i className="far fa-envelope" />
                    </InputGroupText>
                  </InputGroup>

                  {/* show this when you get any error */}
                  {/* <div className="form-error">
                Require
              </div> */}
                </div>

                {/* password */}
                <div className="form-group">
                  <Label>Password</Label>
                  <InputGroup>
                    <Input
                      placeholder="Enter your password" value={formFields?.password} onChange={(e) => handleChange(e, "password")}
                      type={`${showPassword ? "text" : "password"}`}
                    />
                    <InputGroupText
                      className="cursorPointer"
                      onClick={() => {
                        setShowPassword(!showPassword);
                      }}
                    >
                      <i
                        className={`far ${
                          showPassword ? "fa-eye" : "fa-eye-slash"
                        }`}
                      />
                    </InputGroupText>
                  </InputGroup>

                  {/* show this when you get any error */}
                  {/* <div className="form-error">
                Require
              </div> */}
                </div>

                <div className="text-end">
                  <Link to="/forgot-password" className="forgotPassword">
                    Forgot Password?
                  </Link>
                </div>

                {/* submit button */}
                <Button
                  onClick={() => _login()}
                  color="primary"
                  className="btn-submit"
                >
                  Login
                </Button>

                {/*infoText*/}
                <div className="text-center fs-14 mt-3 fw-medium">
                  Don't have an account?
                  <Link to="/sign-up" className="ms-1">
                    Sign Up
                  </Link>
                </div>
              </Form>

              <div className="or">
                <span>Or Continue With</span>
              </div>

              <div className="socialLogin">
                <Button className="googleBtn">
                  <img
                    src={require("../../assets/img/google.png")}
                    alt="google"
                  />
                </Button>
                <Button className="appleBtn">
                  <img
                    src={require("../../assets/img/apple.svg").default}
                    alt="apple"
                  />
                </Button>
              </div>
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

        {/* footer */}
        <PublicFooter />
      </div>
    </>
  );
};

export default LoginPage;
