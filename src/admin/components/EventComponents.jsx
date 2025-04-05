import React from "react";
import { Paper, Box } from "@mui/material";
import arrowRightIcon from "../../assets/icons/arrow_right_icon.svg";
import eventImage from "../../assets/event_image.png";
export default function EventComponents() {
  return (
    <Paper
      elevation={0}
      sx={{ padding: "12px", borderRadius: "8px", textAlign: "center" }}
    >
      <div
        style={{
          height: "160px",
          backgroundImage: `url(${eventImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "4px",
        }}
      ></div>
      <Box
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        paddingTop={"12px"}
        paddingBottom={"4px"}
      >
        <Box display={"flex"} flexDirection={"column"} alignItems={"start"}>
          <p
            style={{
              display: "inline",
              fontSize: "20px",
              fontWeight: "500",
              marginTop: "0px",
              marginBottom: "0px",
            }}
          >
            Abderrhman
          </p>
          <p
            style={{
              display: "inline",
              fontSize: "14px",
              fontWeight: "400",
              marginTop: "0px",
              marginBottom: "0px",
              color: "#999999",
            }}
          >
            21 mars 2025
          </p>
        </Box>
        <img src={arrowRightIcon} height={"28px"} width={"28px"} alt="" />
      </Box>
    </Paper>
  );
}
