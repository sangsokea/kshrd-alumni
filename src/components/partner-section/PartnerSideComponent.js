import React from "react";
import { Outlet } from "react-router-dom";

import { NavLink } from "react-router-dom";

export default function PartnerSideComponent() {
  return (
    <>
      <div className="grid grid-row-1">
        <div className="grid grid-cols-2 laptop:grid-cols-3">
          <div className="col-span-1">
            <ul className="text-gray-900 bg-white rounded-lg w-30 ">
              <NavLink
                to="/publicSector"
                className="grid w-full grid-rows-1 py-2 border-b border-gray-200 rounded-t-lg"
              >
                Public Sector
              </NavLink>
              <NavLink
                to="/universities"
                className="grid w-full grid-rows-1 py-2 border-b border-gray-200"
              >
                Universities
              </NavLink>
              <NavLink
                to="/globalCompanies"
                className="grid w-full grid-rows-1 py-2 border-b border-gray-200"
              >
                Global Companies
              </NavLink>
              <NavLink
                to="/localCompanies"
                className="grid w-full grid-rows-1 py-2 border-b border-gray-200"
              >
                Local Companies
              </NavLink>
              <NavLink
                to="/bank"
                className="grid w-full grid-rows-1 py-2 rounded-b-lg"
              >
                Bank & Finance
              </NavLink>
            </ul>
          </div>
                
          <div class="col-span-2">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
