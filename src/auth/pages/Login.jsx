import React from "react";
import logoImage from "../../assets/black_schoolary.png";
import copyRightIcon from "../../assets/icons/copyright_icon.svg";
import lockIcon from "../../assets/icons/lock_icon.svg";
import unlockIcon from "../../assets/icons/unlock.svg";
import { useNavigate } from "react-router-dom";

import {
  Checkbox,
  OutlinedInput,
  Button,
  Box,
  FormControlLabel,
  InputAdornment,
  IconButton,
  Snackbar,
  Slide,
  Fade,
  Alert,
} from "@mui/material";

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const [errors, setErrors] = React.useState({});
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [state, setState] = React.useState({
    open: false,
    Transition: Fade,
    alertContent: "",
  });

  const handleClick = (Transition, alertContent) => () => {
    setState({
      open: true,
      Transition,
      alertContent: alertContent,
    });
  };

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const fetchLogin = async () => {
    try {
      const res = await fetch("http://localhost/lmdProject/auth/login.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data["status"] === "success") {
            switchPages(data["type"]);
          } else {
            handleClick(SlideTransition, "User doesn't exist")();
          }
        })
        .catch((error) => console.error("Error:", error));
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validate()) {
      await fetchLogin();
    } else {
      handleClick(SlideTransition, "Email and Password required")();
    }
  };

  const switchPages = (userType) => {
    switch (userType) {
      case "admin":
        navigate("/admin", { replace: true });
        break;
      case "father":
        navigate("/father", { replace: true });
        break;
      case "teacher":
        navigate("/teacher", { replace: true });
        break;
      default:
        break;
    }
  };
  const validate = () => {
    let tempErrors = {};
    if (!formData.email) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = "Invalid email format";
    if (!formData.password) tempErrors.password = "Password is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  return (
    <div className="login">
      <div className="login-body">
        <Box
          height={"100%"}
          width={"100%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"40px"}
        >
          <img src={logoImage} height={"88px"} width={"200px"} alt="" />

          <form action="" onSubmit={handleSubmit}>
            <Box display={"flex"} flexDirection={"column"} gap={"24px"}>
              <Box display={"flex"} flexDirection={"column"} gap={"16px"}>
                <Box display={"flex"} flexDirection={"column"} gap={"8px"}>
                  <label htmlFor="outlined-basic-email">Email</label>
                  <OutlinedInput
                    id="outlined-basic-email"
                    placeholder="Enter your Email"
                    variant="outlined"
                    name="email"
                    value={formData.email}
                    type="text"
                    onChange={handleChange}
                    sx={{
                      color: "black",
                    }}
                  />
                </Box>

                <Box display={"flex"} flexDirection={"column"} gap={"2px"}>
                  <label htmlFor="outlined-basic-password">Password</label>
                  <Box height={"4px"}></Box>
                  <OutlinedInput
                    id="outlined-basic-password"
                    placeholder="Enter your Password"
                    variant="outlined"
                    value={formData.password}
                    name="password"
                    onChange={handleChange}
                    type={showPassword ? "text" : "password"}
                    sx={{
                      paddingRight: "20px",
                    }}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          sx={{
                            margin: "0",
                            padding: "0",
                          }}
                          aria-label={
                            showPassword
                              ? "hide the password"
                              : "display the password"
                          }
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          <img
                            src={showPassword ? unlockIcon : lockIcon}
                            alt=""
                          />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    gap={"120px"}
                    flexDirection={"Row"}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{
                            color: "#E2E6E7",
                            "&.Mui-checked": {
                              color: "#9165F8",
                            },
                          }}
                        />
                      }
                      sx={{
                        margin: "0",
                        color: "#9397A2",
                      }}
                      label="Remember me"
                    />

                    <h4>Forget Password?</h4>
                  </Box>
                </Box>
              </Box>
              <Button
                variant="login"
                onClick={handleSubmit}
                sx={{
                  padding: "10px 0px",
                  borderRadius: "8px",
                  fontSize: "16px",
                  color: "#ffffff",
                  backgroundColor: "#9165F8",
                }}
              >
                Login
              </Button>
            </Box>
          </form>
        </Box>
        <footer>
          <Box
            paddingX={"20px"}
            paddingy={"8px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDirection={"Row"}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              gap={"4px"}
              flexDirection={"Row"}
            >
              <img src={copyRightIcon} alt="" />
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: "500",
                  color: "#9397A2",
                }}
              >
                2025 Schoolary inc. All rights reserved.
              </p>
            </Box>
            <p
              style={{
                fontSize: "12px",
                fontWeight: "500",
                color: "#000000",
              }}
            >
              Privacy Policy | Term & Condition
            </p>
          </Box>
        </footer>
      </div>
      <div className="img-body"></div>
      <Snackbar
        open={state.open}
        onClose={handleClose}
        slots={{ transition: state.Transition }}
        key={state.Transition.name}
        autoHideDuration={2000}
      >
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {state.alertContent}
        </Alert>
      </Snackbar>
    </div>
  );
}
