import React from "react";
import logo from "../../assets/white_schoolary.svg";
import userImage from "../../assets/user_image.png";
import notificationIcon from "../../assets/icons/notification_icon.svg";
import logoutIcon from "../../assets/icons/logout_icon.svg";

import { Box, IconButton } from "@mui/material";

export default function NavBar() {
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        height={"100%"}
        justifyContent={"space-between"}
        paddingLeft={"54px"}
        paddingRight={"54px"}
      >
        <img src={logo} width={"140px"} alt="" />
        <Box display={"flex"} flexDirection={"row"} gap={"60px"}>
          <Box
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            gap={"12px"}
          >
            <img src={userImage} width={"46px"} height={"46px"} alt="" />
            <p
              style={{
                display: "inline",
                color: "white",
                fontSize: "18px",
                fontWeight: "500",
              }}
            >
              Barchi Abderrhman
            </p>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            gap={"40px"}
          >
            <img src={notificationIcon} width={"32px"} height={"32px"} alt="" />
            <img src={logoutIcon} width={"32px"} height={"32px"} alt="" />
          </Box>
        </Box>
      </Box>
    </>
  );
}
