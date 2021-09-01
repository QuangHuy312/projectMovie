import { message } from "antd";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { SetUserSignUp } from "../../redux/actions/UserManagerAction";
import { ContentSignUp, FormSignUp } from "./style";

const schemaUser = yup.object().shape({
  taiKhoan: yup
    .string()
    .required("*UserName is Required")
    .min(8, "*Username must have 8-15 characters")
    .max(16, "*Username must have 8-15 characters"),
  matKhau: yup
    .string()
    .required("*Password is Required")
    .min(7, "*Password must have 7 characters"),
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
export const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formik.isValid) return;
    dispatch(
      SetUserSignUp(
        formik.values,
        () =>
          message.success({
            content: "Đăng ký thành công !!!",
            style: { marginTop: "20vh" },
            duration: 1,
          }),
        () =>
          message.error({
            content: "Tài khoản đã tồn tại !!!",
            style: { marginTop: "20vh", color: "red" },
            duration: 1,
          }),
        () => history.push("/signin")
      )
    );
  };

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "",
      hoTen: "",
    },
    validationSchema: schemaUser,
    validateOnMount: true,
  });

  return (
    <FormSignUp>
      <ContentSignUp>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit} className="form-content">
          <div>
            <input
              placeholder="User Name"
              onBlur={formik.handleBlur}
              name="taiKhoan"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.taiKhoan}
            />
            {formik.touched.taiKhoan && <p>{formik.errors.taiKhoan}</p>}
          </div>
          <div>
            <input
              placeholder="PassWord"
              onBlur={formik.handleBlur}
              name="matKhau"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.matKhau}
            />
            {formik.touched.matKhau && <p>{formik.errors.matKhau}</p>}
          </div>
          <div>
            <input
              placeholder="Email"
              onBlur={formik.handleBlur}
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.touched.email && <p>{formik.errors.email}</p>}
          </div>
          <div>
            <input
              placeholder="Phone"
              onBlur={formik.handleBlur}
              name="soDt"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.soDt}
            />
            {formik.touched.soDt && <p>{formik.errors.soDt}</p>}
          </div>
          <div>
            <input
              placeholder="GroupID"
              onBlur={formik.handleBlur}
              name="maNhom"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.maNhom}
            />
            {formik.touched.maNhom && <p>{formik.errors.maNhom}</p>}
          </div>

          <div>
            <input
              placeholder="FullName"
              onBlur={formik.handleBlur}
              name="hoTen"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.hoTen}
            />
            {formik.touched.hoTen && <p>{formik.errors.hoTen}</p>}
          </div>
          <button className="button-content">Đăng Ký</button>
        </form>
      </ContentSignUp>
    </FormSignUp>
  );
};
