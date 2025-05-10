import React from "react";
import "./ArticleTile.css";
import { Link } from "react-router-dom";

function ArticleTile(props) {
  return (
    <div className="Parent">
      <div className="Card">
        <div className="PhotoHolder">
          <img src={props.photo} />
        </div>

        <div className="Desc">
          <p className="Category">Update</p>
          <Link className="no-underline" to={`/article/${props.id}`}>
            <a className="text-button">
              <h1 className="Headline">{props.headline}</h1>
            </a>
          </Link>

          <p className="Date">{props.date}</p>
        </div>
      </div>
    </div>
  );
}

export default ArticleTile;
