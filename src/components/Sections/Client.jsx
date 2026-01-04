import React, { useState } from "react";


import pertahanan from "../../assets/images/clients/pertahanan.png";
import mirota from "../../assets/images/clients/mirota.png";
import sydeco from "../../assets/images/clients/sydeco.png";
import kominfo from "../../assets/images/clients/kominfo.png";
import bireuen from "../../assets/images/clients/bireuen.png";
import kpk from "../../assets/images/clients/KPK.png";
import dq from "../../assets/images/clients/DQ.png";
import amikom from "../../assets/images/clients/amikom.png";
import univ1 from "../../assets/images/clients/univ1.png";
import univ2 from "../../assets/images/clients/univ2.png";
import haribi from "../../assets/images/clients/haribi.png";
import tas from "../../assets/images/clients/tas.png";
import suhu from "../../assets/images/clients/suhu.png";
import kominfopinrang from "../../assets/images/clients/kominfopinrang.png";
import fac from "../../assets/images/clients/fac.png";
import mapi from "../../assets/images/clients/mapi.png";
import mamikos from "../../assets/images/clients/mamikos.png";
import metro from "../../assets/images/clients/metro.png";
import itb from "../../assets/images/clients/itb.png";
import hokben from "../../assets/images/clients/hokben.png";


import alumni01 from "../../assets/images/clients/client_alumni01.png";
import alumni02 from "../../assets/images/clients/client_alumni02.png";
import alumni03 from "../../assets/images/clients/client_alumni03.png";
import alumni04 from "../../assets/images/clients/client_alumni04.png";
import alumni05 from "../../assets/images/clients/client_alumni05.png";
import alumni06 from "../../assets/images/clients/client_alumni06.png";
import alumni07 from "../../assets/images/clients/client_alumni07.png";
import alumni08 from "../../assets/images/clients/client_alumni08.png";


import seminar1 from "../../assets/images/clients/seminar1.png";
import seminar2 from "../../assets/images/clients/seminar2.png";
import seminar3 from "../../assets/images/clients/seminar3.png";
import seminar4 from "../../assets/images/clients/seminar4.png";
import seminar5 from "../../assets/images/clients/seminar5.png";
import seminar6 from "../../assets/images/clients/seminar6.png";
import seminar7 from "../../assets/images/clients/seminar7.png";
import seminar8 from "../../assets/images/clients/seminar8.png";
import seminar9 from "../../assets/images/clients/seminar9.png";
import seminar10 from "../../assets/images/clients/seminar10.png";
import seminar11 from "../../assets/images/clients/seminar11.png";
import seminar12 from "../../assets/images/clients/seminar12.png";
import seminar13 from "../../assets/images/clients/seminar13.png";
import seminar14 from "../../assets/images/clients/seminar14.png";


import partner01 from "../../assets/images/clients/client_companypartner01.png";
import partner02 from "../../assets/images/clients/client_companypartner02.png";
import partner03 from "../../assets/images/clients/client_companypartner03.png";
import partner04 from "../../assets/images/clients/client_companypartner04.png";
import partner05 from "../../assets/images/clients/client_companypartner05.png";
import partner06 from "../../assets/images/clients/client_companypartner06.png";
import partner07 from "../../assets/images/clients/client_companypartner07.png";
import partner08 from "../../assets/images/clients/client_companypartner08.png";
import partner09 from "../../assets/images/clients/client_companypartner09.png";


import friend01 from "../../assets/images/clients/client_companyfriend01.png";
import friend02 from "../../assets/images/clients/client_companyfriend02.png";
import friend03 from "../../assets/images/clients/client_companyfriend03.png";
import friend04 from "../../assets/images/clients/client_companyfriend04.png";
import friend05 from "../../assets/images/clients/client_companyfriend05.png";
import friend06 from "../../assets/images/clients/client_companyfriend06.png";
import friend07 from "../../assets/images/clients/client_companyfriend07.png";
import friend08 from "../../assets/images/clients/client_companyfriend08.png";
import friend09 from "../../assets/images/clients/client_companyfriend09.png";
import friend10 from "../../assets/images/clients/client_companyfriend10.png";


