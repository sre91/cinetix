import { Layout, Menu, message } from "antd";

import { Content, Footer, Header } from "antd/es/layout/layout";
import {
  AppStoreOutlined,
  CalendarOutlined,
  HomeOutlined,
  LinkOutlined,
  LoginOutlined,
  MailOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../redux/loaderSlice";
import { setUser } from "../redux/userSlice";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getValidUser = async () => {
    try {
      dispatch(showLoading());
      const response = await GetCurrentUser();
      if (response.success) {
        dispatch(setUser(response?.data));
      } else {
        message.warning(response?.message);
      }
    } catch (error) {
      message.error(error);
    } finally {
      dispatch(hideLoading());
    }
  };
  useEffect(() => {
    if (localStorage.getItem("tokenForBMS")) {
      getValidUser();
    } else {
      navigate("/login");
    }
  }, []);

  const navItems = [
    {
      key: "Home",
      label: <span onClick={() => navigate("/")}>Home</span>,
      icon: <HomeOutlined />,
    },
    {
      key: "roleProfiler",
      label: (
        <span
          onClick={() => {
            if (user.role === "admin") {
              navigate("/admin", { replace: true });
            } else if (user.role === "partner") {
              navigate("/partner", { replace: true });
            } else {
              navigate("/myBookings", { replace: true });
            }
          }}
        >
          {user?.role === "admin" && "Movie Management"}
          {user?.role === "partner" && "Theatre Management"}
          {user?.role === "user" && "My Bookings"}
        </span>
      ),
      icon: <BookOutlined />,
    },
    {
      key: "Profile",
      label: (
        <span
          onClick={() => {
            navigate("/profile");
          }}
        >
          My Profile
        </span>
      ),
      icon: <ProfileOutlined />,
    },
    {
      key: "Logout",
      label: (
        <Link
          to="/login"
          onClick={() => {
            localStorage.removeItem("tokenForBMS");
          }}
        >
          Logout
        </Link>
      ),
      icon: <LogoutOutlined />,
    },
  ];

  return (
    <>
      <Layout>
        <Header
          className="d-flex justify-content-between"
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
            alignItems: "center",
          }}
        >
          <h3 className="text-white m-0" style={{ color: "white" }}>
            BookMyShow
          </h3>
          <Menu them="dark" mode="horizontal" items={navItems} />
        </Header>
        <Content style={{ maxHeight: "100%" }}>{children}</Content>
        <Footer
          style={{
            textAlign: "center",
            background: "#001529",
            color: "white",
            position: "absolute",
            bottom: 0,
            zIndex: 1,
            width: "100%",
          }}
        >
          CineTix {new Date().getFullYear()} Created by sree
        </Footer>
      </Layout>
    </>
  );
};

export default ProtectedRoute;
