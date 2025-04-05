import { Box, Typography } from "@mui/material";
import { LineChart, PieChart } from "@mui/x-charts";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import studentsIcon from "../../assets/icons/students_icon.svg";
import teachersIcon from "../../assets/icons/users_icon.svg";
import React from "react";

const data1 = [
  { id: 0, value: 60, label: "Male", color: "#01A6EA" },
  { id: 1, value: 40, label: "Female", color: "#FFB1CB" },
];

const data2 = [
  { name: "Occupied", value: 80 },
  { name: "Empty", value: 0 },
];
export default function DashBoard() {
  const [group, setGroup] = React.useState("");

  const handleChange = (event) => {
    setGroup(event.target.value);
  };
  return (
    <Box display={"flex"} flexDirection={"row "} gap={"20px"} height={"100%"}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={"20px"}
        width={"66%"}
        height={"100%"}
      >
        <Box display={"flex"} flexDirection={"row"} gap={"20px"}>
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            padding={"8px 20px 8px 16px"}
            bgcolor={"white"}
            width={"100%"}
            borderRadius={"12px"}
          >
            <Box display={"flex"} flexDirection={"column"} gap={"4px"}>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  display: "inline",
                  color: "#9397A2",
                  margin: "0",
                }}
              >
                Student
              </p>
              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: "600",
                  display: "inline",
                  margin: "0",
                }}
              >
                1800
              </h3>
            </Box>
            <div
              style={{
                height: "44px",
                width: "44px",
                backgroundColor: "#9165F8",
                borderRadius: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={studentsIcon} alt="" />
            </div>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            padding={"8px 20px 8px 16px"}
            bgcolor={"white"}
            borderRadius={"12px"}
            width={"100%"}
          >
            <Box display={"flex"} flexDirection={"column"} gap={"4px"}>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  display: "inline",
                  color: "#9397A2",
                  margin: "0",
                }}
              >
                Teachers
              </p>
              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: "600",
                  display: "inline",
                  margin: "0",
                }}
              >
                1800
              </h3>
            </Box>
            <div
              style={{
                height: "44px",
                width: "44px",
                backgroundColor: "#17B168",
                borderRadius: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={teachersIcon} alt="" />
            </div>
          </Box>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"row"}
          gap={"20px"}
          height={"280px"}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"start"}
            padding={"12px"}
            bgcolor={"white"}
            width={"60%"}
            borderRadius={"12px"}
          >
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "500",
                display: "inline",
                margin: "0",
              }}
            >
              Weakly Students Attendance
            </h3>
            <LineChart
              xAxis={[
                {
                  scaleType: "point", // For categorical (non-numeric) axis
                  data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                },
              ]}
              yAxis={[
                {
                  min: 0,
                  max: 100,

                  tickNumber: 5,
                },
              ]}
              series={[
                {
                  data: [20, 55, 30, 70, 90, 40, 65],
                  color: "#9165F8",
                },
              ]}
              sx={{
                width: "100%",

                margin: "0px",
                "& .MuiChartsAxis-root .MuiChartsAxis-line": {
                  stroke: "#B3B3B3", // Axis line color
                },
                "& .MuiChartsAxis-root .MuiChartsAxis-tick": {
                  stroke: "#B3B3B3", // Tick color
                },
                "& .MuiChartsAxis-root .MuiChartsAxis-tickLabel": {
                  fill: "#B3B3B3", // Tick label text color
                },
                "& .MuiChartsGrid-line": {
                  strokeDasharray: "4 4", // Dash pattern: 4px dash, 4px gap
                  stroke: "#ccc", // Optional: lighter color
                },
              }}
              margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
              grid={{ vertical: true, horizontal: true }}
            />
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"start"}
            padding={"12px"}
            bgcolor={"white"}
            width={"40%"}
            borderRadius={"12px"}
          >
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "500",
                display: "inline",
                margin: "0",
              }}
            >
              Gender
            </h3>
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              width={"100%"}
              height={"100%"}
            >
              <PieChart
                series={[
                  {
                    data: data1,
                    innerRadius: 60,
                    outerRadius: 90,
                    cx: 140,
                    cy: 90,
                  },
                ]}
                sx={{
                  width: "100%",
                  height: "100%",
                }}
                slotProps={{
                  legend: {
                    direction: "row",
                    position: {
                      vertical: "bottom",
                      horizontal: "middle",
                    },
                    padding: 0,
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"row"}
          gap={"20px"}
          height={"100%"}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            width={"100%"}
            bgcolor={"white"}
            borderRadius={"12px"}
            padding={"12px"}
            gap={"20px"}
          >
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  display: "inline",
                  margin: "0",
                }}
              >
                Classroom
              </h3>
              <FormControl sx={{ minWidth: 120 }}>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={group}
                  onChange={handleChange}
                  autoWidth
                  displayEmpty
                  sx={{
                    height: "40px",
                    padding: "12px 8px",
                    borderColor: "#E2E6E7",
                    "& .MuiSelect-select": {
                      fontSize: "14px",
                      color: "#9397A2", // Change this to your desired font size
                    },
                  }}
                >
                  <MenuItem value="">8:00 AM - 9:00 AM</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={21}>Twenty one</MenuItem>
                  <MenuItem value={22}>Twenty one and a half</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box width={"33%"} display={"flex"} flexDirection={"column"} gap={"20px"}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          bgcolor={"white"}
          borderRadius={"12px"}
          height={"70%"}
          padding={"12px"}
        >
          <h3
            style={{
              fontSize: "16px",
              fontWeight: "500",
              display: "inline",
              margin: "0",
            }}
          >
            Events
          </h3>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          bgcolor={"white"}
          borderRadius={"12px"}
          height={"30%"}
          padding={"12px"}
        >
          <h3
            style={{
              fontSize: "16px",
              fontWeight: "500",
              display: "inline",
              margin: "0",
            }}
          >
            Notifications
          </h3>
        </Box>
      </Box>
    </Box>
  );
}