import media1 from "../../assets/images/clients/mediareport1.png";
import media2 from "../../assets/images/clients/mediareport2.png";
import media3 from "../../assets/images/clients/mediareport3.png";
import media4 from "../../assets/images/clients/mediareport4.png";
import media5 from "../../assets/images/clients/mediareport5.png";
import media6 from "../../assets/images/clients/mediareport6.png";
import media7 from "../../assets/images/clients/mediareport7.png";
import media8 from "../../assets/images/clients/mediareport8.png";
import media9 from "../../assets/images/clients/mediareport9.png";
import media10 from "../../assets/images/clients/mediareport10.png";
import media11 from "../../assets/images/clients/mediareport11.png";
import media12 from "../../assets/images/clients/mediareport12.png";
import media13 from "../../assets/images/clients/mediareport13.png";
import media14 from "../../assets/images/clients/mediareport14.png";
import media15 from "../../assets/images/clients/mediareport15.png";


import country01 from "../../assets/images/clients/client_country01.png";
import country02 from "../../assets/images/clients/client_country02.png";
import country03 from "../../assets/images/clients/client_country03.png";
import country04 from "../../assets/images/clients/client_country04.png";


const tabData = {
  Training: [
    pertahanan, mirota, sydeco, kominfo, bireuen, kpk, dq, amikom, univ1, univ2,
    haribi, tas, suhu, kominfopinrang, pertahanan, fac, mapi, mamikos, metro, itb, hokben
  ],
  Alumni: [
    alumni01, alumni02, alumni03, alumni04, alumni05, alumni06, alumni07, alumni08
  ],
  Seminar: [
    seminar1, seminar2, seminar3, seminar4, seminar5, seminar6, seminar7,
    seminar8, seminar9, seminar10, seminar11, seminar12, seminar13, seminar14
  ],
  "Company Partner": [
    partner01, partner02, partner03, partner04, partner05, partner06, partner07, partner08, partner09
  ],
  "Company Friends": [
    friend01, friend02, friend03, friend04, friend05,
    friend06, friend07, friend08, friend09, friend10
  ],
  "Media Report": [
    media1, media2, media3, media4, media5, media6, media7, media8,
    media9, media10, media11, media12, media13, media14, media15
  ],
  Country: [
    country01, country02, country03, country04
  ]
};

// ✅ Deskripsi tab
const tabDescriptions = {
  Training: "Mereka yang telah mengikuti X-code Training kelas dari berbagai perusahaan, KPK, kementerian, diskominfo, kampus dan sebagainya.",
  Alumni: "Informasi dari alumni X-Code training yang mereka mendapatkan pekerjaan di Bank, Pemda, KOMINFO & berbagai perusahaan.",
  Seminar: "Clients kami untuk mengisi seminar dan workshop di Kampus-kampus Indonesia juga sekolah, mall dan perusahaan.",
  "Company Partner": "Kerja sama dengan berbagai perusahaan nasional maupun internasional sebagai mitra strategis X-Code.",
  "Company Friends": "Perusahaan sahabat yang mendukung kegiatan X-Code dalam berbagai bentuk kolaborasi.",
  "Media Report": "Berbagai media telah meliput kegiatan dan prestasi X-Code, baik di tingkat lokal maupun nasional.",
  Country: "X-Code telah bekerja sama dengan mitra dari berbagai negara untuk mendukung pertumbuhan global."
};

const tabCategories = Object.keys(tabData);

function ClientPartnerSection() {
  const [activeTab, setActiveTab] = useState("Training");

  return (
    <div className="client-partner" id="Our Client">
      <h2>Client and Partner</h2>
      <p>
        Kami sudah bekerja sama dengan berbagai klien dan mitra mulai dari universitas, perusahaan baik dalam negeri maupun luar negeri.
      </p>

      <div className="tabs">
        {tabCategories.map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <h3>{tabDescriptions[activeTab]}</h3>

      <div className="logos-section">
        <div className="logos-container">
          <div className="logos-grid">
            {tabData[activeTab].map((logoSrc, index) => (
              <div className="logo-box" key={index}>
                <img src={logoSrc} alt={`${activeTab} Logo ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientPartnerSection;
