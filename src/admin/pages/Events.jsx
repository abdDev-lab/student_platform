import { Box, Icon, OutlinedInput, Button, Grid2 } from "@mui/material";
import React from "react";

import EventComponents from "../components/EventComponents";
import searchIcon from "../../assets/icons/search_icon.svg";
import addIcon from "../../assets/icons/add_icon.svg";
import filterIcon from "../../assets/icons/filter_icon.svg";
import AddEvent from "../components/AddEvent";

export default function Events() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box display={"flex"} flexDirection={"column"}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          borderRadius={"12px"}
          padding={"12px"}
          gap={"12px"}
          bgcolor={"white"}
        >
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "600",
              display: "inline",
              margin: "0",
            }}
          >
            Events List
          </h2>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "500",
              display: "inline",
              color: "#9397A2",
              margin: "0",
            }}
          >
            100 Events
          </p>
          <Box display={"flex"} flexDirection={"row"} gap={"12px"}>
            <OutlinedInput
              id="outlined-basic-search"
              placeholder="Search for student"
              variant="outlined"
              name="email"
              type="text"
              startAdornment={
                <Icon
                  sx={{
                    height: "20px",
                    width: "20px",
                    marginRight: "8px",
                  }}
                >
                  <img src={searchIcon} alt="search" />
                </Icon>
              }
              sx={{
                padding: "10px",
                color: "black",
                fontSize: "14px",
                width: "310px",
                height: "40px",
              }}
            />
            <Button
              variant="add-subject"
              sx={{
                padding: "6px 12px 6px 10px",
                borderRadius: "8px",
                fontSize: "14px",
                color: "#ffffff",
                backgroundColor: "#9165F8",
                textDecoration: "none",
                textTransform: "none",
                alignItems: "center",
                justifyContent: "center",
                height: "40px",
              }}
              title="Add Event"
              onClick={handleClickOpen}
              startIcon={
                <>
                  <img src={addIcon} alt="search" />
                </>
              }
            >
              Add Event
            </Button>
            <AddEvent open={open} handleClose={handleClose} />
          </Box>
        </Box>
        <Box display={"flex"} flexDirection={"column"} alignItems={"start"}>
          <Button
            variant="add-student"
            sx={{
              padding: "6px 12px 6px 10px",
              marginTop: "20px",
              marginBottom: "12px",
              borderRadius: "8px",
              fontSize: "14px",
              color: "#9397A2",
              backgroundColor: "white",
              textDecoration: "none",
              textTransform: "none",
              height: "40px",
            }}
            title="Filter"
            startIcon={
              <>
                <img src={filterIcon} alt="filter_icon" />
              </>
            }
          >
            Filter
          </Button>
        </Box>
        <Grid2
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid2 size={3}>
            <EventComponents />
          </Grid2>
          <Grid2 size={3}>
            <EventComponents />
          </Grid2>
          <Grid2 size={3}>
            <EventComponents />
          </Grid2>
          <Grid2 size={3}>
            <EventComponents />
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
}
