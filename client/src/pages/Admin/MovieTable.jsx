import moment from "moment";
import { Button, message, Table } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../../redux/loaderSlice";
import { getAllMovies } from "../../api/movie";
import MovieForm from "./MovieForm";

const MovieTable = () => {
  const [movies, setMovies] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const tableHeadings = [
    {
      key: "poster",
      title: "Poster",
      dataIndex: "Poster",
      render: (text, data) => {
        return (
          <img
            src={data?.poster}
            alt="Movie poster"
            style={{ objectFit: "cover" }}
            width="75"
            height="115"
          />
        );
      },
    },
    {
      title: "Movie Name",
      dataIndex: "movieName",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Duration",
      dataIndex: "duration",
      render: (text) => {
        return `${text} min`;
      },
    },
    {
      title: "Genre",
      dataIndex: "genre",
    },
    {
      title: "Language",
      dataIndex: "language",
    },
    {
      title: "Release Date",
      dataIndex: "releaseDate",
      render: (text, data) => {
        return moment(data.releaseDate).format("MM-DD-YY");
      },
    },
  ];

  const getData = async () => {
    try {
      dispatch(showLoading());
      const response = await getAllMovies();
      if (response.success === true) {
        setMovies(response?.data);
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
    getData();
  }, []);
  return (
    <div>
      <div className="d-flex justify-content-end">
        <Button
          onClick={() => {
            setIsModalOpen(!isModalOpen);
          }}
        >
          Add Movie
        </Button>
      </div>
      <Table columns={tableHeadings} dataSource={movies} />
      {isModalOpen && (
        <MovieForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      )}
    </div>
  );
};

export default MovieTable;
