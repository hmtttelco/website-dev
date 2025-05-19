import React from "react";
import "./LabBox.css";
import { Link } from "react-router-dom";

function LabBox(props) {
  return (
    <div className="box-placement">
      <div className="lab-box">
        {/* <div className="content"> */}
        <div className="atasbawah">
          <img className="icon-placeholder" src={props.iconURL} alt="icon" />
          <p className="text-bold">{props.namaLab}</p>
          <p className="text-regular">{props.labdesc}</p>
        </div>
        <Link className="no-underline" to={`/Laboratory/${props.id}`}>
          <p className="text-italic-more">See More</p>
        </Link>
      </div>
    </div>
    // </div>
  );
}

export default LabBox;
