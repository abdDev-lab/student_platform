import React from "react";

import { Box, OutlinedInput, Button, Dialog, Fade } from "@mui/material";

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
import unselectedMaleIcon from "../../assets/icons/unselected_male_icon.svg";
import selectedFemaleIcon from "../../assets/icons/selected_female_icon.svg";
import unselectedFemaleIcon from "../../assets/icons/unselected_female_icon.svg";

export default function AddStudent({ open, handleClose,fetchStudentList }) {
  const [group, setGroup] = React.useState("");
  const [father, setfather] = React.useState("");
  const [groupList, setGroupList] = React.useState([]);
  const [level, setLevel] = React.useState(1);
  const [gender, setGender] = React.useState("Male");

  const [studentData, setstudentData] = React.useState({
    student_name: "",
    birth_date: "",
    gender: "Male",
    father: "",
    group: "",
  });
  const fetchGroupList = async (value) => {
    try {
      const res = await fetch(
        "http://localhost/lmdProject/get_group_list_by_level.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            level_id: value,
          }),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          if (data["status"] === "success") {
            console.log(data);

            const responseData = Array.isArray(data["data"])
              ? data["data"]
              : [data["data"]];

            const groupListData = responseData.map((student, index) => ({
              id: student.group_id || index,
              number: student.number || "Unknown",
              group_level: student.group_level_id || "N/A",
            }));

            console.log("Formatted student data:", groupListData);
            setGroupList(groupListData.length > 0 ? groupListData : []);
          } else {
            setGroupList([]);
          }
        })
        .catch((error) => console.error("Error:", error));
    } catch (error) {
      console.log(error);
    }
  };
  const fetchAddStudent = async () => {
    try {
      const res = await fetch(
        "http://localhost/lmdProject/students/add_student.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: studentData.student_name,
            birth_date: studentData.birth_date,
            gender: studentData.gender,
            student_father_id: studentData.father,
            student_group_id: studentData.group,
          }),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          if (data["status"] === "success") {
            console.log(data);
            setstudentData({
              student_name: "",
              birth_date: "",
              gender: "Male",
              father: "",
              group: "",
            });
            fetchStudentList();
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

  const handleCloseAlert = () => {
    setState({
      ...state,
      open: false,
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setstudentData({
      ...studentData,
      [name]: value,
    });
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
        {"Add Student"}
      </DialogTitle>
      <DialogContent sx={{ margin: "0px", padding: "0px" }}>
        <Box height={"24px"}></Box>
        <Box display={"flex"} flexDirection={"column"}>
          <OutlinedInput
            id="outlined-basic-search"
            placeholder="Student Name"
            variant="outlined"
            name="student_name"
            type="text"
            onChange={handleChange}
            sx={{
              padding: "10px",
              color: "black",
              fontSize: "14px",
              width: "445px",
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
                  format="DD/MM/YYYY"
                  slots={{
                    openPickerIcon: () => (
                      <img
                        src={calenderIcon}
                        alt="calendar"
                        style={{ fill: "#9397A2" }}
                      />
                    ), // Replace calendar icon
                  }}
                  name="birth_date"
                  onChange={(value) =>
                    setstudentData({
                      ...studentData,
                      ["birth_date"]: value.format("MM/DD/YYYY"),
                    })
                  }
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
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              gap={"16px"}
            >
              <Button
                variant="Male"
                sx={{
                  padding: "8px 12px 8px 12px",
                  borderRadius: "8px",
                  fontSize: "16px",
                  color: gender === "Male" ? "#01A6EA" : "#9397A2",
                  backgroundColor:
                    gender === "Male" ? "rgb(1,166,234,0.1)" : "white",
                  textDecoration: "none",
                  textTransform: "none",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "40px",
                }}
                title="male"
                onClick={() => {
                  setGender("Male");
                  setstudentData({
                    ...studentData,
                    ["gender"]: "Male",
                  });
                }}
                startIcon={
                  <>
                    <img
                      src={
                        gender === "Male"
                          ? selectedMaleIcon
                          : unselectedMaleIcon
                      }
                      alt="search"
                    />
                  </>
                }
              >
                Male
              </Button>
              <Button
                variant="Male"
                sx={{
                  padding: "8px 12px 8px 12px",
                  borderRadius: "8px",
                  fontSize: "16px",
                  color: gender === "Female" ? "#FFB1CB" : "#9397A2",
                  backgroundColor:
                    gender === "Female" ? "rgb(255,177,203,0.1)" : "white",
                  textDecoration: "none",
                  textTransform: "none",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "40px",
                }}
                title="female"
                onClick={() => {
                  setGender("Female");
                  setstudentData({
                    ...studentData,
                    ["gender"]: "Female",
                  });
                }}
                startIcon={
                  <>
                    <img
                      src={
                        gender === "Female"
                          ? selectedFemaleIcon
                          : unselectedFemaleIcon
                      }
                      alt="search"
                    />
                  </>
                }
              >
                Female
              </Button>
            </Box>
          </Box>
        </Box>
        <Box height={"20px"}></Box>
        <Box display={"flex"} flexDirection={"row"} gap={"16px"}>
          <FormControl sx={{ minWidth: 120 }}>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={level}
              onChange={(event) => {
                setLevel(event.target.value);
                setstudentData({
                  ...studentData,
                  ["level"]: event.target.value,
                });
                fetchGroupList(event.target.value);
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
              <MenuItem value={1}>Level</MenuItem>
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
          <FormControl sx={{ minWidth: 120 }}>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={group}
              onChange={(event) => {
                setGroup(event.target.value);
                setstudentData({
                  ...studentData,
                  ["group"]: event.target.value,
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
              <MenuItem value="">Group</MenuItem>
              {groupList.map((group) => (
                <MenuItem key={group.id} value={group.id}>
                  {group.number}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box height={"20px"}></Box>
        <FormControl sx={{ minWidth: 120 }}>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={father}
            onChange={(event) => {
              setfather(event.target.value);
              setstudentData({
                ...studentData,
                ["father"]: event.target.value,
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
            <MenuItem value="">Father Name</MenuItem>
            <MenuItem value={1}>Barchi Father</MenuItem>
          </Select>
        </FormControl>
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
          onClick={() => {
            console.log(studentData);
            fetchAddStudent();
          }}
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
