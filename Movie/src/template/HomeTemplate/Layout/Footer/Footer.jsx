import React, { useEffect } from "react";
import { Wrapper, Content, LogoFooter, InfoFooter } from "./style";
import {
  FacebookOutlined,
  TwitterOutlined,
  GooglePlusOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { GetCinemaAction } from "../../../../redux/actions/CinemaManagerAction";

const Footer = () => {
  const dispatch = useDispatch();
  const { arrCinema } = useSelector((state) => state.CinemaManagerReducer);

  useEffect(() => {
    dispatch(GetCinemaAction);
  }, [dispatch]);
  return (
    <Wrapper>
      <Content>
        <LogoFooter>
          <div className="logo">
            {arrCinema?.map((cinema, index) => {
              return (
                <ul key={index}>
                  <a>
                    <img src={cinema.logo} alt={cinema.biDanh} />
                  </a>
                </ul>
              );
            })}
          </div>
        </LogoFooter>

        <InfoFooter>
          <div className="connect">
            <h3>Connect With Us</h3>
            <ul>
              <li>
                <a>
                  <FacebookOutlined /> <span>Facebook</span>
                </a>
              </li>

              <li>
                <a>
                  <TwitterOutlined />
                  <span>Twitter</span>
                </a>
              </li>

              <li>
                <a>
                  <InstagramOutlined /> <span>Instagram</span>
                </a>
              </li>

              <li>
                <a>
                  <GooglePlusOutlined /> <span>Google</span>
                </a>
              </li>
            </ul>
          </div>
        </InfoFooter>
      </Content>
    </Wrapper>
  );
};

export default Footer;
