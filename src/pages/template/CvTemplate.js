import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { colors } from "../../commons/colors/colors";
import JsPDF from "jspdf";
import html2canvas from "html2canvas";
// import ReactPDF from "@react-pdf/renderer";

const generatePDF = async () => {
  const doc = new JsPDF("portrait", "pt", "a4");
  const data = await document.querySelector("#pdf");
  
  doc.html(data).then(() => {
    doc.setFont("maven")
    
    doc.save("cvTemplate.pdf");
  });
};

export default function CvTemplate() {
  const navigate = useNavigate();

  return (
    <div className="h-screen">
      <div class="ml-20">
        <div class="grid grid-cols-8">
          <div class="col-span-6" id="pdf">
            <center>
              <div className="shadow w-350 laptop:w-222">
                <div className="grid laptop:grid laptop:grid-cols-3 bg-slate-50">
                  <div className="h-40 laptop:bg-regal-gg">
                    <div class="absolute ">
                      <svg
                        width="126"
                        height="124"
                        viewBox="0 0 126 124"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="51" cy="49" r="75" fill="#8CC0DE" />
                      </svg>
                      <div className="absolute w-32 h-32 bg-white rounded-full laptop:h-32 laptop:w-32 laptop:left-10 left-7 top-5">
                        <div>
                          <img
                            className="absolute bg-gray-500 rounded-full laptop:h-28 laptop:w-28 h-28 w-28 left-2 top-2"
                            src="https://wallpaperaccess.com/full/6235574.jpg"
                            alt=""
                          />
                          <div className="absolute rounded-full bg-regal-rgb laptop:h-14 laptop:w-14 laptop:left-20"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="laptop:col-span-2 ">
                    <div className="mt-1 ml-5 text-left laptop:mt-12">
                      <span className="text-4xl font-bold font-maven ">
                        Kong{" "}
                      </span>
                      &nbsp;
                      <span className="text-3xl font-bold font-maven text-regal-bg">
                        Sachakyarith
                      </span>
                    </div>
                    <div>
                      <h2 className="ml-5 text-xl text-left font-maven">
                        UI Designer
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="grid laptop:grid laptop:grid-cols-3 bg-slate-50">
                  <div className=" laptop:bg-regal-gg">
                    <div className="mb-4">
                      <div>
                        <h2 class="font-maven text-left ml-5  mt-4 font-bold text-xl">
                          Details
                        </h2>
                      </div>
                      <div className="mt-2 ml-5 text-xs text-left font-maven">
                        <p>
                          <span>SS Sterrt City, </span>
                          <span>phnom penh, </span>
                          <span className="break-words">Cambodia</span>
                        </p>
                        <p>086236671</p>
                        <p className="mb-2 break-words text-regal-blue">
                          kongsachakyarith@gmail.com
                        </p>
                        <p className="font-bold">Nationality</p>
                        <p>khmer</p>
                      </div>
                    </div>
                  </div>
                  <div className="laptop:col-span-2">
                    <div className="mt-4 laptop:mt-5">
                      <h2 class="font-maven text-left ml-5 font-bold text-xl">
                        Profile
                      </h2>
                    </div>
                    <div>
                      <p className="mt-2 ml-5 text-xs text-left font-maven">
                        Our free cover letter examples + expert guides are
                        packed with useful tips and the best practices for
                        getting hired in dozens of industries. Combine these
                        samples with our templates and cover letter builder tool
                        to finish your application in minutes.{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div class="laptop:grid laptop:grid-cols-3   flex flex-wrap-reverse">
                  <div className="w-full min-h-1/22 laptop:bg-regal-gg bg-slate-50">
                    {/*Start CV Profile */}

                    {/* End CV Profile */}

                    {/* start Details */}
                    <div className="mb-4">
                      {/*  Start Education */}
                      <div className="mt-5 tablet:mt-3">
                        <h2 class="font-maven text-left ml-5 font-bold text-xl">
                          Education
                        </h2>
                      </div>
                      <div className="mt-2 ml-5 text-xs text-left font-maven">
                        <div>
                          <div className="w-20 h-4 text-left rounded bg-regal-bg">
                            <center>
                              <span className="font-bold">2019-2020</span>
                            </center>
                          </div>
                          <p className="mt-1">
                            <span>Master, </span>
                            <span>Rupp, </span>
                            <span>phnom penh</span>
                          </p>
                        </div>
                        <div className="mt-5">
                          <div className="w-20 h-4 text-left rounded bg-regal-bg">
                            <center>
                              <span className="font-bold">2019-2020</span>
                            </center>
                          </div>
                          <p className="mt-1">
                            <span>Master, </span>
                            <span>Rupp, </span>
                            <span>phnom penh</span>
                          </p>
                        </div>
                        <div className="mt-5">
                          <div className="w-20 h-4 text-left rounded bg-regal-bg">
                            <center>
                              <span className="font-bold">2019-2020</span>
                            </center>
                          </div>
                          <p className="mt-1">
                            <span>Master, </span>
                            <span>Rupp, </span>
                            <span>phnom penh</span>
                          </p>
                        </div>
                      </div>
                      {/* End  Education */}

                      {/* start Links */}
                      <div className="mt-3">
                        <h2 class="font-maven text-left ml-5 font-bold text-xl">
                          Links
                        </h2>
                      </div>
                      <div className="mt-2 ml-3 text-left">
                        <div>
                          <img
                            className="w-20"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
                            alt=""
                          />
                        </div>
                      </div>
                      {/* End Links */}

                      {/* Start Skills */}
                      <div className="mb-3">
                        <h2 class="font-maven text-left ml-5 font-bold text-xl">
                          Skills
                        </h2>
                      </div>
                      <div className="mt-2 ml-5 text-xs text-left font-maven">
                        <div className="grid grid-cols-3 gap-4">
                          <div class="">
                            <p>jQuery</p>
                          </div>
                          <div class="col-span-2">
                            <div className="flex justify-start gap-2 mt-1 laptop:grid laptop:grid-cols-6">
                              <div className="w-3 h-3 rounded-full bg-regal-bg"></div>
                              <div className="w-3 h-3 rounded-full bg-regal-bg"></div>
                              <div className="w-3 h-3 rounded-full bg-regal-bg"></div>
                              <div className="w-3 h-3 rounded-full bg-regal-bg"></div>
                              <div className="w-3 h-3 rounded-full bg-regal-bg"></div>
                            </div>
                          </div>
                        </div>
                        <div class="grid grid-cols-3 gap-4 mt-3">
                          <div class="...">
                            <p>Docker</p>
                          </div>
                          <div class="col-span-2">
                            <div className="flex justify-start gap-2 mt-1 laptop:grid laptop:grid-cols-6">
                              <div className="w-3 h-3 rounded-full bg-regal-bg"></div>
                              <div className="w-3 h-3 rounded-full bg-regal-bg"></div>
                              <div className="w-3 h-3 rounded-full bg-regal-bg"></div>
                              <div className="w-3 h-3 rounded-full bg-regal-bg"></div>
                              <div className="w-3 h-3 rounded-full bg-regal-greey"></div>
                            </div>
                          </div>
                        </div>
                        <div class="grid grid-cols-3 gap-4 mt-3">
                          <div class="...">
                            <p>Node js</p>
                          </div>
                          <div class="col-span-2">
                            <div className="flex justify-start gap-2 mt-1 laptop:grid laptop:grid-cols-6">
                              <div className="w-3 h-3 rounded-full bg-regal-bg"></div>
                              <div className="w-3 h-3 rounded-full bg-regal-bg"></div>
                              <div className="w-3 h-3 rounded-full bg-regal-bg"></div>
                              <div className="w-3 h-3 rounded-full bg-regal-bg"></div>
                              <div className="w-3 h-3 rounded-full bg-regal-bg"></div>
                            </div>
                          </div>
                        </div>
                        <div class="grid grid-cols-3 gap-4 mt-3">
                          <div class="...">
                            <p>Python</p>
                          </div>
                          <div class="col-span-2">
                            <div className="flex justify-start gap-2 mt-1 laptop:grid laptop:grid-cols-6">
                              <div className="w-3 h-3 rounded-full bg-regal-bg"></div>
                              <div className="w-3 h-3 rounded-full bg-regal-bg"></div>
                              <div className="w-3 h-3 rounded-full bg-regal-bg"></div>
                              <div className="w-3 h-3 rounded-full bg-regal-greey"></div>
                              <div className="w-3 h-3 rounded-full bg-regal-greey"></div>
                            </div>
                          </div>
                        </div>
                        <div class="grid grid-cols-3 gap-4 mt-3">
                          <div class="...">
                            <p>HTML5</p>
                          </div>
                          <div class="col-span-2 justify-items-end">
                            <div className="flex justify-start gap-2 mt-1 laptop:grid laptop:grid-cols-6">
                              <div className="w-3 h-3 rounded-full bg-regal-bg"></div>
                              <div className="w-3 h-3 rounded-full bg-regal-bg"></div>
                              <div className="w-3 h-3 rounded-full bg-regal-bg"></div>
                              <div className="w-3 h-3 rounded-full bg-regal-bg"></div>
                              <div className="w-3 h-3 rounded-full bg-regal-greey"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* End Skills  */}
                  </div>
                  <div className="laptop:col-span-2 bg-slate-50">
                    <div className="laptop:mt-0 mt-">
                      <h2 class="font-maven text-left ml-5 font-bold text-xl">
                        Employment History
                      </h2>
                    </div>
                    <div className="mt-4 ml-5 font-maven">
                      <div className="mb-1 text-left">
                        <span>Web devloper, </span> &nbsp;&nbsp;
                        <span>employer, </span> &nbsp;&nbsp;
                        <span>phnom penh</span>
                      </div>
                      <div className="text-left">
                        <div className="w-48 h-4 text-xs rounded bg-regal-bg">
                          <center>
                            <span className="font-bold">
                              JANUARY 2019 - MARCH 2020
                            </span>
                          </center>
                        </div>
                        <p className="mt-3 text-xs">
                          Combine these samples with our templates and coverccc
                          letter builder tool to finish your application in
                          minutes.
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 ml-5 font-maven">
                      <div className="mb-1 text-left">
                        <span>Web devloper, </span> &nbsp;&nbsp;
                        <span>employer, </span> &nbsp;&nbsp;
                        <span>phnom penh</span>
                      </div>
                      <div className="text-left">
                        <div className="w-48 h-4 text-xs rounded bg-regal-bg">
                          <center>
                            <span className="font-bold">
                              JANUARY 2019 - MARCH 2020
                            </span>
                          </center>
                        </div>
                        <p className="mt-3 text-xs">
                          Combine these samples with our templates and coverccc
                          letter builder tool to finish your application in
                          minutes.
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 ml-5 font-maven">
                      <div className="mb-1 text-left">
                        <span>Web devloper, </span> &nbsp;&nbsp;
                        <span>employer, </span> &nbsp;&nbsp;
                        <span>phnom penh</span>
                      </div>
                      <div className="text-left">
                        <div className="w-48 h-4 text-xs rounded bg-regal-bg">
                          <center>
                            <span className="font-bold">
                              JANUARY 2019 - MARCH 2020
                            </span>
                          </center>
                        </div>
                        <p className="mt-3 text-xs">
                          Combine these samples with our templates and coverccc
                          letter builder tool to finish your application in
                          minutes.
                        </p>
                      </div>
                    </div>
                    <div className="mt-7">
                      <h2 class="font-maven text-left ml-5 font-bold text-xl">
                        Hobbies
                      </h2>
                    </div>
                    <div className="mt-4 text-left ml-9">
                      <div className="flex justify-start gap-2 text-sm">
                        <ui>
                          <li class="fff">investing</li>
                          <li class="fff">Gaming</li>
                        </ui>
                        <ui className="ml-20">
                          <li class="fff">Mountain biking</li>
                          <li class="fff">Writting</li>
                        </ui>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </center>
          </div>

          <div class="col-span-2 mt-10 ml-10">
            {/* <ReactToPdf targetRef={ref} filename="cvTemplate.pdf">
              {({ toPdf }) => ( */}
            <button
              onClick={generatePDF}
              type="button"
              class="mb-10 py-3 text-white text-lg rounded-lg w-full"
              style={styles}
            >
              Export as PDF
            </button>
            {/* )}
            </ReactToPdf> */}

            <button
              onClick={() => navigate("/sidebar/changeCVTemplate")}
              class="py-3 text-white text-lg rounded-lg w-full"
              style={styles}
            >
              Change Template
            </button>
          </div>
        </div>
      </div>

      <div className="mt-5 text-center">
        <button
          className="px-10 py-3 mb-10 ml-auto text-lg text-white rounded-lg"
          style={styles}
          onClick={() => navigate("/")}
        >
          Finish
        </button>
        <button
          className="px-10 py-3 ml-5 text-lg text-blue-600 border border-blue-600 rounded-lg"
          onClick={() => navigate("/sidebar/createNewCV")}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

const styles = {
  backgroundColor: colors.content,
};
