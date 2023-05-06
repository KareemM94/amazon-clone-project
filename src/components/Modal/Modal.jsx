import React from "react";
import { useEffect, useState } from "react";
import Spinner from "../tools/Spinner";
import "./Modal.css";

function Modal({ toggleModal }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="modal">
          <div className="modal-content">
            <h2>Internet connection error</h2>
            <p>
              An Internet connection is required to play this video. Check the
              device's connection status and then try again.
            </p>
            <button onClick={toggleModal}>Close Player</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
