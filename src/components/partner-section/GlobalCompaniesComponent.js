import React from "react";

import ahnlab from "../../commons/images/Global Companies/ahnlab.jpg";
import coocon from "../../commons/images/Global Companies/coocon.jpg";
import k4m from "../../commons/images/Global Companies/k4m.jpg";
import support from "../../commons/images/Global Companies/support.jpg";
import webcash from "../../commons/images/Global Companies/webcash.jpg";
import weMB from "../../commons/images/Global Companies/WeMB.jpg";

export default function GlobalCompaniesComponent() {
  return (
    <>
      <div className="col-span-1 laptop:col-span-2 laptop:block">
        <div className="grid-rows-2">
          <div className="grid laptop:grid-cols-4 grid-cols-2">
            <div>
              <img src={ahnlab} alt="ahnlab"></img>
            </div>
            <div>
              <img className="px-2" src={coocon} alt="coocon"></img>
            </div>
            <div>
              <img className="px-2" src={k4m} alt="k4m"></img>
            </div>
            <div>
              <img className="px-2" src={support} alt="support"></img>
            </div>
          </div>

          <div className="grid laptop:grid-cols-4 grid-cols-2 px-2">
            <div>
              <img className="px-2" src={webcash} alt="webcash"></img>
            </div>
            <div>
              <img
                className="px-2"
                src={weMB}
                alt="weMB"
              ></img>
            </div>
            {/* <div>
              <img
                className="px-2"
                src={ministry_of_land}
                alt="ministry of land"
              ></img>
            </div>
            <div>
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
