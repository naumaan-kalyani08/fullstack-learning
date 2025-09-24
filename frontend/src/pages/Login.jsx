import { Button, Card, Input } from "antd";

const Login = () => {
  return (
    <div className="login-card-container bg-red-200 ">
      <Card title="Login" className="login-card-main bg-white">
        <Input placeholder="email" />
        <Input placeholder="Password" />
        <div className="">
          <Button type="primary">Login</Button>
        </div>
      </Card>
      <div className="login-card-main bg-white">Login</div>
    </div>
  );
};

export default Login;
