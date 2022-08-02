import React, { FC, useEffect, useState } from "react";
import { useMsal } from "@azure/msal-react";
import { Typography } from "@mui/material";

const ShowName: FC = () => {
  const { instance } = useMsal();
  const [name, setName] = useState<string | null | undefined>(null);

  const activeAccount = instance.getActiveAccount();
  useEffect(() => {
    if (activeAccount) {
      setName(activeAccount?.idTokenClaims?.name);
    } else {
      setName(null);
    }
  }, [activeAccount]);

  if (name) {
    return (
      <Typography variant="h6" sx={{ display: "inline-block" }}>
        Welcome, {name}
      </Typography>
    );
  }

  return null;
};

export default ShowName;
