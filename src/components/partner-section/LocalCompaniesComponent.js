import React from "react";

import cloudNet from "../../commons/images/Local Companies/cloudNet.jpg";
import ig from "../../commons/images/Local Companies/ig.jpg";
import kosign from "../../commons/images/Local Companies/kosign.jpg";
import morakot from "../../commons/images/Local Companies/morakot.jpg";
import piped from "../../commons/images/Local Companies/piped.jpg";
import slash from "../../commons/images/Local Companies/slash.jpg";
import smart from "../../commons/images/Local Companies/smart.jpg";

export default function LocalCompaniesComponent() {
  return (
    <>
      <div className="hidden col-span-1 laptop:col-span-2 laptop:block">
        <div className="grid-rows-2">
          <div className="grid grid-cols-4 ">
            <div>
              <img src={cloudNet} alt="cloudNet"></img>
            </div>
            <div>
              <img className="px-2" src={ig} alt="ig"></img>
            </div>
            <div>
              <img className="px-2" src={kosign} alt="kosign"></img>
            </div>
            <div>
              <img className="px-2" src={morakot} alt="morakot"></img>
            </div>
          </div>

          <div className="grid grid-cols-4 px-2">
            <div>
              <img className="px-2" src={piped} alt="piped"></img>
            </div>
            <div>
              <img className="px-2" src={slash} alt="slash"></img>
            </div>
            <div>
              <img
                className="px-2"
                src={smart}
                alt="smart"
              ></img>
            </div>
            {/* <div>
              <img
                className="px-2"
                src={ministry_of_justic}
                alt="ministry of justic cambodia"
              ></img>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
