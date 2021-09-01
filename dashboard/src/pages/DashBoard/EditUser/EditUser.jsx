import { Button, Form, Input, message, Select } from "antd";
import { Option } from "antd/lib/mentions";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import {
  getUserListAction,
  updateUserActioon,
} from "../../../redux/actions/UserManagerAction";
import { ContentForm } from "./style";

const schemaUser = yup.object().shape({
  taiKhoan: yup
    .string()
    .required("*UserName is Required")
    .min(7, "*Username must have 7-15 characters")
    .max(16, "*Username must have 7-15 characters"),
  matKhau: yup
    .string()
    .required("*Password is Required")
    .min(6, "*Password must have 6 characters"),
  email: yup.string().required("*Email is Required").email("*Email is Invalid"),
  soDt: yup
    .string()
    .required()
    .matches(/^[0-9]+$/, "*Phone is Invalid"),
  maNhom: yup.string().required("*GroupID is Required"),
  hoTen: yup
    .string()
    .required("*FullName is Required")
    .min(8, "FullName must have 8 characters"),
});
const EditUser = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const username = props.match.params.name;
  const { userList } = useSelector((state) => state.UserManagerReducer);

  const { taiKhoan, hoTen, email, maLoaiNguoiDung, matKhau, soDt } =
    userList[0];
  console.log(userList);
  useEffect(() => {
    dispatch(getUserListAction(username));
  }, []);
  const {
    handleChange,
    values,
    setFieldValue,
    errors,
    isValid,
    touched,
    handleBlur,
  } = useFormik({
    initialValues: {
      taiKhoan: taiKhoan,
      matKhau: matKhau,
      email: email,
      soDt: soDt,
      maNhom: "GP01",
      maLoaiNguoiDung: maLoaiNguoiDung,
      hoTen: hoTen,
    },
    validationSchema: schemaUser,
    validateOnMount: true,
    enableReinitialize: true,
  });

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (!isValid) return;
    dispatch(
      updateUserActioon(
        values,
        () =>
          message.success({
            content: "Cập nhật người dùng thành công",
            style: { marginTop: "20px", color: "blue" },
            duration: 2,
          }),
        () => history.push("/admin/manager")
      )
    );
  };
  return (
    <ContentForm>
      <form onSubmit={handleSubmitForm}>
        <h1>Sửa thông tin người dùng</h1>
        <div>
          <Form.Item
            name="taiKhoan"
            required="true"
            label="Tài khoản"
            onChange={handleChange}
            onBlur={handleBlur}
            className="form-item"
          >
            <Input defaultValue={taiKhoan} />
          </Form.Item>
          {touched.taiKhoan && <p>{errors.taiKhoan}</p>}
        </div>
        <Form.Item
          name="matKhau"
          required="true"
          label="Mật Khẩu :"
          onChange={handleChange}
          onBlur={handleBlur}
          className="form-item"
        >
          <Input defaultValue={matKhau} />
        </Form.Item>
        {touched.matKhau && <p>{errors.matKhau}</p>}
        <Form.Item
          name="hoTen"
          label="Họ tên :"
          onChange={handleChange}
          onBlur={handleBlur}
          className="form-item"
        >
          <Input defaultValue={hoTen} />
        </Form.Item>
        {touched.hoTen && <p>{errors.hoTen}</p>}
        <Form.Item
          name="email"
          label="Email :"
          onChange={handleChange}
          onBlur={handleBlur}
          className="form-item"
        >
          <Input defaultValue={email} />
        </Form.Item>
        {touched.email && <p>{errors.email}</p>}
        <Form.Item
          name="soDt"
          label="Số Điện Thoại :"
          onChange={handleChange}
          onBlur={handleBlur}
          className="form-item"
        >
          <Input defaultValue={soDt} />
        </Form.Item>
        {touched.soDt && <p>{errors.soDt}</p>}
        <Form.Item
          name="maNhom"
          label="Mã Nhóm :"
          onChange={handleChange}
          onBlur={handleBlur}
          className="form-item"
        >
          <Input defaultValue={values.maNhom} />
        </Form.Item>
        {touched.maNhom && <p>{errors.maNhom}</p>}

        <Form.Item label="Mã loại người dùng :" style={{ paddingTop: "20px" }}>
          <Select
            style={{ width: 120 }}
            placeholder="Click chọn"
            name="maLoaiNguoiDung"
            onChange={(value) => setFieldValue("maLoaiNguoiDung", value)}
          >
            <Option value="KhachHang">Khách Hàng</Option>
            <Option value="QuanTri">Quản trị</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Sửa
          </Button>
        </Form.Item>
      </form>
    </ContentForm>
  );
};

export default EditUser;