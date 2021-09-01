import { UserOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { TOKEN } from "../../../../util/setting/config";
import { Content, LogoImg, Wrapper } from "./style";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { userLogin } = useSelector((state) => state.UserManagerReducer);
  const token = localStorage.getItem(TOKEN);
  const history = useHistory();
  useEffect(() => {
    const handleScroll = (e) => {
      setScrolled(window.scrollY > 250);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const checkLogout = useCallback(() => {
    localStorage.removeItem(TOKEN);
    history.push("/");
    window.location.reload();
  }, [history]);
  const menu = (
    <Menu>
      <Menu.Item
        onClick={() => history.push("/profile")}
        key="1"
        icon={<UserOutlined />}
      >
        Profile
      </Menu.Item>
      <Menu.Item onClick={checkLogout} key="2" icon={<UserOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );
  return (
    <Wrapper scrolled={scrolled}>
      <Content>
        <NavLink to="/">
          <LogoImg src="https://www.phimmoi247.com/logo.png" alt="logo" />
        </NavLink>
        <div className="nav-content">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/news">News</NavLink>
            </li>
          </ul>
        </div>
        {token && (
          <Space wrap>
            <Dropdown.Button
              onClick={() => history.push("/profile")}
              overlay={menu}
              icon={<UserOutlined />}
            >
              Hello, {userLogin?.hoTen}
            </Dropdown.Button>
          </Space>
        )}
        {!token && (
          <button
            className="user-login"
            onClick={() => history.push("/signin")}
          >
            <UserOutlined />
            Sign In
          </button>
        )}
      </Content>
    </Wrapper>
  );
};

export default Header;
