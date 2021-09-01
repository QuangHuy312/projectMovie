import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Input, message, Table } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  deleteUserAction,
  getUserListAction,
  searchUserAction,
} from "../../../redux/actions/UserManagerAction";
import { ButtonContent, Content } from "./style";

const UserManager = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { userList } = useSelector((state) => state.UserManagerReducer);
  const [valueSearch, setValueSearch] = useState("");
  useEffect(() => {
    if (valueSearch) {
      const timer = setTimeout(() => {
        dispatch(searchUserAction(valueSearch));
      }, 500);
      return () => clearTimeout(timer);
    } else dispatch(getUserListAction());
  }, [dispatch, valueSearch]);
  const { Search } = Input;
  const deleteSuccess = () => {
    message.success({
      content: "Xóa người dùng thành công",
      style: { marginTop: "20px", color: "blue" },
      duration: 1.5,
    });
  };

  const deleteError = () => {
    message.error({
      content: "Xóa người thất bại",
      style: { marginTop: "20px", color: "red" },
      duration: 1.5,
    });
  };

  const columns = [
    {
      title: "Họ Tên",
      dataIndex: "hoTen",
    },
    {
      title: "Số Điện Thoại",
      dataIndex: "soDt",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Mã Loại Người Dùng",
      dataIndex: "maLoaiNguoiDung",
      sorter: (a, b) => a.maLoaiNguoiDung.length - b.maLoaiNguoiDung.length,
      sortDirections: ["descend"],
      sortOrder: "ascend",
    },
    {
      render: (text, user) => {
        return (
          <ButtonContent>
            <EditOutlined
              className="edit-button"
              onClick={() =>
                history.push(`/admin/manager/edit/${user.taiKhoan}`)
              }
            />
            <DeleteOutlined
              className="delete-button"
              onClick={() => {
                window.confirm("Bạn có muốn xóa tài khoản này không");
                dispatch(
                  deleteUserAction(user.taiKhoan, deleteSuccess, deleteError)
                );
              }}
            />
          </ButtonContent>
        );
      },
    },
  ];

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  return (
    <Content>
      <h1>Danh sách người dùng</h1>
      <Search
        placeholder="Tìm kiếm người dùng"
        allowClear
        style={{ width: "50%" }}
        value={valueSearch}
        onChange={(e) => setValueSearch(e.target.value)}
      />
      <Table columns={columns} dataSource={userList} onChange={onChange} />;
    </Content>
  );
};

export default UserManager;
