import { Form, Input, Button, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { LoginUser } from "../api/user";
const Login = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const response = await LoginUser(values);
      if (response?.success) {
        message.success(response?.message);
        localStorage.setItem("tokenForBMS", response?.data);
        navigate("/");
      } else {
        message.warning(response?.message);
      }
    } catch (error) {
      message.error(error);
    }
  };

  return (
    <div className="App-header">
      <main className="main-area mw-500 text-center px-3">
        <section>
          <h1>login to cineTix</h1>
        </section>

        <section>
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              label="Email"
              htmlFor="email"
              name="email"
              className="d-block"
              rules={[{ required: true, message: "Email is required" }]}
            >
              <Input
                id="email"
                type="email"
                placeholder="Enter your Email"
              ></Input>
            </Form.Item>

            <Form.Item
              label="Password"
              htmlFor="password"
              name="password"
              className="d-block"
              rules={[{ required: true, message: "Password is required" }]}
            >
              <Input
                id="password"
                type="password"
                placeholder="Enter your Password"
              ></Input>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                block
                htmlFor="submit"
                htmlType="submit"
                style={{ fontSize: "1rem", fontWeight: "600" }}
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        </section>
        <section>
          <p>
            New User register here ? <Link to="/register">Register now</Link>
          </p>
        </section>
      </main>
    </div>
  );
};

export default Login;
