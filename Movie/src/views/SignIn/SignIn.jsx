import { message } from "antd";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { SetUserLogin } from "../../redux/actions/UserManagerAction";
import { Content, FormSignIn } from "./style";

const schemaUser = yup.object().shape({
  taiKhoan: yup
    .string()
    .required("*UserName is Required")
    .min(6, "*Username must have 6-15 characters")
    .max(18, "*Username must have 6-18 characters"),
  matKhau: yup
    .string()
    .required("*Password is Required")
    .min(6, "*Password must have 6 characters"),
});

export const SignIn = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const loginSuccess = () => {
    message.success({
      content: "Đăng nhập thành công !!!",
      style: { marginTop: "20vh", color: "red" },
      duration: 1.5,
    });
  };
  const loginError = () => {
    message.error({
      content: "Tài khoản hoặc mật khẩu không đúng !!!",
      style: { marginTop: "20vh", color: "red" },
      duration: 1.5,
    });
  };
  const nextPage = () => {
    history.push("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formik.isValid) return;

    dispatch(SetUserLogin(formik.values, loginSuccess, loginError, nextPage));
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
        <h4>Have an account?</h4>
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

            <h5 onClick={() => history.push("/signup")}>
              Don't Have an account , register here !!
            </h5>
          </div>
        </form>
      </Content>
    </FormSignIn>
  );
};
