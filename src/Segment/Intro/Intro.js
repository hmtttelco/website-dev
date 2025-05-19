import React from "react";
import "./Intro.css";

const Intro = () => {
	return (
		<div className="introbase">
			<div className="row-container">
				<div>
					<p className="heading">About Us</p>
					<p className="bodycopy-landing">
						<span className="text-bold-aboutus">
							Himpunan Mahasiswa Teknik Telekomunikasi
						</span>{" "}
						merupakan organisasi kemahasiswaan di Universitas Telkom Bandung,
						Program Studi Strata 1 Teknik Telekomunikasi, yang telah disahkan
						sejak tanggal 9 Februari 2014 yang sebelumnya telah terbentuknya
						Telco sejak 7 Desember 2011.
					</p>
					<a href="/kabinethmtt" className="viewmore">
						View More
					</a>
				</div>
				<img className="aboutus-img" src="./img/fotoinkab.png" alt="foto inkab" />
			</div>
		</div>
	);
};

export default Intro;
