import React from "react";
import { Content, Info } from "./style";
import { Card } from "antd";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Profile = (props) => {
  const user = useSelector((state) => state.UserManagerReducer.userLogin);
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
            <h3>Fresher</h3>
            <p>{user?.hoTen}</p>
          </div>
          <button onClick={() => history.push("/")}>Go back home</button>
        </Card>
      </div>

      <Info>
        <div className="info">
          <p>
            Họ Tên : <span>{user?.hoTen}</span>
          </p>
          <p>
            Số điện thoại : <span>{user?.soDT}</span>
          </p>
          <p>
            Email: <span>{user?.email}</span>
          </p>
        </div>
        <div className="project">
          <p>
            Người dùng : <span>User</span>
          </p>
          <p>
            Job :<span>Web Dev</span>
          </p>
          <p>
            Project : <span>{`http://github.com/${user?.taiKhoan}`}</span>
          </p>
        </div>
      </Info>
    </Content>
  );
};

export default Profile;
