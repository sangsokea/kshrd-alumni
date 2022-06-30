import React from "react";
// import education from "../../commons/images/public sector/education.jpg";

import ckcc from "../../commons/images/partner logo/ckcc.jpg";
import king_sejong_institute from "../../commons/images/partner logo/king sejong institute.png";
// import koica from "../../commons/images/partner logo/koica.jpg";
import kosign from "../../commons/images/partner logo/kosign.jpg";
import morakot from "../../commons/images/partner logo/morakot.png";
// import nipa from "../../commons/images/partner logo/nipa.png";
import webcash from "../../commons/images/partner logo/webcash.jpg";
import WeMB from "../../commons/images/partner logo/WeMB.png";

import education from "../../commons/images/public sector/education.jpg";
import king_sejong from "../../commons/images/public sector/king_sejong.jpg";
import koica from "../../commons/images/public sector/koica.jpg";
import kotra from "../../commons/images/public sector/kotra.jpg";
import ministry_of_information from "../../commons/images/public sector/ministry_of_information.jpg";
import ministry_of_justic from "../../commons/images/public sector/ministry_of_justic_cambodia.jpg";
import ministry_of_land from "../../commons/images/public sector/ministry_of_land.jpg";
import nipa from "../../commons/images/public sector/nipa.jpg";

export default function PublicSectorComponent() {
  return (
    <>
      <div className="col-span-1 laptop:col-span-2 laptop:block">
        <div className="grid-rows-2">
          <div className="grid laptop:grid-cols-4 grid-cols-2">
            <div>
              <img src={education} alt="education"></img>
            </div>
            <div>
              <img className="px-2" src={nipa} alt="nipa"></img>
            </div>
            <div>
              <img
                className="px-2"
                src={king_sejong}
                alt="king_sejong"
              ></img>
            </div>
            <div>
              <img className="px-2" src={koica} alt="koica"></img>
            </div>
          </div>

          <div className="grid laptop:grid-cols-4 grid-cols-2 px-2">
            <div>
              <img className="px-2" src={kotra} alt="kotra"></img>
            </div>
            <div>
              <img className="px-2" src={ministry_of_information} alt="ministry of information"></img>
            </div>
            <div>
              <img className="px-2" src={ministry_of_land} alt="ministry of land"></img>
            </div>
            <div>
              <img className="px-2" src={ministry_of_justic} alt="ministry of justic cambodia"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
