import { Box, Icon, OutlinedInput, Button, IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";

import searchIcon from "../../assets/icons/search_icon.svg";
import addIcon from "../../assets/icons/add_icon.svg";
import filterIcon from "../../assets/icons/filter_icon.svg";
import editIcon from "../../assets/icons/edit_icon.svg";
import deleteIcon from "../../assets/icons/delete_icon.svg";
import AddSubject from "../components/AddSubject";

export default function Subjects({ subjectRows, fetchSubjects }) {
  const columns = [
    { field: "id", headerName: "ID", width: 120, sortable: true },
    {
      field: "Name",
      headerName: "Name",
      width: 240,
      sortable: true,
    },
    {
      field: "Coeff",
      headerName: "Coeff",
      width: 140,
      sortable: true,
    },
    {
      field: "StudyLevelYear",
      headerName: "Study Level / Year",
      width: 180,
      sortable: true,
    },
    {
      field: "Teachers",
      headerName: "Teachers",
      width: 100,
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
            onClick={() => fetchDeleteSubject(params.row.id)}
            sx={{ color: "#9397A2" }} // Make the icon match the checkbox color
          >
            <img src={deleteIcon} alt="" />
          </IconButton>
        </>
      ),
    },
  ];
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchDeleteSubject = async (subjectId) => {
    try {
      const res = await fetch(
        "http://localhost/lmdProject/subject/delete_subject.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            subject_id: subjectId,
          }),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          if (data["status"] === "success") {
            console.log(data);
            fetchSubjects();
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
            Subjects List
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
            {subjectRows.length} Subjects
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
              onClick={handleClickOpen}
              title="Add Subject"
              startIcon={
                <>
                  <img src={addIcon} alt="search" />
                </>
              }
            >
              Add Subject
            </Button>
            <AddSubject
              open={open}
              handleClose={handleClose}
              fetchSubjects={fetchSubjects}
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
        <Box sx={{ width: "100%" }}>
          <DataGrid
            sx={{
              width: "100%",
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
            rows={subjectRows}
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
            autoHeight
          />
        </Box>
      </Box>
    </>
  );
}
