import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import { NavLink } from "react-router-dom";
import DefaultPartnerComponent from "./DefaultPartnerComponent";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PublicSectorComponent from "./PublicSectorComponent";
import UniversitiesComponent from "./UniversitiesComponent";
import GlobalCompaniesComponent from "./GlobalCompaniesComponent";
import LocalCompaniesComponent from "./LocalCompaniesComponent";
import BankAndFinanceComponent from "./BankAndFinanceComponent";

export default function PartnerSideComponent() {
  const [isEmpty, setIsEmpty] = useState(false);

  return (
    <>
      {/* <div className="grid grid-row-1">
        <div className="grid grid-cols-2 laptop:grid-cols-3">
          <div className="col-span-1"> */}
      {/* <ul className="text-gray-900 bg-white rounded-lg w-30 ">
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
            </ul> */}

      <div className="items-center">
        <Tabs>
          <TabList>
            <Tab>Public Sector</Tab>
            <Tab>Universities</Tab>
            <Tab>Global Companies</Tab>
            <Tab>Local Companies</Tab>
            <Tab>Bank & Finance</Tab>
          </TabList>

          <TabPanel>
            <PublicSectorComponent />
          </TabPanel>
          <TabPanel className="mt-5">
            <UniversitiesComponent />
          </TabPanel>
          <TabPanel>
            <GlobalCompaniesComponent />
          </TabPanel>
          <TabPanel>
            <LocalCompaniesComponent />
          </TabPanel>
          <TabPanel>
            <BankAndFinanceComponent />
          </TabPanel>
        </Tabs>
      </div>

      {/* </div>

          <div class="col-span-2">
            <Outlet /> */}
      {/* {isEmpty ? <DefaultPartnerComponent /> : <Outlet /> }             */}
      {/* </div>
        </div>
      </div> */}
    </>
  );
}
