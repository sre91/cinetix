import React from "react";
import { Modal } from "antd";

const MovieForm = ({ isModalOpen, setIsModalOpen }) => {
  const formType = "add";
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Modal
      centered
      title={formType === "add" ? "Add Movie" : "Edit Movie"}
      open={isModalOpen}
      onCancel={handleCancel}
      width={800}
      footer={null}
    >
      <div>MovieForm</div>
    </Modal>
  );
};

export default MovieForm;
