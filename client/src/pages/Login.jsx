import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <header className="App-header">
      <main className="main-area mw-500 text-center px-3">
        <section>
          <h1>login to cineTix</h1>
        </section>

        <section>
          <Form layout="vertical">
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
    </header>
  );
};

export default Login;
