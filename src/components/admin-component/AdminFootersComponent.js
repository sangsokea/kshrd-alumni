import React from "react";
import { colors } from "../../commons/colors/colors";

export default function AdminFootersComponent() {
  return (
    <div className="mt-5 laptop:grid-cols-3">
      <section className="text-sm body-font font-maven laptop:text-md desktop:text-lg laptop:ml-64   tablet:ml-64">
        <div
          className="bg-white px-2 tablet:px-4 py-2.5 text-white "
          style={styles}
        ></div>
        <div style={logoBackground}>
          <span className="block p-3 text-center text-white text-md">
            2022 © Korean Software HRD Center. All right reserved.
          </span>
        </div>
      </section>
    </div>
  );
}

const styles = {
  backgroundColor: colors.content,
};

const logoBackground = {
  backgroundColor: colors.footer,
};
