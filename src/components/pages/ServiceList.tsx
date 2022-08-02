import React, { FC } from "react";
import AllServices from "components/templates/AllServices";
import { Helmet } from "react-helmet";

const ServiceList: FC = () => {
  return (
    <>
      <Helmet>
        <title>Service List | MapQuest</title>
      </Helmet>
      <AllServices />;
    </>
  );
};

export default ServiceList;
