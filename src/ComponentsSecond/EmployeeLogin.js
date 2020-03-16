import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "tachyons";

const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  }
};

const EmployeeLogin = () => {
  let history = useHistory();
  const onFinish = values => {
    console.log("Success:", values);
    history.push("/EmployeeSkillFill");
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  return (
    <article class="br2 ba dark-gray shadow-5 b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!"
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!"
            }
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </article>
  );
};
export default withRouter(EmployeeLogin);
