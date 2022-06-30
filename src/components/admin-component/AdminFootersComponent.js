import React from "react";
import { colors } from "../../commons/colors/colors";

export default function AdminFootersComponent() {
  return (
    <div className="mt-5 laptop:grid-cols-3 fixed bottom-0 w-full body-font font-maven">
      <section className="text-sm body-font font-maven laptop:text-md desktop:text-lg laptop:ml-[330px]   tablet:ml-[330px]">
        
        <div style={logoBackground}>
          <span className="block p-3 text-center text-white text-md">
          2022 © Korea Software HRD Center. All right reserved.
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
