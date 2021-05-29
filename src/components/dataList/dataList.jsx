import "./dataList.css";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getIpTrackerData } from "../../redux/ipDucks";

const DataList = () => {
  const { data } = useSelector((store) => store.ipData);

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchDta = () => {
      dispatch(getIpTrackerData(""));
    };
    if (!data) {
      fetchDta();
    }
  }, [data, dispatch]);
  return (
    data && (
      <div className="datalist_container">
        <ul className="datalist_list">
          <li className="datalist_item line">
            <h5>IP ADRESS</h5>
            <h2>{data.ip}</h2>
          </li>
          <li className="datalist_item line">
            <h5>LOCATION</h5>
            <div className="datalist_item_location">
              <h2>{`${data.location.city}, ${data.location.country}`}</h2>
              <h2>{data.location.geonameId}</h2>
            </div>
          </li>
          <li className="datalist_item line">
            <h5>TIMEZONE</h5>
            <h2>{`UTC ${data.location.timezone}`}</h2>
          </li>
          <li className="datalist_item line">
            <h5>ISP</h5>
            <h2>{data.isp}</h2>
          </li>
          <li className="datalist_item">
            <h5>NOMBRE</h5>
            <h2>{data.name}</h2>
          </li>
        </ul>
      </div>
    )
  );
};

export default DataList;
