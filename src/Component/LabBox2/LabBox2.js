import React from "react";
import "./LabBox2.css";

function LabBox2(props) {
	return (
		<div>
			<div className="lab-box2">
				<div className="content">
					<img className="icon-placeholder" src={props.iconURL}></img>
					<p className="text-bold2">{props.namaLab}</p>
					<p className="text-regular2">{props.labdesc}</p>
					<p className="text-italic-more2">See More</p>
				</div>
			</div>
		</div>
	);
}

export default LabBox2;
