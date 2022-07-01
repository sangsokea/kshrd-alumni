import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import { NavLink } from "react-router-dom";

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
      <div>
        <Tabs className="font-bold">
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
