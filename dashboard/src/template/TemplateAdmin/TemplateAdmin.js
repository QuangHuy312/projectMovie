import React from "react";
import { Fragment } from "react";
import { Redirect, Route } from "react-router-dom";
import { TOKEN } from "../../util/settings/config";
import { Dropdown, Layout, Menu } from "antd";
import {
  UserOutlined,
  HomeOutlined,
  UserAddOutlined,
  BellOutlined,
  ProfileOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import Avatar from "react-avatar";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const TemplateAdmin = (props) => {
  const history = useHistory();
  const { component: RouteComponent, redirectPath, ...restProps } = props;
  const { SubMenu } = Menu;
  const { Header, Content, Sider } = Layout;
  const { adminLogin } = useSelector((state) => state.LoginReducer);
  const checkLogout = () => {
    localStorage.removeItem(TOKEN);
    localStorage.removeItem("login");
    history.push("/");
    window.location.reload();
  };
  const menu = (
    <Menu>
      <Menu.Item
        onClick={() => history.push("/admin")}
        key="1"
        icon={<UserOutlined />}
      >
        Profile
      </Menu.Item>
      <Menu.Item
        key="2"
        onClick={checkLogout}
        key="2"
        icon={<LogoutOutlined />}
      >
        Logout
      </Menu.Item>
    </Menu>
  );
  return (
    <Route
      {...restProps}
      render={(RouteProps) => {
        const token = localStorage.getItem(TOKEN);
        if (token) {
          return (
            <Fragment>
              <Layout style={{ minHeight: "100vh" }}>
                <Header>
                  <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={["2"]}
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <h3 style={{ color: "white" }}>DashBoard</h3>
                      <div>
                        <BellOutlined
                          style={{ width: 100, fontSize: "23px" }}
                        />
                        <Avatar
                          name={adminLogin.taiKhoan}
                          size="40"
                          round={true}
                        />
                        <Dropdown.Button
                          style={{ marginLeft: "12px", fontSize: "17px" }}
                          overlay={menu}
                          icon={<UserOutlined />}
                        >
                          {adminLogin.hoTen}
                        </Dropdown.Button>
                      </div>
                    </div>
                  </Menu>
                </Header>
                <Layout>
                  <Sider width={200} className="site-layout-background">
                    <Menu
                      mode="inline"
                      defaultSelectedKeys={["1"]}
                      defaultOpenKeys={["sub1"]}
                      style={{ height: "100%", borderRight: 0 }}
                    >
                      <SubMenu
                        key="sub1"
                        icon={<HomeOutlined />}
                        title="DashBoard"
                      >
                        <Menu.Item key="1" icon={<ProfileOutlined />}>
                          <NavLink to="/admin">Profile</NavLink>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<UserOutlined />}>
                          <NavLink to="/admin/manager">User Management</NavLink>
                        </Menu.Item>

                        <Menu.Item key="3" icon={<UserAddOutlined />}>
                          <NavLink to="/admin/manager/addnew">
                            Add New User
                          </NavLink>
                        </Menu.Item>
                      </SubMenu>
                    </Menu>
                  </Sider>
                  <Layout>
                    <Content>
                      <div>
                        <RouteComponent {...RouteProps} />
                      </div>
                    </Content>
                  </Layout>
                </Layout>
              </Layout>
            </Fragment>
          );
        } else {
          return <Redirect to={redirectPath} />;
        }
      }}
    />
  );
};

export default TemplateAdmin;
