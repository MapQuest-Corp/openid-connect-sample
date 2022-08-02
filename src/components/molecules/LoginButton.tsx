import React, { FC } from "react";
import LoginIcon from "@mui/icons-material/Login";
import { Button } from "@mui/material";

type props = {
  onClick: () => void;
};

const LoginButton: FC<props> = ({ onClick }) => {
  return (
    <Button variant="contained" startIcon={<LoginIcon />} onClick={onClick}>
      LOG IN
    </Button>
  );
};

export default LoginButton;
