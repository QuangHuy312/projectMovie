import React from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetInfoFIlmAction } from "../../redux/actions/MovieManagerAction";
import { Content, HeroImage, InfoFilm, Rating, Wrapper } from "./style";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useEffect } from "react";
import moment from "moment";

const Detail = (props) => {
  console.log("props", props);
  const { id } = props.match.params;
  const dispatch = useDispatch();
  const getInfoFilm = useCallback(() => {
    dispatch(GetInfoFIlmAction(id));
  }, [dispatch, id]);
  useEffect(() => {
    getInfoFilm();
  }, [dispatch, getInfoFilm]);
  const { filmDetail } = useSelector((state) => state.MovieManagerReducer);
  const { danhGia, moTa, tenPhim, hinhAnh, ngayKhoiChieu } = filmDetail;
  return (
    <Wrapper background={hinhAnh}>
      <CustomCard style={{ height: "100vh" }} effectColor="#C780FF" blur={7}>
        <Content>
          <div className="title">
            <div style={{ alignSelf: "center" }}>
              <HeroImage
                src={hinhAnh}
                alt={tenPhim}
                onError={(e) =>
                  (e.target.src =
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjYpN-X9CnFt_KpEJXpGHKtnjWycsYeV9rvg&usqp=CAU")
                }
              />
            </div>
            <InfoFilm className="info-film">
              <p>{moment(ngayKhoiChieu).format("DD.MM.YYYY")}</p>
              <h4>{tenPhim}</h4>
              <p>{moTa}</p>
            </InfoFilm>
            <Rating>
              <h4>Đánh Giá</h4>
              <CircularProgressbar
                value={danhGia * 10}
                text={`${danhGia * 10}%`}
                styles={buildStyles({ textColor: "#dacb46" })}
              />
            </Rating>
          </div>
        </Content>
      </CustomCard>
    </Wrapper>
  );
};

export default Detail;
