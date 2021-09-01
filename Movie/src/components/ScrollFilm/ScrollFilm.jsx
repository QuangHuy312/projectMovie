import moment from "moment";
import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { useHistory } from "react-router-dom";
import { ContentFilm, Wrapper } from "./style";

const ScrollFilm = ({ arrFilm }) => {
  const history = useHistory();
  return (
    <Wrapper>
      <h1>Top Trending</h1>
      <Scrollbars
        style={{ width: 350, height: 700 }}
        renderThumbVertical={({ style, ...props }) => (
          <div
            {...props}
            style={{
              ...style,
              backgroundColor: "white",
              right: "2px",
              bottom: "2px",
              top: "2px",
              borderRadius: "3px",
              width: "5px",
            }}
          />
        )}
      >
        {arrFilm.items.slice(0, 8).map((film) => {
          return (
            <ContentFilm
              onClick={() => history.push(`/detail/${film.maPhim}`)}
              key={film.maPhim}
            >
              <img
                src={film.hinhAnh}
                alt=""
                onError={(e) =>
                  (e.target.src =
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjYpN-X9CnFt_KpEJXpGHKtnjWycsYeV9rvg&usqp=CAU")
                }
              />
              <div className="infoFilm">
                <h3>{film.tenPhim}</h3>
                <p>{moment(film.ngayKhoiChieu).format("DD/MM/YY-HH:MM:SS")}</p>
              </div>
            </ContentFilm>
          );
        })}
      </Scrollbars>
    </Wrapper>
  );
};

export default ScrollFilm;
