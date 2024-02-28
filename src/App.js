import { Button, Checkbox, Form, Input, Select } from "antd";
import React from "react";

const FormSubmit = () => {
  const onFinish = (values) => {
    console.log("values", values);
  };

  return (
    <div>
      <Form onFinish={onFinish} layout="vertical">
        <Form.Item
          name={"first_name"}
          label="First Name"
          rules={[
            {
              required: true,
              message: "Enter your first name",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="gender"
          label="Gender"
          rules={[
            {
              required: true,
            },
          ]}
        ></Form.Item>
        <Form.Item name={"last_name"} label="Last Name">
          <Input />
        </Form.Item>
        <Form.Item name={"Remember"}>
          <Checkbox defaultChecked={true}>Remember</Checkbox>
        </Form.Item>
        <Form.Item name={"description"} label="Description">
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          name={"email"}
          label="Email"
          rules={[
            {
              type: "email",
              message: "Not valid",
            },
            {
              required: true,
              message: "Enter your email id",
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            { required: true, message: "Please enter your phone number" },
            {
              pattern: /^\d{10}$/, // Adjust the regular expression based on your requirements
              message: "Please enter a valid phone number",
            },
          ]}
        >
          <Input placeholder="Enter your phone number" />
        </Form.Item>
        <Button htmlType="submit">Form Submit</Button>
      </Form>
    </div>
  );
};

export default FormSubmit;
