// Google Maps Platform公式を参考に作成 (https://developers.google.com/maps/documentation/javascript/react-map?hl=ja)

import React, { FC, ReactElement } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { Alert, CircularProgress } from "@mui/material";
import Map from "components/pages/Map";

const render = (status: Status): ReactElement => {
  if (status === Status.FAILURE)
    return (
      <Alert severity="error">This is an error alert — check it out!</Alert>
    );

  return <CircularProgress />;
};

const EnhancedMap: FC = () => {
  const apiKey = "AIzaSyAyKMmUM-J7IspMVL8xq2gk4b9ze4YvaGg";

  return (
    <Wrapper apiKey={apiKey} render={render}>
      <Map />
    </Wrapper>
  );
};

export default EnhancedMap;
