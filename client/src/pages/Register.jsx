import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <header className="App-header">
      <main className="main-area mw-500 text-center">
        <section>
          <h1>Register to Cinetix</h1>
        </section>
        <section>
          <Form layout="vertical">
            <Form.Item
              label="Name"
              htmlFor="name"
              name="name"
              className="d-block"
              rules={[{ required: true, message: "Name is required" }]}
            >
              <Input
                id="name"
                type="text"
                placeholder="Enter your name here"
              ></Input>
            </Form.Item>
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
                Register
              </Button>
            </Form.Item>
          </Form>
        </section>
        <section>
          <p>
            Already a user ? <Link to="/login">Login Now</Link>
          </p>
        </section>
      </main>
    </header>
  );
};

export default Register;
