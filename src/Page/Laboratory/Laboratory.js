import React from "react";
import Header from "../../Component/Header/Header";
import LabBox from "../../Component/LabBox/LabBox";
import LabBox2 from "../../Component/LabBox2/LabBox2";
import Footer from "../../Component/Footer/Footer";
import "./Laboratory.css";
import { useEffect } from "react";
import { useState } from "react";
import { getLab } from "../LabDetail/action";
import { truncateText } from "../../utils/truncate";
const laboratoryList = [
  {
    LabName: "SPICE",
    icon: "./icon/cloudLogo.png",
    desc: "Laboratorium Jaringan Membahas Teknologi dalam menghubungkan satu perangkat dengan perangkat lain",
  },
  
  {
    LabName: "ICON",
    icon: "./icon/transLogo.png",
    desc: "Laboratorium Jaringan Membahas Teknologi dalam menghubungkan satu perangkat dengan perangkat lain",
  },
];
const Laboratory = () => {
  useEffect(() => {
    document.title = "Laboratorium"; // Change the window title here
  }, []);
  const [lab, setLab] = useState([]);
  const fetchdata = async () => {
    try {
      const data = await getLab();

      setLab(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchdata();
    console.log(lab);
  }, []);

  return (
    <div>
      <Header />
      <div>
        <div className="base-lab">
          <div>
            <p className="heading-lab">Laboratory</p>
            <p className="sub-heading-lab">Intelligent Communications and Networks (ICON)</p>
            <div className="center">
              <p className="bodycopy-lab">
               Laboratorium ICON fokus pada pengembangan sistem komunikasi cerdas serta 
               jaringan telekomunikasi modern.
              </p>
            </div>
            <div className="lab-box-row">
              {lab
                .filter(
                  (laboratoryLists) => laboratoryLists.labType === "network"
                )
                .map((laboratoryLists) => (
                  <LabBox
                    key={laboratoryLists.lab_id}
                    namaLab={laboratoryLists.name}
                    labdesc={truncateText(laboratoryLists.about, 100)}
                    iconURL={laboratoryLists.logo_url}
                    id={laboratoryLists.lab_id}
                  />
                ))}
            </div>
          </div>

          {/* <div className="lab-type"></div> */}
        </div>
        <div className="base-lab-2">
          <div>
            <p className="heading-lab-2">Laboratory</p>
            <p className="sub-heading-lab-2">Signal Processing, Information Security, and Computer Engineering (SPICE)</p>
            <div className="center">
              <p className="bodycopy-lab-2">
                Laboratorium SPICE berfokus pada bidang pengolahan sinyal digital, keamanan informasi (cybersecurity), serta komputasi 
                dan rekayasa perangkat lunak dalam konteks sistem komunikasi dan teknik elektro.
              </p>
            </div>
            <div className="lab-box-row">
              {lab
                .filter(
                  (laboratoryLists) =>
                    laboratoryLists.labType === "transmission"
                )
                .map((laboratoryLists) => (
                  <LabBox2
                    key={laboratoryLists.lab_id}
                    namaLab={laboratoryLists.name}
                    labdesc={truncateText(laboratoryLists.about, 100)}
                    iconURL={laboratoryLists.logo_url}
                    id={laboratoryLists.lab_id}
                  />
                ))}
            </div>
          </div>

          {/* <div className="lab-type"></div> */}
        
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Laboratory;
