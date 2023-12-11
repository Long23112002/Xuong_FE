import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const CustomActionButtons = ({ row, onEyeClick, onPencilClick }) => {
  const buttonStyle = {
    marginRight: "10px",
  };

  const eyeButtonStyle = {
    backgroundColor: "green",
    color: "white",
    padding: "5px 10px",
    border: "none",
    borderRadius: "5px",
  };

  const pencilButtonStyle = {
    backgroundColor: "yellow",
    color: "black",
    padding: "5px 10px",
    border: "none",
    borderRadius: "5px",
  };

  return (
    <div>
      <button
        style={{ ...buttonStyle, ...eyeButtonStyle }}
        onClick={() => onEyeClick(row)}
      >
        <FontAwesomeIcon icon={faEye} />
      </button>
      <button
        style={{ ...buttonStyle, ...pencilButtonStyle }}
        onClick={() => onPencilClick(row)}
      >
        <FontAwesomeIcon icon={faPencilAlt} />
      </button>
    </div>
  );
};

export default CustomActionButtons;
