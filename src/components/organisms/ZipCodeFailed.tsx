import React, { FC } from "react";
import { Button, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";

// 有効な郵便番号ではなかったときのコンポーネント
const ZipCodeFailed: FC = () => {
  return (
    <>
      <Typography color="red" variant="body1">
        有効な郵便番号を入力してください
        <br />
        住所の一部が分かる場合は 住所検索もご利用いただけます
      </Typography>
      <Button
        size="small"
        sx={{ marginTop: "5px" }}
        variant="contained"
        startIcon={<LocationSearchingIcon />}
        component={RouterLink}
        to="/Service/Map"
      >
        住所検索
      </Button>
    </>
  );
};

export default ZipCodeFailed;
