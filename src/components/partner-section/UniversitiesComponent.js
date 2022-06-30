import React from "react";

import aeu from "../../commons/images/Universities/aeu.jpg";
import ckcc from "../../commons/images/Universities/ckcc.jpg";
import itc from "../../commons/images/Universities/itc.jpg";
import norton from "../../commons/images/Universities/norton.jpg";
import npic from "../../commons/images/Universities/npic.jpg";
import num from "../../commons/images/Universities/num.jpg";
import rupp from "../../commons/images/Universities/rupp.jpg";
import setec from "../../commons/images/Universities/setec.jpg";

export default function UniversitiesComponent() {
  return (
    <>
      <div className="hidden col-span-1 laptop:col-span-2 laptop:block">
        <div className="grid-rows-2">
          <div className="grid grid-cols-4 ">
            <div>
              <img src={aeu} alt="aeu"></img>
            </div>
            <div>
              <img className="px-2" src={rupp} alt="rupp"></img>
            </div>
           
            <div>
              <img className="px-2" src={itc} alt="itc"></img>
            </div>
            <div>
              <img className="px-2" src={norton} alt="norton"></img>
            </div>
          </div>

          <div className="grid grid-cols-4 px-2">
            <div>
              <img className="px-2" src={npic} alt="npic"></img>
            </div>
            <div>
              <img
                className="px-2"
                src={num}
                alt="num"
              ></img>
            </div>
             <div>
              <img className="px-2" src={ckcc} alt="ckcc"></img>
            </div>
            <div>
              <img className="px-2" src={setec} alt="setec"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
