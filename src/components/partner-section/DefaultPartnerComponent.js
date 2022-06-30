import React from "react";

import ckcc from "../../commons/images/partner logo/ckcc.jpg";
import king_sejong_institute from "../../commons/images/partner logo/king sejong institute.png";
import koica from "../../commons/images/partner logo/koica.jpg";
import kosign from "../../commons/images/partner logo/kosign.jpg";
import morakot from "../../commons/images/partner logo/morakot.png";
import nipa from "../../commons/images/partner logo/nipa.png";
import webcash from "../../commons/images/partner logo/webcash.jpg";
import WeMB from "../../commons/images/partner logo/WeMB.png";

export default function DefaultPartnerComponent() {
  return (
    <>
      <div className="hidden col-span-1 laptop:col-span-2 laptop:block">
        <div className="grid-rows-2">
          <div className="grid grid-cols-4 ">
            <div>
              <img src={nipa} alt="nipa"></img>
            </div>
            <div>
              <img className="px-2" src={ckcc} alt="ckcc"></img>
            </div>
            <div>
              <img
                className="px-2"
                src={king_sejong_institute}
                alt="king sejong institute"
              ></img>
            </div>
            <div>
              <img className="px-2" src={koica} alt="koica"></img>
            </div>
          </div>

          <div className="grid grid-cols-4 px-2">
            <div>
              <img className="px-2" src={kosign} alt="kosign"></img>
            </div>
            <div>
              <img className="px-2" src={morakot} alt="morakot"></img>
            </div>
            <div>
              <img className="px-2" src={webcash} alt="webcash"></img>
            </div>
            <div>
              <img className="px-2" src={WeMB} alt="WeMB"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
