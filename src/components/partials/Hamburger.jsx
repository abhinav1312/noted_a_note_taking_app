import React from 'react'
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Hamburger = (props) => {
  return (
    <>
      <IconButton
        sx={{ height: "5rem", width: "5rem"}}
        onClick={props.onClick}
      >
        <MenuIcon
          sx={{ height: "5rem", width: "5rem", color: "#f77f00" }}
        />
      </IconButton>
    </>
  )
}

export default Hamburger
