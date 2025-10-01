import { Button, Card, Form, Input, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const Login = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      console.log("Login values:", values);
      message.success("Login successful!");
    } catch (error) {
      message.error("Login failed!");
    }
  };

  // Handlers for navigation (replace with your routing logic)
  const handleSignUp = () => {
    // e.g., navigate("/signup");
    message.info("Redirect to Sign Up page");
  };

  const handleForgotPassword = () => {
    // e.g., navigate("/forgot-password");
    message.info("Redirect to Forgot Password page");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card
        className="w-full max-w-md shadow-md"
        headStyle={{ textAlign: "center", fontSize: "1.5rem" }}
      >
        <p className="text-center pb-4"> Login</p>
        <Form
          form={form}
          name="login"
          onFinish={onFinish}
          layout="vertical"
          requiredMark={false}
        >
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Email" size="large" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Password"
              size="large"
            />
          </Form.Item>

          <Form.Item className="mb-0">
            <Button
              type="link"
              className="text-center w-100"
              onClick={handleForgotPassword}
            >
              Forgot Password?
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full"
              size="large"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
        <div className="">
          <Button className="w-100" onClick={handleSignUp}>
            Sign Up
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Login;
