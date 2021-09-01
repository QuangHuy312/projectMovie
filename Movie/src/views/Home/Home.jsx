import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";
import Movies from "../../components/Movies/Movies";
import {
  GetBannerFilmAction,
  GetMovieFilmAction,
} from "../../redux/actions/MovieManagerAction";

const Home = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { arrFilm } = useSelector((state) => state.MovieManagerReducer);
  const { arrBanner } = useSelector((state) => state.MovieManagerReducer);
  const managerFilm = useCallback(() => {
    dispatch(GetBannerFilmAction);
    dispatch(GetMovieFilmAction(page));
  }, [page, dispatch]);
  useEffect(() => {
    managerFilm();
  }, [page, managerFilm]);
  return (
    <div style={{ backgroundColor: "var(--bgDark" }}>
      <HomeCarousel arrBanner={arrBanner} />
      <Movies arrFilm={arrFilm} setPage={setPage} />
    </div>
  );
};

export default Home;
