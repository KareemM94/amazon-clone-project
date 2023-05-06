import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import './Spinner.css'
const Spinner = () => {
  return (
    <div className="spinner">
          <FontAwesomeIcon icon={faSpinner} spin size="3x" />
    </div>
  );
};

export default Spinner;