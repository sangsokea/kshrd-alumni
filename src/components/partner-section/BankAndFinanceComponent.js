import React from "react";

import canadia from "../../commons/images/Bank and Finance/canadia.jpg";
import capital_asia from "../../commons/images/Bank and Finance/capital_asia.jpg";
import dgb from "../../commons/images/Bank and Finance/dgb.jpg";
import glf from "../../commons/images/Bank and Finance/glf.jpg";
import kb from "../../commons/images/Bank and Finance/kb.jpg";
import ppc from "../../commons/images/Bank and Finance/ppc.jpg";
import true_money from "../../commons/images/Bank and Finance/true_money.jpg";
import wb from "../../commons/images/Bank and Finance/wb.jpg";

export default function BankAndFinanceComponent() {
  return (
    <>
      <div className="col-span-1 laptop:col-span-2 laptop:block">
        <div className="grid-rows-2">
          <div className="grid laptop:grid-cols-4 grid-cols-2">
            <div>
              <img src={canadia} alt="canadia"></img>
            </div>
            <div>
              <img className="px-2" src={capital_asia} alt="capital_asia"></img>
            </div>
            <div>
              <img className="px-2" src={dgb} alt="dgb"></img>
            </div>
            <div>
              <img className="px-2" src={glf} alt="glf"></img>
            </div>
          </div>

          <div className="grid laptop:grid-cols-4 grid-cols-2 px-2">
            <div>
              <img className="px-2" src={kb} alt="kb"></img>
            </div>
            <div>
              <img
                className="px-2"
                src={ppc}
                alt="ppc"
              ></img>
            </div>
            <div>
              <img
                className="px-2"
                src={true_money}
                alt="true_money"
              ></img>
            </div>
            <div>
              <img
                className="px-2"
                src={wb}
                alt="wb"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
