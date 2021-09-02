import React, { Fragment } from "react";
import { Pagination } from "antd";
import {
  MovieList,
  Content,
  ContentCard,
  ButtonCardDetail,
  ButtonCardBooking,
  Title,
} from "./style";
import ScrollFilm from "../ScrollFilm/ScrollFilm";
import { useHistory } from "react-router-dom";

const Movies = ({ arrFilm, currentPage }) => {
  const history = useHistory();
  return (
    <Fragment>
      <Title>PHIM ĐỀ CỬ</Title>
      <Content>
        <div className="content">
          <MovieList>
            {arrFilm.items.map((film) => (
              <Fragment key={film.maPhim}>
                <ContentCard film={film.hinhAnh}>
                  <div className="btn-film">
                    <div onClick={() => history.push(`/detail/${film.maPhim}`)}>
                      <ButtonCardDetail>Chi tiết</ButtonCardDetail>
                    </div>

                    <div>
                      <ButtonCardBooking disabled>Đặt vé</ButtonCardBooking>
                    </div>
                  </div>
                </ContentCard>
              </Fragment>
            ))}
          </MovieList>

          <Pagination
            defaultCurrent={currentPage}
            pageSize={arrFilm?.count}
            total={arrFilm?.totalCount}
            onChange={(page) => {
              history.push({ pathname: `/page/${page}` });
            }}
            className="page"
          />
        </div>
        <ScrollFilm arrFilm={arrFilm} />
      </Content>
    </Fragment>
  );
};

export default Movies;
