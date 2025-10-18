import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GetCurrentUser } from "../api/user";
import { useState } from "react";

const HomePage = () => {
  const [userInfo, setUserInfo] = useState();
  const navigate = useNavigate();

  const getValidUser = async () => {
    try {
      const response = await GetCurrentUser();
      if (response.success) {
        setUserInfo(response?.data);
      }
      setUserInfo(response?.data);
    } catch (error) {
      message.error(error);
    }
  };

  //useffect localstorage
  useEffect(() => {
    if (localStorage.getItem("tokenForBMS")) {
      getValidUser();
    } else {
      navigate("/login");
    }
  }, []);
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
