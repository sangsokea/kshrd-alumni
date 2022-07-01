import React from "react";
// import CvTemplate from "./template/CvTemplate";
import HrdCvTemplate from "./template/HrdCvTemplate";
import { colors } from "../commons/colors/colors";

export default function ChangeTemplatePage() {
  return (
    <>
      <div className="body-font font-maven container mx-auto">
        <h1 className="text-center text-2xl mb-5 font-bold" style={styles}>
          Select Templates
        </h1>

        <div className="">
          {/* <div className="col-span-1">
                    <CvTemplate/>
                </div> */}
          <div className="w-auto h-full">
            <HrdCvTemplate />
          </div>
        </div>
        {/* <button className="text-white py-4 px-2 rounded-md" style={backgroundBtnStyle}>
          Use this template
        </button> */}


      </div>
    </>
  );
}

const styles = {
  color: colors.content,
  // logoSize: myStyles.logoSize
};

const backgroundBtnStyle = {
    backgroundColor: colors.content
}


