import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GetCurrentUser } from "../api/user";
import { useState } from "react";
import { message } from "antd";

const HomePage = () => {
  const [userInfo, setUserInfo] = useState();
  const navigate = useNavigate();

  return (
    <>
      <div>Home</div>
      <div>Hello:{userInfo?.name}</div>
      <div>Email:{userInfo?.email}</div>
      <Link to="/login" onClick={localStorage.removeItem("tokenForBMS")}>
        Logout
      </Link>
    </>
  );
};

export default HomePage;
