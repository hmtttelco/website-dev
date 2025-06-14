import React from "react";
import "./OurLab.css";
import LabBox from "../../Component/LabBox/LabBox";

const OurLab = () => {
	const laboratoryList = [
		{
			id: 1, 
			LabName: "Intelligent Communications and Networks ",
			icon: "./icon/transLogo.png",
			desc: "Kelompok Keahlian ICON fokus pada pengembangan sistem komunikasi cerdas serta jaringan telekomunikasi modern. Laboratorium di Kelompok Keahlian ini meneliti berbagai teknologi terkini dalam komunikasi wireless, jaringan komputer, manajemen jaringan, dan teknologi cerdas yang diaplikasikan pada sistem komunikasi",
		},
		{
			id: 2,
			LabName: "Signal Processing, Information Security, and Computer Engineering",
			icon: "./icon/cloudLogo.png",
			desc: "Laboratorium SPICE berfokus pada bidang pengolahan sinyal digital, keamanan informasi (cybersecurity), serta komputasi dan rekayasa perangkat lunak dalam konteks sistem komunikasi.",
		},
		
	];
	return (
		<div className="base-lab">
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

			{/* ✅ Tambahkan wrapper di sini */}
			<div>
			{laboratoryList.map((lab, index) => (
				<LabBox
				key={index}
				namaLab={lab.LabName}
				labdesc={lab.desc}
				iconURL={lab.icon}
				/>
			))}
			</div>
	
		</div>

	);
};

export default OurLab;
