import React, { FC } from "react";
import { Box, Container, Typography, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  box: {
    "&:hover": {
      opacity: 0.7,
    },
  },
});

const Footer: FC = () => {
  const classes = useStyles();

  return (
    <Box
      component="footer"
      sx={{
        textAlign: "center",
        py: 3,
        px: 2,
        backgroundColor: "lightgray",
      }}
      boxShadow="5"
    >
      <Container maxWidth="sm">
        <Typography variant="h6">GISで社会を豊かに</Typography>
        {"Copyright © "}
        <Link
          className={classes.box}
          color="inherit"
          href="https://www.mapquest.co.jp/"
          target="_blank"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          MapQuest Corporation
        </Link>{" "}
        {new Date().getFullYear()}.
      </Container>
    </Box>
  );
};

export default Footer;
