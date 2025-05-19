import React from "react";
import "./OurLab.css";
import LabBox from "../../Component/LabBox/LabBox";

const OurLab = () => {
	const laboratoryList = [
		{
			LabName: "Intelligent Communications and Networks ",
			icon: "./icon/transLogo.png",
			desc: "Kelompok Keahlian ICON fokus pada pengembangan sistem komunikasi cerdas serta jaringan telekomunikasi modern. Laboratorium di Kelompok Keahlian ini meneliti berbagai teknologi terkini dalam komunikasi wireless, jaringan komputer, manajemen jaringan, dan teknologi cerdas yang diaplikasikan pada sistem komunikasi",
		},
		{
			LabName: "Signal Processing, Information Security, and Computer Engineering",
			icon: "./icon/cloudLogo.png",
			desc: "Laboratorium SPICE berfokus pada bidang pengolahan sinyal digital, keamanan informasi (cybersecurity), serta komputasi dan rekayasa perangkat lunak dalam konteks sistem komunikasi dan teknik elektro.",
		},
		
	];
	return (
		<div className="base-lab">
			<div>
				<p className="heading-lab">LABORATORY</p>
				<p className="sub-heading-lab">MEET OUR LABORATORY</p>
				<div className="center">
					<p className="bodycopy-lab">
						Tidak hanya belajar teori, Pembelajaran dilakukan juga secara
						praktik. S1 Teknik Telekomunikasi memiliki dua laboratorium
						peminatan dimana tiap peminatannya terdiri dari beberapa
						laboratorium.
					</p>
				</div>
				<div className="lab-box-row">
					{laboratoryList.map((laboratoryLists) => (
						<LabBox
							key={laboratoryLists.id}
							namaLab={laboratoryLists.LabName}
							labdesc={laboratoryLists.desc}
							iconURL={laboratoryLists.icon}
						/>
					))}
				</div>
			</div>

			{/* <div className="lab-type"></div> */}
		</div>
	);
};

export default OurLab;
