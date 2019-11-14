import React from "react";
import { withFormik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

function UserForm(props) {
  return (
    <div className="formik-form">
      <Form>
        <label>
          Name:
          <Field type="text" name="name" />
        </label>

        <label>
          Email:
          <Field type="text" name="email" />
        </label>

        <label>
          Password:
          <Field type="password" name="password" />
        </label>

        <label>
          TOS:
          <Field type="checkbox" name="tos" />
        </label>
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
  }
})(UserForm);

export default UserFormWithFormik;
