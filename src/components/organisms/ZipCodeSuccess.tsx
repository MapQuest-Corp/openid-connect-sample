import React, { FC } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { ZipCodeResponse } from "types/zipCodeResponse";

// 有効な郵便番号だったときのコンポーネント
const ZipCodeSuccess: FC<Pick<ZipCodeResponse, "results">> = ({ results }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead sx={{ fontSize: 12 }}>
          <TableRow sx={{ backgroundColor: "lightgray" }}>
            <TableCell align="center">都道府県</TableCell>
            <TableCell align="center">市区町村</TableCell>
            <TableCell align="center">町域</TableCell>
            <TableCell align="center">読み</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {results.map((result) => (
            <TableRow>
              <TableCell align="center">{result.address1}</TableCell>
              <TableCell align="center">{result.address2}</TableCell>
              <TableCell align="center">{result.address3}</TableCell>
              <TableCell align="center">
                {result.kana1}
                {result.kana2}
                {result.kana3}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ZipCodeSuccess;
