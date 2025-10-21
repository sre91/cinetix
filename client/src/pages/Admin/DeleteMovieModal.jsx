import { message, Modal } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../../redux/loaderSlice";
import { deleteMovie } from "../../api/movie";

const DeleteMovieModal = ({
  isDeleteModalOpen,
  setIsDeleteModalOpen,
  selectedMovie,
  setSelectedMovie,
  fetchMovieData,
}) => {
  const dispatch = useDispatch();
  const handleOk = async () => {
    try {
      dispatch(showLoading());
      const movieId = selectedMovie._id;
      const response = await deleteMovie({ movieId });
      if (response.success) {
        message.success(response.message);
        fetchMovieData();
      } else {
        message.warning(response.message);
      }
    } catch (error) {
      message.error(error);
    } finally {
      setIsDeleteModalOpen(false);
      setSelectedMovie(null);
      dispatch(hideLoading());
    }
  };
  const handleCancel = () => {
    setIsDeleteModalOpen(false);
    selectedMovie(null);
  };
  return (
    <Modal
      title="Delete Movie"
      open={isDeleteModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p className="pt-3 fs-18">are you sure</p>
      <p className="pt-3 fs-18">this action cant be undone</p>
    </Modal>
  );
};

export default DeleteMovieModal;
