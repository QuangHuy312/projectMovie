import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";
import Movies from "../../components/Movies/Movies";
import {
  GetBannerFilmAction,
  GetMovieFilmAction,
} from "../../redux/actions/MovieManagerAction";

const Home = (props) => {
  const page = props.match.params.number;
  const dispatch = useDispatch();
  const { arrFilm } = useSelector((state) => state.MovieManagerReducer);
  const { arrBanner } = useSelector((state) => state.MovieManagerReducer);
  const managerFilm = useCallback(() => {
    dispatch(GetBannerFilmAction);
    page ? dispatch(GetMovieFilmAction(page)) : dispatch(GetMovieFilmAction(1));
  }, [page, dispatch]);
  useEffect(() => {
    managerFilm();
  }, [page, managerFilm]);
  return (
    <div style={{ backgroundColor: "var(--bgDark" }}>
      <HomeCarousel arrBanner={arrBanner} />
      <Movies arrFilm={arrFilm} currentPage={page} />
    </div>
  );
};

export default Home;
