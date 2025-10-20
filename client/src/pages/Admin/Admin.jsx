import React, { Children } from "react";
import MovieTable from "./MovieTable";
import { Tabs } from "antd";
import TheatreTable from "./TheatreTable";

const Admin = () => {
  const tabItems = [
    {
      key: "movies",
      label: "Movies",
      Children: <MovieTable />,
    },
    {
      key: "theatre",
      label: "Theatres",
      Children: <TheatreTable />,
    },
  ];
  return (
    <div style={{ margin: "10px" }}>
      <h1>Admin Dashboard</h1>
      <Tabs defaultActiveKey="movies" items={tabItems} />
    </div>
  );
};

export default Admin;
