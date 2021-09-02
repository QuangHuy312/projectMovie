import { Button, Form, Input, message, Select } from "antd";
import { Option } from "antd/lib/mentions";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { addUserAction } from "../../../redux/actions/UserManagerAction";
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
const AddNewUser = () => {
  const dispatch = useDispatch();
  const history = useHistory();
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
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "",
      maLoaiNguoiDung: "",
      hoTen: "",
    },
    validationSchema: schemaUser,
    validateOnMount: true,
  });

  const addSuccess = () => {
    message.success({
      content: "Thêm người dùng thành công",
      style: { marginTop: "20px", color: "blue" },
      duration: 1.5,
    });
  };
  const addError = () => {
    message.error({
      content: "Tài khoản hoặc gmail đã có người sử dụng ",
      style: { marginTop: "20px", color: "blue" },
      duration: 1.5,
    });
  };

  const nextPage = () => {
    history.push("/admin/manager");
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (!isValid) return;
    dispatch(addUserAction(values, addSuccess, addError, nextPage));
  };

  return (
    <ContentForm>
      <form onSubmit={handleSubmitForm}>
        <h1>Thêm người dùng</h1>
        <div>
          <Form.Item
            name="taiKhoan"
            required="true"
            label="Tài khoản"
            onChange={handleChange}
            onBlur={handleBlur}
            className="form-item"
          >
            <Input />
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
          <Input />
        </Form.Item>
        {touched.matKhau && <p>{errors.matKhau}</p>}
        <Form.Item
          name="hoTen"
          label="Họ tên :"
          onChange={handleChange}
          onBlur={handleBlur}
          className="form-item"
        >
          <Input />
        </Form.Item>
        {touched.hoTen && <p>{errors.hoTen}</p>}
        <Form.Item
          name="email"
          label="Email :"
          onChange={handleChange}
          onBlur={handleBlur}
          className="form-item"
        >
          <Input />
        </Form.Item>
        {touched.email && <p>{errors.email}</p>}
        <Form.Item
          name="soDt"
          label="Số Điện Thoại :"
          onChange={handleChange}
          onBlur={handleBlur}
          className="form-item"
        >
          <Input />
        </Form.Item>
        {touched.soDt && <p>{errors.soDt}</p>}
        <Form.Item
          name="maNhom"
          label="Mã Nhóm :"
          onChange={handleChange}
          onBlur={handleBlur}
          className="form-item" 
        >
          <Input />
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
            Đăng ký
          </Button>
        </Form.Item>
      </form>
    </ContentForm>
  );
};

export default AddNewUser;
