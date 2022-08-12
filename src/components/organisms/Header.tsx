// Material UI公式のサンプルをベースに作成 (https://mui.com/material-ui/react-app-bar/)

import React, { FC, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SettingsIcon from "@mui/icons-material/Settings";

import { Link as RouterLink, useNavigate } from "react-router-dom";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";

import { Page } from "data/pageList";
import { makeStyles } from "@mui/styles";
import LoginButton from "components/molecules/LoginButton";

type PageProps = {
  pages: Page[];
};

const useStyles = makeStyles({
  box: {
    "&:hover": {
      opacity: 0.7,
    },
  },
});

const Header: FC<PageProps> = ({ pages }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { accounts } = useMsal();

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClickAccountInfo = () => {
    setAnchorElUser(null);
    navigate("/AccountInfo");
  };

  const handleClickEditProfile = () => {
    setAnchorElUser(null);
    navigate("/EditProfile");
  };

  const handleClickLogout = () => {
    setAnchorElUser(null);
    navigate("/Logout");
  };

  const handleClickLogin = () => {
    setAnchorElUser(null);
    navigate("/Login");
  };

  const settings = [
    {
      name: "Account Info",
      handler: handleClickAccountInfo,
    },
    {
      name: "Edit Profile",
      handler: handleClickEditProfile,
    },
    {
      name: "Logout",
      handler: handleClickLogout,
    },
  ];

  return (
    <AppBar position="sticky" color="inherit">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* 大きいサイズ用のロゴ */}
          <Typography
            className={classes.box}
            variant="h4"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 1000,
              letterSpacing: ".5rem",
              color: "red",
              textDecoration: "none",
            }}
          >
            MQJ
          </Typography>

          {/* 大きいサイズ用のページメニュー */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                className={classes.box}
                key={page.title}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  fontWeight: 600,
                }}
                component={RouterLink}
                to={page.path}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          {/* 小さいサイズ用のページメニュー (ハンバーガーメニュー) */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Tooltip title="Open menu">
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                className={classes.box}
              >
                <MenuIcon />
              </IconButton>
            </Tooltip>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
              style={{ color: "black" }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.title}
                  onClick={handleCloseNavMenu}
                  className={classes.box}
                >
                  <Typography
                    variant="subtitle1"
                    textAlign="center"
                    component={RouterLink}
                    to={page.path}
                    sx={{ color: "inherit", textDecoration: "none" }}
                  >
                    {page.title}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* 小さいサイズ用のロゴ */}
          <Typography
            variant="h4"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 1000,
              letterSpacing: ".5rem",
            }}
          >
            <RouterLink
              className={classes.box}
              to="/"
              style={{ textDecoration: "none", color: "red" }}
            >
              MQJ
            </RouterLink>
          </Typography>

          {/* セッティングメニュー */}
          <Box sx={{ flexGrow: 0 }}>
            <AuthenticatedTemplate>
              <Typography variant="h6" sx={{ display: "inline-block" }}>
                {accounts[0]?.idTokenClaims?.name}
              </Typography>
              <Tooltip title="Open settings">
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0 }}
                  className={classes.box}
                >
                  <Avatar sx={{ color: "black", bgcolor: "inherit" }}>
                    <SettingsIcon />
                  </Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting.name}
                    onClick={setting.handler}
                    className={classes.box}
                  >
                    <Typography textAlign="center">{setting.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
              <LoginButton onClick={handleClickLogin} />
            </UnauthenticatedTemplate>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
