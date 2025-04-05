import React from "react";
import NavBar from "../components/NavBar";
import arrowRightIcon from "../../assets/icons/arrow_right_icon.svg";
import { Box, Grid2, Paper } from "@mui/material";

export default function Father() {
  return (
    <div className="father">
      <div className="nav-bar">
        <NavBar />
      </div>
      <div className="main-body">
        <h1>My Children</h1>
        <Grid2
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid2 size={2.5}>
            <Paper
              elevation={0}
              sx={{ padding: "12px", borderRadius: "8px", textAlign: "center" }}
            >
              <div
                style={{
                  height: "160px",
                  backgroundColor: "#01A6EA",
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
                <img
                  src={arrowRightIcon}
                  height={"28px"}
                  width={"28px"}
                  alt=""
                />
              </Box>
            </Paper>
          </Grid2>
          <Grid2 size={2.5}>
            <div>2</div>
          </Grid2>
          <Grid2 size={2.5}>
            <div>3</div>
          </Grid2>
          <Grid2 size={2.5}>
            <div>4</div>
          </Grid2>
        </Grid2>
      </div>
    </div>
  );
}
