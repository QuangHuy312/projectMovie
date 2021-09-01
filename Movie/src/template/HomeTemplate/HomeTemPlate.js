import React from "react";
import { Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import { useEffect } from "react";
const HomeTemPlate = (props) => {
  const { Component, ...restProps } = props;
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Route
      {...restProps}
      render={(routeProps) => {
        return (
          <Fragment>
            <Header />
            <Component {...routeProps} />
            <Footer />
          </Fragment>
        );
      }}
    />
  );
};

export default HomeTemPlate;
