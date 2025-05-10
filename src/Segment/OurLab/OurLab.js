import React from "react";
import "./OurLab.css";
import LabBox from "../../Component/LabBox/LabBox";

const OurLab = () => {
	const laboratoryList = [
		{
			LabName: "Jaringan",
			icon: "./icon/cloudLogo.png",
			desc: "Laboratorium Jaringan Membahas Teknologi dalam menghubungkan satu perangkat dengan perangkat lain",
		},
		{
			LabName: "Sinyal",
			icon: "./icon/signalLogo.png",
			desc: "Laboratorium Jaringan Membahas Teknologi dalam menghubungkan satu perangkat dengan perangkat lain",
		},
		{
			LabName: "Transmisi",
			icon: "./icon/transLogo.png",
			desc: "Laboratorium Jaringan Membahas Teknologi dalam menghubungkan satu perangkat dengan perangkat lain",
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
						praktik. S1 Teknik Telekomunikasi memiliki tiga laboratorium
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
