import {
  Box,
  Icon,
  OutlinedInput,
  Button,
  IconButton,
  Alert,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { use } from "react";
import AddStudent from "../components/AddStudent";

import searchIcon from "../../assets/icons/search_icon.svg";
import addIcon from "../../assets/icons/add_icon.svg";
import filterIcon from "../../assets/icons/filter_icon.svg";
import editIcon from "../../assets/icons/edit_icon.svg";
import deleteIcon from "../../assets/icons/delete_icon.svg";

export default function Students({ studentRows, fetchStudents }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const columns = [
    { field: "id", headerName: "ID", width: 120, sortable: true },
    {
      field: "Name",
      headerName: "Name",
      width: 210,
      sortable: true,
    },
    {
      field: "DateOfBirth",
      headerName: "Date of Birth",
      width: 140,
      sortable: true,
    },
    {
      field: "ContactInfo",
      headerName: "Contact Info",
      width: 120,
      sortable: true,
    },
    {
      field: "Gender",
      headerName: "Gender",
      width: 80,
      sortable: true,
    },
    {
      field: "Group",
      headerName: "Group",
      width: 80,
      sortable: true,
    },
    {
      field: "LevelYear",
      headerName: "Level/Year",
      width: 180,
      sortable: true,
    },
    {
      field: "edit",
      headerName: "",
      sortable: false,
      filterable: false,
      width: 100,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => (
        <>
          <IconButton
            onClick={() => handleEdit(params.row)}
            sx={{ color: "#9397A2" }} // Make the icon match the checkbox color
          >
            <img src={editIcon} alt="" />
          </IconButton>
          <IconButton
            onClick={() => fetchDeleteStudent(params.row.id)}
            sx={{ color: "#9397A2" }} // Make the icon match the checkbox color
          >
            <img src={deleteIcon} alt="" />
          </IconButton>
        </>
      ),
    },
  ];

  const fetchDeleteStudent = async (studentId) => {
    try {
      const res = await fetch(
        "http://localhost/lmdProject/students/delete_student.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            student_id: studentId,
          }),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          if (data["status"] === "success") {
            console.log(data);
            fetchStudents();
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
    <>
      <React.Fragment>
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
              Students List
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
              {studentRows.length} Students &nbsp;&nbsp; 20 Group
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
                onClick={handleClickOpen}
                title="Add Student"
                startIcon={
                  <>
                    <img src={addIcon} alt="search" />
                  </>
                }
              >
                Add Student
              </Button>
              <AddStudent
                open={open}
                handleClose={handleClose}
                fetchStudentList={fetchStudents}
              />
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
          <Box flexGrow={"1"} sx={{ width: "100%" }}>
            <DataGrid
              sx={{
                backgroundColor: "white", // Sets the background color to white
                borderRadius: "8px", // Sets border radius
                border: "none", // Removes the outline border
                "& .MuiDataGrid-columnHeaders": {
                  color: "#9397A2", // Changes the text color of the heading row
                  fontSize: "12",
                  fontWeight: "400", // Sets the height of the heading row
                },
                "& .MuiDataGrid-row": {
                  fontSize: "14px", // Sets the height of other rows
                },
                "& .MuiDataGrid-columnSeparator": {
                  color: "#F7F8FA",
                  height: "0.5px", // Changes the divider color
                },

                "& .MuiCheckbox-root": {
                  color: "#9397A2", // Sets the checkbox color
                },
                "& .Mui-checked": {
                  color: "#9165F8 !important", // Ensures the checked state also has the correct color
                },
              }}
              rows={studentRows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 7,
                  },
                },
              }}
              pageSizeOptions={[7]}
              checkboxSelection
              disableRowSelectionOnClick
            />
          </Box>
        </Box>
      </React.Fragment>
    </>
  );
}
