import React from "react";
import { Button } from "@mui/material";

export default function ButtonSide({ text, icon, onClick ,isSelected}) {
  return (
    <Button
      sx={{
        width: "100%",
        textTransform: "none",
        paddingY: "10px",
        paddingX: "20px",
        bgcolor: isSelected ? "rgba(255,255,255,0.1)" : "transparent",
        fontSize: "16px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "start",
        color: "white",
        fontWeight: "500",
        gap: "12px",
        "&.hover": {
          bgcolor: "rgba(255,255,255,0.2)",
        },
      }}
      onClick={onClick}
      startIcon={<img src={icon} height={"26px"} />}
    >
      {text}
    </Button>
  );
}
