import React from "react";

import { Box, OutlinedInput, Button, Dialog } from "@mui/material";

import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import addIcon from "../../assets/icons/add_icon.svg";

export default function AddSubject({ open, handleClose, fetchSubjects }) {
  const [level, setLevel] = React.useState(1);

  const [subjectData, setSubjectData] = React.useState({
    subject_name: "",
    coeff: "",
    level: 1,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSubjectData({
      ...subjectData,
      [name]: value,
    });
  };

  const fetchAddSubject = async () => {
    try {
      const res = await fetch(
        "http://localhost/lmdProject/subject/add_subject.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            subject_name: subjectData.subject_name,
            subject_coeff: subjectData.coeff,
            level_id: subjectData.level,
          }),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          if (data["status"] === "success") {
            console.log(data);
            setSubjectData({
              subject_name: "",
              coeff: "",
              level: 1,
            });
            fetchSubjects();
            handleClose();
          } else {
            console.log(data);
          }
        })
        .catch((error) => console.error("Error:", error));
    } catch (error) {
      console.log(error);
    }
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
        {"Add Subject"}
      </DialogTitle>
      <DialogContent sx={{ margin: "0px", padding: "0px" }}>
        <Box height={"24px"}></Box>
        <Box display={"flex"} flexDirection={"column"}>
          <OutlinedInput
            id="outlined-basic-search"
            placeholder="Subject Name"
            variant="outlined"
            name="subject_name"
            type="text"
            onChange={handleChange}
            sx={{
              padding: "10px",
              color: "black",
              fontSize: "14px",
              width: "310px",
              height: "40px",
            }}
          />
        </Box>
        <Box height={"20px"}></Box>
        <Box display={"flex"} flexDirection={"column"}>
          <OutlinedInput
            id="outlined-basic-search"
            placeholder="Coeff"
            variant="outlined"
            name="coeff"
            onChange={handleChange}
            type="number"
            sx={{
              padding: "10px",
              color: "black",
              fontSize: "14px",
              width: "310px",
              height: "40px",
            }}
          />
        </Box>
        <Box height={"20px"}></Box>

        <FormControl sx={{ minWidth: 120 }}>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={level}
            onChange={(event) => {
              setLevel(event.target.value);
              setSubjectData({
                ...subjectData,
                level: event.target.value,
              });
            }}
            autoWidth
            displayEmpty
            sx={{
              fontSize: "14px",
              padding: "8px 12px",
              borderColor: "#F7F8FA",
              "& .MuiSelect-select": {
                fontSize: "14px",
                padding: "0px",
                margin: "0px",
                // Change this to your desired font size
              },
            }}
          >
            <MenuItem value={1}>Subject Level</MenuItem>
            <MenuItem value={2}>1st Primary School</MenuItem>
            <MenuItem value={3}>2nd Primary School</MenuItem>
            <MenuItem value={4}>3rd Primary School</MenuItem>
            <MenuItem value={5}>4th Primary School</MenuItem>
            <MenuItem value={6}>5th Primary School</MenuItem>
            <MenuItem value={7}>1st Middle School</MenuItem>
            <MenuItem value={8}>2sd Middle School</MenuItem>
            <MenuItem value={9}>3rd Middle School</MenuItem>
            <MenuItem value={10}>4th Middle School (BEM)</MenuItem>
            <MenuItem value={11}>1st Secondary School</MenuItem>
            <MenuItem value={12}>2sd Secondary School</MenuItem>
            <MenuItem value={13}> 3rd Secondary School (BAC)</MenuItem>
          </Select>
        </FormControl>
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
          onClick={() => {
            fetchAddSubject();
          }}
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
