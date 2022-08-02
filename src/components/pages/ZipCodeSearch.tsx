import React, { FC, useRef, useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { Helmet } from "react-helmet";
import ZipCodeDisplay from "containers/templates/ZipCodeDisplay";
import HomeButton from "components/molecules/HomeButton";

const ZipCodeSearch: FC = () => {
  const [errorFlag, setErrorFlag] = useState(false);
  const [searchFlag, setSearchFlag] = useState(false);
  const [zipCode, setZipCode] = useState("");
  const inputTextRef = useRef<HTMLInputElement>(null);

  // 郵便番号のバリデーション (7桁の数字、ハイフンの有無両対応)
  const valididateValue = (value: string) => {
    if (!value) {
      setErrorFlag(false);

      return;
    }
    if (value.match(/^\d{3}-?\d{4}$/)) {
      setErrorFlag(false);
    } else {
      setErrorFlag(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>ZipCodeSearch | MapQuest</title>
      </Helmet>
      <h2>郵便番号から住所</h2>
      <Grid
        container
        spacing={3}
        mt={3}
        mb={5}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12} md={6}>
          <TextField
            error={errorFlag}
            helperText={errorFlag ? "正しい郵便番号を入力してください" : ""}
            fullWidth
            label="郵便番号 (ハイフン有無両対応)"
            inputRef={inputTextRef}
            onChange={(event) => valididateValue(event.target.value)}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <Button
            fullWidth
            variant="contained"
            size="large"
            sx={{ boxShadow: 2 }}
            onClick={() => {
              if (errorFlag) {
                return;
              }
              if (inputTextRef.current != null && inputTextRef.current.value) {
                setZipCode(inputTextRef.current.value);
                setSearchFlag(false);
                setTimeout(() => setSearchFlag(true), 10);
              }
            }}
          >
            <SearchIcon />
            Search
          </Button>
        </Grid>
        <Grid item xs={6} md={3}>
          <Button
            fullWidth
            variant="outlined"
            size="large"
            sx={{ boxShadow: 2 }}
            onClick={() => {
              if (inputTextRef.current != null) inputTextRef.current.value = "";
              setErrorFlag(false);
              setSearchFlag(false);
            }}
          >
            <ClearIcon />
            Clear
          </Button>
        </Grid>
        <Grid item xs={12}>
          {searchFlag && <ZipCodeDisplay zipCode={zipCode} />}
        </Grid>
      </Grid>
      <HomeButton />
    </>
  );
};

export default ZipCodeSearch;
