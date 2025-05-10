import React from "react";
import Header from "../../Component/Header/Header";
import "./labdetail.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { detailLabPage } from "./action";
import { paragraphSplit } from "../../utils/paragraph";

const CoordinatorLab = [
  { nama: "Ridho", jabatan: "Koordinator Asisten" },
  { nama: "Ariiq", jabatan: "Pembimbing 1" },
  { nama: "Reva", jabatan: "Pembimbing 2" },
  { nama: "Rayan", jabatan: "Koordinator Riset" },
];
const LabDetail = () => {
  const { id: labID } = useParams();
  const [labData, setLabData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [coor, setCoordinator] = useState([]);
  const [type, setType] = useState("");
  const [about, setAbout] = useState([]);
  const [activity, setActivity] = useState([]);
  const [gallery, setGallery] = useState([]);
  const fetchdata = async () => {
    try {
      const data = await detailLabPage(labID);
      console.log(data);
      setLabData(data);
      setCoordinator(data.coordinators);
      setAbout(paragraphSplit(data.about));
      setActivity(data.activity);
      setGallery(data.gallery);
      if (data.labType === "network") {
        setType("Network");
      } else if (data.labType === "trasmission") {
        setType("Transmission");
      } else if (data.labType === "signal") {
        setType("Signal");
      }
    } catch (error) {
      console.log("Error fetching data:", error);
    } finally {
      setLoading(false); // Set loading to false once the fetch is complete
    }
  };

  useEffect(() => {
    fetchdata();
  }, [labID]); // Add newsId to dependency array

  if (loading) {
    return <div>Loading...</div>; // Display loading message while data is being fetched
  }

  return (
    <div>
      <Header />
      <div className="content-wrapper">
        <div className="lab-title">
          <div className="title-container">
            {labData.labType === "network"}
            <p className="title">{type} Laboratorium</p>
            <p className="lab-name">{labData.name}</p>
          </div>
          <img
            className="header-placeholder"
            src={labData.headingImg}
            alt="foto"
          />
        </div>
      </div>

      <div className="content-wrapper">
        <div className="aboutus-title">
          <div className="aboutus-container">
            <p className="aboutus">{about[0]}</p>
            <p className="aboutus-grey">{about[1]}</p>
          </div>
          <div className="logolab-container">
            <img
              className="logolab-placeholder"
              src={labData.logo_url}
              alt="foto"
            />
          </div>
        </div>
      </div>

      <div className="wrapper">
        <p className="lab-name">Laboratorium Coordinator</p>
        <div className="photocard-container">
          {coor.map((item) => (
            <div className="parent-photocard">
              <div className="photocard">
                <img className="photo" src={item.img} />
              </div>
              <p className="nama">{item.nama}</p>
              <p className="jabatan">{item.jabatan}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="wrapper">
        <p className="lab-name">Activity</p>
        <div className="content-wrapper-activity">
          {activity.map((item) => (
            <div className="activity-title">
              <div className="activity-container">
                <p className="lab-name">{item.activityTitle}</p>
                <p className="activity-copy">{item.activityDesc}</p>
              </div>
              <div className="logolab-container">
                <img
                  className="activity-image"
                  src={item.activityImg}
                  alt="foto"
                />
              </div>
            </div>
          ))}
          {/* 
          <div className="activity-title">
            <div className="logolab-container">
              <img
                className="activity-image"
                src={"./img/inkab.jpg"}
                alt="foto"
              />
            </div>
            <div className="activity-container">
              <p className="lab-name">NetSchool.</p>
              <p className="activity-copy">
                NetSchool merupakan study grup atau program untuk melatik
                mahasiswa/I aktif Telkom University agar mempunyai dasar yang
                terkait dengan Network Computer dan Server Administration, serta
                mencari talenta terbaik untuk direktrut sebagai anggota baru
                Laboratorium Adaptive Network.
              </p>
            </div>
          </div> */}
        </div>
      </div>

      <div className="wrapper">
        <p className="lab-name">Gallery</p>
        <div className="container">
          <div className="container-duo">
            <img
              className="gallery-placeholder-sm"
              src={gallery[0].galleryUrl}
              alt="foto 1"
            />
            <img
              className="gallery-placeholder-sm"
              src={gallery[1].galleryUrl}
              alt="foto 2"
            />
          </div>
          <img
            className="gallery-placeholder-lg"
            src={gallery[2].galleryUrl}
            alt="foto 3"
          />
        </div>
      </div>

      <div className="wrapper-contact">
        <p className="lab-name">Contact Us</p>
        <div>
          <p className="aboutus-grey">Email</p>
          <p className="aboutus">{labData.contact.email}</p>
        </div>
        <div>
          <p className="aboutus-grey">Instagram</p>
          <p className="aboutus">{labData.contact.instagram}</p>
        </div>
        <div>
          <p className="aboutus-grey">Line</p>
          <p className="aboutus">{labData.contact.line}</p>
        </div>
      </div>
    </div>
  );
};

export default LabDetail;
