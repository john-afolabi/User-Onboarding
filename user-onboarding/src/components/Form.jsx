import React from "react";
import { withFormik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

function UserForm(props) {
  return (
    <div className="formik-form">
      <Form>
        <ErrorMessage name="name" render={msg => <div>{msg}</div>} />
        <label>
          Name:
          <Field type="text" name="name" />
        </label>
        <br />
        <ErrorMessage name="email" render={msg => <div>{msg}</div>} />
        <label>
          Email:
          <Field type="text" name="email" />
        </label>
        <br />
        <ErrorMessage name="password" render={msg => <div>{msg}</div>} />
        <label>
          Password:
          <Field type="password" name="password" />
        </label>
        <br />
        <label>
          TOS:
          <Field type="checkbox" name="tos" />
        </label>
        <br />
        <input type="submit" />
      </Form>
    </div>
  );
}

const UserFormWithFormik = withFormik({
  mapPropsToValues() {
    return {
      name: "",
      email: "",
      password: "",
      tos: false
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required("Please enter your name"),
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Please enter a valid email address"),
    password: Yup.string()
      .required("Password required")
      .min(8, "Password should be 8 characters minimum")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    tos: Yup.boolean()
  }),

  handleSubmit(users, tools) {
    axios
      .post("https://reqres.in/api/users", users)
      .then(res => {
        console.log(res.data);
        tools.resetForm();
      })
      .catch(err => {
        console.log(err);
      });
  }
})(UserForm);

export default UserFormWithFormik;
