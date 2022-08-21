import React, { FC, useEffect } from "react";
import { Helmet } from "react-helmet";
import AllServices from "components/templates/AllServices";
import { makeStyles } from "@mui/styles";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrentInfo } from "modules/profileModule";
import { msalInstance } from "index";
import { RootState } from "rootReducer";
import { TokenPayload } from "types/TokenPayload";

const useStyles = makeStyles({
  introText: {
    color: "rgba(0, 0, 0, 1.0)",
  },
});

// Get the latest profile information
const getCurrentInfo = (): TokenPayload => {
  const accounts = msalInstance.getAllAccounts();
  // When the profile is edited
  if (accounts.length > 1) {
    const editedAccount = accounts.filter((account) => {
      return account?.idTokenClaims?.tfp === "B2C_1_profileediting";
    });

    return {
      currentName: editedAccount[0]?.idTokenClaims?.name as string,
      currentIat: editedAccount[0]?.idTokenClaims?.iat as number,
    };
  }

  return {
    currentName: accounts[0]?.idTokenClaims?.name as string,
    currentIat: accounts[0]?.idTokenClaims?.iat as number,
  };
};

const Home: FC = () => {
  const { isEditing, currentIat } = useSelector(
    (state: RootState) => state.profile
  );
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    // Redirect after editing profile
    if (isEditing) {
      // To wait for profile updates to be reflected
      const updateProfileState = setInterval(() => {
        if (
          msalInstance.getAllAccounts().length > 1 &&
          currentIat !== getCurrentInfo().currentIat
        ) {
          dispatch(changeCurrentInfo(getCurrentInfo()));
          clearInterval(updateProfileState);
        }
      }, 100);
    } else {
      dispatch(changeCurrentInfo(getCurrentInfo()));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEditing]);

  return (
    <>
      <Helmet>
        <title>Home | MapQuest</title>
      </Helmet>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={10}>
          {/* 会社について */}
          <Box
            component="div"
            sx={{ boxShadow: 2, my: "15px", p: "10vh" }}
            style={{
              backgroundImage: ` url(
                "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              )`,
              backgroundSize: "cover",
              height: "auto",
              minHeight: "30vh",
              opacity: 0.75,
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              fontWeight="bold"
              className={classes.introText}
            >
              GISで切り開く新しい未来
            </Typography>
            <Typography
              variant="body1"
              fontWeight="bold"
              className={classes.introText}
            >
              1992年の設立から地理情報システム（GIS）を専門に技術やソリューションを追求してきました
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={10}>
          <Divider variant="fullWidth" sx={{ borderBottomWidth: 3 }} />
        </Grid>
      </Grid>
      {/* サービス一覧 */}
      <AllServices />
    </>
  );
};

export default Home;
