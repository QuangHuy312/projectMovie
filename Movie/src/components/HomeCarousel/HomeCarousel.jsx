import React, { Fragment } from "react";
import { Carousel } from "antd";
import { BackGround } from "./style";

const HomeCarousel = ({ arrBanner }) => {
  return (
    <Fragment>
      <Carousel autoplay>
        {arrBanner?.map((banner) => (
          <BackGround banner={banner.hinhAnh} key={banner.maPhim}></BackGround>
        ))}
      </Carousel>
    </Fragment>
  );
};

export default HomeCarousel;
