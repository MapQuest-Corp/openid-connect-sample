/* eslint-disable import/no-cycle */
import React, { FC } from "react";
import { Navigate, Routes, Route } from "react-router";

import "./App.css";

import Header from "components/organisms/Header";
import Footer from "components/organisms/Footer";
import Home from "components/pages/Home";
import Training from "components/pages/Training";
import Login from "components/pages/Login";
import Logout from "components/pages/Logout";
import EditProfile from "components/pages/EditProfile";
import AccountInfo from "components/pages/AccountInfo";
import About from "components/pages/About";
import ServiceList from "components/pages/ServiceList";
import ZipCodeSearch from "components/pages/ZipCodeSearch";
import Map from "containers/pages/Map";
import { pageList } from "data/pageList";
import AuthenticatedRoute from "AuthenticatedRoute";
import UnauthenticatedRoute from "UnauthenticatedRoute";

const App: FC = () => (
  <div id="wrapper">
    <Header pages={pageList} />
    <main>
      <Routes>
        <Route
          path="/"
          element={
            <AuthenticatedRoute>
              <Home />
            </AuthenticatedRoute>
          }
        />
        <Route
          path="/Login"
          element={
            <UnauthenticatedRoute>
              <Login />
            </UnauthenticatedRoute>
          }
        />
        <Route
          path="/Logout"
          element={
            <AuthenticatedRoute>
              <Logout />
            </AuthenticatedRoute>
          }
        />
        <Route
          path="/EditProfile"
          element={
            <AuthenticatedRoute>
              <EditProfile />
            </AuthenticatedRoute>
          }
        />
        <Route
          path="/AccountInfo"
          element={
            <AuthenticatedRoute>
              <AccountInfo />
            </AuthenticatedRoute>
          }
        />
        <Route
          path="/About"
          element={
            <AuthenticatedRoute>
              <About />
            </AuthenticatedRoute>
          }
        />
        <Route
          path="/Training"
          element={
            <AuthenticatedRoute>
              <Training />
            </AuthenticatedRoute>
          }
        />
        <Route path="/Service" element={<AuthenticatedRoute />}>
          <Route
            path=""
            element={
              <AuthenticatedRoute>
                <ServiceList />
              </AuthenticatedRoute>
            }
          />
          <Route
            path="ZipCodeSearch"
            element={
              <AuthenticatedRoute>
                <ZipCodeSearch />
              </AuthenticatedRoute>
            }
          />
          <Route
            path="Map"
            element={
              <AuthenticatedRoute>
                <Map />
              </AuthenticatedRoute>
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </main>
    <Footer />
  </div>
);

export default App;
