import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/images/gym-sync-logo.png";

export const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link to="/">
        <img
          src={Logo}
          alt="Logo"
          style={{ width: "64px", height: "72px", margin: "0 20px" }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #FF2625",
            fontFamily: "Arial, sans-serif",
            fontStyle: "italic",
            fontWeight: "bold",
          }}
        >
          Home
        </Link>
        <a
          href="/#exercises"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/#exercises";
          }}
          style={{
            textDecoration: "none",
            color: "#3A1212",
            fontFamily: "Arial, sans-serif",
            fontStyle: "italic",
          }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
