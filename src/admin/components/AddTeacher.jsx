import React from "react";

import { Box, OutlinedInput, Button, Dialog, Chip, Stack } from "@mui/material";

import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import addIcon from "../../assets/icons/add_icon.svg";

export default function AddTeacher({ open, handleClose }) {
  const [level, setlevel] = React.useState("");

  const handleChange = (event) => {
    setlevel(event.target.value);
  };
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
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
        {"Add Teacher"}
      </DialogTitle>
      <DialogContent sx={{ margin: "0px", padding: "0px" }}>
        <Box height={"24px"}></Box>
        <Box display={"flex"} flexDirection={"column"}>
          <OutlinedInput
            id="outlined-basic-search"
            placeholder="Teacher Name"
            variant="outlined"
            name="teacher_name"
            type="text"
            sx={{
              padding: "10px",
              color: "black",
              fontSize: "14px",
             
              height: "40px",
            }}
          />
        </Box>
        <Box height={"20px"}></Box>
        <Box display={"flex"} flexDirection={"row"} gap={"16px"}>
          <FormControl sx={{ minWidth: 120 }}>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={level}
              onChange={handleChange}
              autoWidth
              displayEmpty
              sx={{
                height: "40px",
                fontSize: "14px",
                padding: "12px 8px",
                borderColor: "#F7F8FA",
              }}
            >
              <MenuItem value="">Subject/Level</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={21}>Twenty one</MenuItem>
              <MenuItem value={22}>Twenty one and a half</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 120 }}>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={level}
              onChange={handleChange}
              autoWidth
              displayEmpty
              sx={{
                height: "40px",
                fontSize: "14px",
                padding: "12px 8px",
                borderColor: "#F7F8FA",
              }}
            >
              <MenuItem value="">Group</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={21}>Twenty one</MenuItem>
              <MenuItem value={22}>Twenty one and a half</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box height={"20px"}></Box>
        <p
          style={{
            fontSize: "16px",
            fontWeight: "500",
            display: "inline",
            color: "#9397A2",
            margin: "0",
          }}
        >
          Groups
        </p>
        <Box height={"12px"}></Box>
        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
          <Chip label="1st primary / group 1" onDelete={handleDelete} />
          <Chip label="Deletable" variant="outlined" onDelete={handleDelete} />
          <Chip label="Deletable" variant="outlined" onDelete={handleDelete} />
          <Chip label="Deletable" variant="outlined" onDelete={handleDelete} />
          <Chip label="Deletable" variant="outlined" onDelete={handleDelete} />
          <Chip label="Deletable" variant="outlined" onDelete={handleDelete} />
        </Stack>
        <Box height={"24px"}></Box>
      </DialogContent>
      <DialogActions>
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
          onClick={handleClose}
          title="Add Subject"
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
