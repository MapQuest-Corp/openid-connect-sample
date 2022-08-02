// Google Maps Platform公式を参考に作成 (https://developers.google.com/maps/documentation/javascript/react-map?hl=ja)

/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-expressions */
import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { Helmet } from "react-helmet";
import HomeButton from "components/molecules/HomeButton";

// 初期値は豊橋駅
const initLat = 34.763;
const initLon = 137.382;

const Map: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [map, setMap] = useState<google.maps.Map>();

  const [errorFlagLat, setErrorFlagLat] = useState(false);
  const [errorFlaglon, setErrorFlaglon] = useState(false);

  // 入力された緯度経度を保持
  const latRef = useRef<HTMLInputElement>(null);
  const lonRef = useRef<HTMLInputElement>(null);

  // 緯度経度の範囲内かどうか判定
  const inRange = (a: number, b: number, num: number) =>
    Math.min(a, b) <= num && num <= Math.max(a, b);

  // 緯度経度として入力できるかのバリデーション
  const valididateValue = (value: string, dataType: string) => {
    const setErrorFlag = dataType === "lat" ? setErrorFlagLat : setErrorFlaglon;
    if (!value) {
      setErrorFlag(false);

      return;
    }

    const min = dataType === "lat" ? -90.0 : -180.0;
    const max = dataType === "lat" ? 90.0 : 180.0;

    const parsedValue = parseFloat(value);
    if (isNaN(parsedValue)) {
      setErrorFlag(true);

      return;
    }
    if (inRange(min, max, parsedValue)) setErrorFlag(false);
    else setErrorFlag(true);
  };

  // 入力された座標を中心に地図の表示位置を更新
  const updateMap = useCallback(
    (inputLat: number, inputLon: number, zoom = 15) => {
      if (ref.current) {
        setMap(
          new window.google.maps.Map(ref.current, {
            zoom,
            center: { lat: inputLat, lng: inputLon },
          })
        );
      }
    },
    [ref]
  );

  // 最初だけ初期値(豊橋駅)を入れる
  useEffect(() => {
    updateMap(initLat, initLon);
  }, [updateMap]);

  return (
    <>
      <Helmet>
        <title>Map | MapQuest</title>
      </Helmet>
      <h2>緯度経度から地図</h2>
      <Grid
        container
        spacing={3}
        alignItems="center"
        justifyContent="center"
        mb={3}
      >
        <Grid item xs={6} md={3}>
          <TextField
            error={errorFlagLat}
            helperText={
              errorFlagLat ? "範囲内の数値を入力してください (-90~90)" : ""
            }
            fullWidth
            label="緯度"
            inputRef={latRef}
            onChange={(event) => valididateValue(event.target.value, "lat")}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <TextField
            error={errorFlaglon}
            helperText={
              errorFlaglon ? "範囲内の数値を入力してください (-180~180)" : ""
            }
            fullWidth
            label="経度"
            inputRef={lonRef}
            onChange={(event) => valididateValue(event.target.value, "lon")}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <Button
            fullWidth
            variant="contained"
            size="large"
            sx={{ boxShadow: 2 }}
            onClick={() => {
              if (errorFlagLat || errorFlaglon) {
                return;
              }
              if (latRef.current?.value && lonRef.current?.value) {
                updateMap(
                  parseFloat(latRef.current.value),
                  parseFloat(lonRef.current.value)
                );
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
              if (latRef.current != null) latRef.current.value = "";
              if (lonRef.current != null) lonRef.current.value = "";
              setErrorFlagLat(false);
              setErrorFlaglon(false);
            }}
          >
            <ClearIcon />
            Clear
          </Button>
        </Grid>
      </Grid>
      <div ref={ref} style={{ height: "50vh", marginBottom: "20px" }} />
      <HomeButton />
    </>
  );
};

export default Map;
