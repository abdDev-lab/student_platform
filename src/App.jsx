import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Login from "./auth/pages/Login";
import { createTheme, ThemeProvider } from "@mui/material";
import Father from "./father/pages/father";
import Admin from "./admin/pages/Admin";
import Teacher from "./teacher/pages/Teacher";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Poppins",
    },
    components: {
      MuiCheckbox: {
        styleOverrides: {
          root: {
            margin: "0",

            borderColor: "#F7F8FA",
          },
          colorPrimary: "#9165F8",
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            "& .MuiInputBase-input::placeholder": {
              color: "#9397A2",
            },
            borderRadius: "8px",
            border: "1.5px solid #F7F8FA",
            margin: "0",
            padding: "12px 10px",
            color: "#000000",

            // Outer padding
          },

          inputAdornedEnd: {
            color: "black",
          },
          input: {
            color: "black",

            fontSize: "16px",

            padding: "0px", // Inner padding for text
          },
        },
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/father" element={<Father />} />
          <Route path="/teacher" element={<Teacher />} />

        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
