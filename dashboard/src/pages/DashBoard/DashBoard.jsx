import React from "react";
import { Content, Info } from "./style";
import { Card } from "antd";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { TOKEN } from "../../util/settings/config";

const DashBoard = (props) => {
  const { adminLogin } = useSelector((state) => state.LoginReducer);
  const history = useHistory();
  return (
    <Content>
      <div>
        <Card style={{ width: 300 }} className="card-profile">
          <img
            src="https://i.pinimg.com/originals/9f/67/86/9f6786a077c91832b15172d8cc9026a7.jpg"
            alt="avatar"
          />
          <div>
            <h3>Manager</h3>
            <p>{adminLogin?.hoTen}</p>
          </div>
          <button
            onClick={() => {
              history.push("/");
              localStorage.removeItem("login");
              localStorage.removeItem(TOKEN);
            }}
          >
            Log Out
          </button>
        </Card>
      </div>

      <Info>
        <div className="info">
          <p>
            Họ Tên : <span>{adminLogin?.hoTen}</span>
          </p>
          <p>
            Số điện thoại : <span>{adminLogin?.soDT}</span>
          </p>
          <p>
            Email: <span>{adminLogin?.email}</span>
          </p>
        </div>
        <div className="project">
          <p>
            Người dùng : <span>{adminLogin?.maLoaiNguoiDung}</span>
          </p>
          <p>
            Job :<span>{adminLogin?.maLoaiNguoiDung}</span>
          </p>
          <p>
            Project : <span>{`http://github.com/${adminLogin?.taiKhoan}`}</span>
          </p>
        </div>
      </Info>
    </Content>
  );
};

export default DashBoard;
