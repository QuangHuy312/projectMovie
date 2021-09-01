import { message } from "antd";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { LoginAction } from "../../redux/actions/LoginAction";
import { Content, FormSignIn } from "./style";

const schemaUser = yup.object().shape({
  taiKhoan: yup.string().required("*UserName is Required"),

  matKhau: yup.string().required("*Password is Required"),
});

export const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const loginSuccess = () => {
    message.success({
      content: "Đăng nhập thành công",
      style: { color: "blue", marginTop: "20vh" },
      duration: 1.5,
    });
  };
  const loginError = () => {
    message.error({
      content: "Tài khoản hoặc mật khẩu không đúng !!",
      style: { color: "red", marginTop: "20vh" },
      duration: 1.5,
    });
  };

  const impossibleLogin = () => {
    message.error({
      content: "Bạn không có quyền truy cập vào trang admin !!",
      style: { color: "red", marginTop: "20vh" },
      duration: 1.5,
    });
  };

  const nextPage = () => {
    history.push("/admin");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formik.isValid) return;

    dispatch(
      LoginAction(
        formik.values,
        loginSuccess,
        loginError,
        impossibleLogin,
        nextPage
      )
    );
  };

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    validationSchema: schemaUser,
    validateOnMount: true,
  });
  return (
    <FormSignIn>
      <Content>
        <h1>Login</h1>
        <form onSubmit={handleSubmit} className="form-content">
          <div>
            <input
              onBlur={formik.handleBlur}
              placeholder="Enter UserName"
              name="taiKhoan"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.taiKhoan}
            />
            {formik.touched.taiKhoan && <p>{formik.errors.taiKhoan}</p>}
          </div>
          <div>
            <input
              onBlur={formik.handleBlur}
              placeholder="Enter PassWord"
              name="matKhau"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.matKhau}
            />
            {formik.touched.matKhau && <p>{formik.errors.matKhau}</p>}
            <button className="button-content">Login</button>
          </div>
        </form>
      </Content>
    </FormSignIn>
  );
};
