import React, { useState } from "react";
import { withFormik, Form, Field, ErrorMessage } from "formik";
import { Button, FormGroup, Label, Input, FormText, Alert } from "reactstrap";
import * as Yup from "yup";
import axios from "axios";

function UserForm(props) {
  return (
    <div className="formik-form">
      <Form>
        <FormGroup>
          <ErrorMessage
            name="name"
            render={msg => <Alert color="danger">{msg}</Alert>}
          />
          <Label>
            Name:
            <Input tag={Field} type="text" name="name" />
          </Label>
        </FormGroup>
        <FormGroup>
          <ErrorMessage
            name="email"
            render={msg => <Alert color="danger">{msg}</Alert>}
          />
          <Label>
            Email:
            <Input tag={Field} type="text" name="email" />
          </Label>
        </FormGroup>
        <FormGroup>
          <ErrorMessage
            name="password"
            render={msg => <Alert color="danger">{msg}</Alert>}
          />
          <Label>
            Password:
            <Input
              tag={Field}
              type="password"
              name="password"
            />
          </Label>
        </FormGroup>
        <FormGroup check>
          <ErrorMessage
            name="tos"
            render={msg => <Alert color="danger">{msg}</Alert>}
          />
          <Label check>
            <Input tag={Field} name="tos" type="checkbox" /> Terms of Service
          </Label>
        </FormGroup>
        <Button>Submit</Button>
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
    tos: Yup.boolean().oneOf([true], "You must agree to terms of service!")
  }),

  handleSubmit(users, tools) {
    axios
      .post("https://reqres.in/api/users", users)
      .then(res => {
        console.log(res.data);
        tools.props.setUsersArray(tools.props.usersArray.concat(res.data));
        tools.resetForm();
      })
      .catch(err => {
        console.log(err);
      });
  }
})(UserForm);

export default UserFormWithFormik;
