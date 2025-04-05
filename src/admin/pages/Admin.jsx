import React from "react";
import { Box, Button } from "@mui/material";
import logo from "../../assets/white_schoolary.svg";
import dashboardIcon from "../../assets/icons/dashboard_icon.svg";
import bookIcon from "../../assets/icons/book_icon.svg";
import studentIcon from "../../assets/icons/students_icon.svg";
import teachersIcon from "../../assets/icons/users_icon.svg";
import calenderIcon from "../../assets/icons/calender_icon.svg";
import settingsIcon from "../../assets/icons/settings_icon.svg";
import analysisIcon from "../../assets/icons/analytics_icon.svg";
import eventIcon from "../../assets/icons/events_icon.svg";
import ButtonSide from "../components/ButtonSide";

import DashBoard from "./DashBoard";
import Students from "./Students";
import Subjects from "./Subjects";
import Schedule from "./Schedules";
import Teachers from "./Teacher";
import Events from "./Events";
import Analysis from "./Analysis";
import Settings from "./Settings";

export default function Admin() {
  const [pageIndex, setPageIndex] = React.useState(0);

  var [studentRows, setStudentRows] = React.useState([]);
  var [subjectRows, setSubjectRows] = React.useState([]);
  var [teacherRows, setTeacherRows] = React.useState([]);

  const fetchStudentsData = async () => {
    try {
      const res = await fetch(
        "http://localhost/lmdProject/students/get_student.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          if (data["status"] === "success") {
            // Handle both array and single object responses
            const responseData = data["data"];

            const studentData = responseData.map((student, index) => ({
              id: student.student_id || index,
              Name: student.name || "Unknown",
              DateOfBirth: student.birth_date || "N/A",
              ContactInfo: student.phone || "0123456789",
              Gender: student.gender || "Unknown",
              Group: student.number || "N/A",
              LevelYear: student.level_name || "",
            }));

            console.log("Formatted student data:", studentData);
            setStudentRows(studentData.length > 0 ? studentData : []);
          } else {
            alert(
              `Error: ${data["message"] || "Failed to fetch students data"}`
            );
          }
        })
        .catch((error) => console.error("Error:", error));
    } catch (error) {
      console.log(error);
    }
  };
  const fetchSubjectData = async () => {
    try {
      const res = await fetch(
        "http://localhost/lmdProject/subject/get_subject.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          if (data["status"] === "success") {
            // Handle both array and single object responses
            const responseData = data["data"];

            const subjectData = responseData.map((subject, index) => ({
              id: subject.id || index,
              Name: subject.subject_name || "Unknown",
              Coeff: subject.subject_coeff || "N/A",
              StudyLevelYear: subject.level_name || "",
              Teachers: subject.number_of_teachers || "N/A",
            }));

            console.log("Formatted Subject data:", subjectData);
            setSubjectRows(subjectData.length > 0 ? subjectData : []);
          } else {
            alert(
              `Error: ${data["message"] || "Failed to fetch subject data"}`
            );
          }
        })
        .catch((error) => console.error("Error:", error));
    } catch (error) {
      console.log(error);
    }
  };
  const fetchTeacherData = async () => {
    try {
      const res = await fetch(
        "http://localhost/lmdProject/teachers/get_teacher.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          if (data["status"] === "success") {
            // Handle both array and single object responses
            const responseData = data["data"];
            //TODO:i have problem for multi level or multi group
            const teacherData = responseData.map((teacher, index) => ({
              id: teacher.teacher_id || index,
              Name: teacher.name || "Unknown",
              Subject: teacher.subject_name || "UnKnown",
              Level: teacher.level_name || "",
            }));

            console.log("Formatted teacher data:", teacherData);
            setTeacherRows(teacherData.length > 0 ? teacherData : []);
          } else {
            alert(
              `Error: ${data["message"] || "Failed to fetch subject data"}`
            );
          }
        })
        .catch((error) => console.error("Error:", error));
    } catch (error) {
      console.log(error);
    }
  };
  const menuItems = [
    {
      text: "Dashboard",
      icon: dashboardIcon,
      onClick: () => setPageIndex(0),
    },
    {
      text: "Subjects",
      icon: bookIcon,
      onClick: () => {
        setPageIndex(1);
        fetchSubjectData();
      },
    },
    {
      text: "Students",
      icon: studentIcon,
      onClick: () => {
        setPageIndex(2);
        fetchStudentsData();
      },
    },
    {
      text: "Schedule",
      icon: calenderIcon,
      onClick: () => setPageIndex(3),
    },
    {
      text: "Teachers",
      icon: teachersIcon,
      onClick: () => {
        setPageIndex(4);
        fetchTeacherData();
      },
    },
    {
      text: "Events",
      icon: eventIcon,
      onClick: () => setPageIndex(5),
    },
    {
      text: "Analysis",
      icon: analysisIcon,
      onClick: () => setPageIndex(6),
    },
  ];

  return (
    <div className="admin">
      <div className="side-body">
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          paddingTop={"30px"}
          paddingBottom={"30px"}
          gap={"180px"}
          width={"100%"}
        >
          <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
            <Box width={"100%"} display={"flex"} justifyContent={"center"}>
              <img src={logo} width={"140px"} alt="" />
            </Box>
            <Box>
              {menuItems.map((item, index) => (
                <ButtonSide
                  key={index}
                  text={item.text}
                  icon={item.icon}
                  isSelected={pageIndex === index}
                  onClick={item.onClick}
                />
              ))}
            </Box>
          </Box>
          <ButtonSide
            key={7}
            text={"Settings"}
            icon={settingsIcon}
            isSelected={pageIndex === 7}
            onClick={() => setPageIndex(7)}
          />
        </Box>
      </div>
      <div className="main-body">
        {pageIndex === 0 && <DashBoard />}
        {pageIndex === 1 && (
          <Subjects
            subjectRows={subjectRows}
            fetchSubjects={fetchSubjectData}
          />
        )}
        {pageIndex === 2 && (
          <Students
            studentRows={studentRows}
            fetchStudents={fetchStudentsData}
          />
        )}
        {pageIndex === 3 && <Schedule />}
        {pageIndex === 4 && (
          <Teachers
            teacherRows={teacherRows}
            fetchTeacher={fetchStudentsData}
          />
        )}
        {pageIndex === 5 && <Events />}
        {pageIndex === 6 && <Analysis />}
        {pageIndex === 7 && <Settings />}
      </div>
    </div>
  );
}
