import React, { FC } from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const HomeButton: FC = () => {
  return (
    <Button
      variant="contained"
      startIcon={<HomeIcon />}
      component={RouterLink}
      to="/"
    >
      Home
    </Button>
  );
};

export default HomeButton;
