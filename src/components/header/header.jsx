import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getIpTrackerData,
  LoadingAccion,
  LoadingFalseAccion,
} from "../../redux/ipDucks";
import "./header.css";
const Header = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((store) => store.ipData);
  const [ip, setIp] = useState("");

  const handleSubmit = (e) => {
    console.log("Click");
    e.preventDefault();
    dispatch(LoadingAccion());
    dispatch(getIpTrackerData(ip));
  };

  useEffect(() => {
    if (error) {
      toast.error(" You most add a valid IP, please try again !", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        dispatch(LoadingFalseAccion());
        setIp("");
      }, 3000);
    }
  }, [error, dispatch]);

  return (
    <div className="header_container">
      <div className="form_container">
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <h1>IP ADRESS TRACKER</h1>
          <div className="input_box">
            <input
              value={ip}
              type="text"
              placeholder="ej: 8.8.8.8"
              autoFocus={true}
              onChange={(e) => setIp(e.target.value.trim())}
            />
            <button>send</button>
          </div>
        </form>
      </div>
      {error && (
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      )}
    </div>
  );
};

export default Header;
