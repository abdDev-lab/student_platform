import React from "react";

import { Box, OutlinedInput, Button, Dialog, TextField } from "@mui/material";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import addIcon from "../../assets/icons/add_icon.svg";
import calenderIcon from "../../assets/icons/date_picker_calender_icon.svg";
import selectedMaleIcon from "../../assets/icons/selected_male_icon.svg";
import selectedFemaleIcon from "../../assets/icons/selected_female_icon.svg";

export default function AddEvent({ open, handleClose }) {
  const [group, setGroup] = React.useState("");

  const handleChange = (event) => {
    setGroup(event.target.value);
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="md"
      slotProps={{
        paper: {
          sx: {
            borderRadius: "12px",
            padding: "20px",
          },
        },
      }}
    >
      <DialogTitle
        id="alert-dialog-title"
        sx={{ margin: "0px", padding: "0px" }}
      >
        {"Add Event"}
      </DialogTitle>
      <DialogContent sx={{ margin: "0px", padding: "0px" }}>
        <Box height={"24px"}></Box>
        <Box display={"flex"} flexDirection={"row"} gap={"32px"} >
          <div style={{ width: "200px", height: "200px" ,backgroundColor:"grey"}}></div>
          <Box display={"flex"} flexDirection={"column"}>
            <OutlinedInput
              id="outlined-basic-search"
              placeholder="Event Title"
              variant="outlined"
              name="event_title"
              type="text"
              sx={{
                padding: "10px",
                color: "black",
                fontSize: "14px",
                width: "400px",
                height: "40px",
              }}
            />
            <Box height={"20px"}></Box>
            <Box
              display={"flex"}
              flexDirection={"row"}
              width={"100%"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                  components={["DatePicker"]}
                  sx={{ padding: "0px" }}
                >
                  <DatePicker
                    // Set a fixed width
                    slots={{
                      openPickerIcon: () => (
                        <img
                          src={calenderIcon}
                          alt="calendar"
                          style={{ fill: "#9397A2" }}
                        />
                      ), // Replace calendar icon
                    }}
                    slotProps={{
                      textField: {
                        sx: {
                          width: "200px", // Apply width correctly
                          "& .MuiInputBase-root": {
                            height: "40px", // Set height properly
                            overflow: "hidden", // Prevents scrollbars
                          },
                        },
                        color: "#9397A2",
                        placeholder: "Date of Birth", // Use placeholder instead of label
                        InputLabelProps: { shrink: false }, // Ensure label doesn't shrink
                      },
                    }}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Box>

            <Box height={"20px"}></Box>
            <TextField
              multiline
              placeholder="Type here..."
              sx={{
                width: 400,
                height: 300,

                "& .MuiInputBase-root": {
                  height: "100%",
                  overflowY: "auto",
                  borderRadius: 1.5, // 2 = 16px
                  padding: 1,
                },
                "& textarea": {
                  height: "100% !important",
                  boxSizing: "border-box",
                },
              }}
            />
          </Box>
        </Box>
        <Box height={"24px"}></Box>
      </DialogContent>
      <DialogActions>
        <Button
          variant="add-student"
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
          onClick={handleClose}
          title="Add Student"
          startIcon={
            <>
              <img src={addIcon} alt="search" />
            </>
          }
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}
