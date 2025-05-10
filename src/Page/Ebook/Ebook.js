import React from "react";
import Header from "../../Component/Header/Header";
import "./Ebook.css";
import { eBookList } from "./ebooklist";
const Ebook = () => {
  const data = eBookList;
  console.log(data);
  return (
    <div className="base">
      <Header />

      <div className="headingKabinet-base">
        <p className="heading-kabinet-text">HMTT E-Book</p>
      </div>
      <div className="ebook-container">
        <div className="ebook-tile-container">
          {data.map((item) => (
            <div className="ebook-box">
              <div className="content">
                <img className="icon-placeholder" src="./icon/book.png"></img>
                <p className="text-bold">{item.Judul}</p>
                <p className="text-regular">{item.Tahun}</p>
                <a className="viewbook-button" href={item.Url}>
                  View E-Book
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ebook;
