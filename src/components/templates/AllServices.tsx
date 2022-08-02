import React, { FC } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link as RouterLink } from "react-router-dom";

import { pageList } from "data/pageList";

const serviceList = pageList.filter((page) => {
  return page.isService;
});

const useStyles = makeStyles({
  media: {
    width: "100%",
    height: "250px",
  },
  card: {
    marginTop: "auto",
    boxShadows: 10,
  },
  grid: {
    margin: "auto",
  },
});

const AllServices: FC = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} alignItems="center" justifyContent="center">
      <Grid item xs={10}>
        <Typography variant="h6" sx={{ mt: "10px" }}>
          取扱サービス一覧
        </Typography>
      </Grid>
      {serviceList.map((service) => (
        <Grid item xs={10} md={5} className={classes.grid}>
          <Card className={classes.card}>
            <CardActionArea component={RouterLink} to={service.path}>
              <CardMedia
                className={classes.media}
                component="img"
                image={service.imageUrl}
                alt={service.title}
              />
              <CardContent>
                <Typography variant="subtitle1">{service.title}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default AllServices;
