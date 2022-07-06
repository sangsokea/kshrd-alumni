import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { colors } from "../../commons/colors/colors";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import "@progress/kendo-theme-material/dist/all.css";

import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import { api } from "../../api";
import HrdCvTemplate from "./HrdCvTemplate";
import { fetchChangeCVTemplate } from "../../redux/actions/localAction/ChangeCVTemplateAction";
import { decryptToken } from "../../redux/actions/LoginAction";
import { fetchOwnProfiles } from "../../redux/actions/OwnProfilesAction";
// import { fetchExperience } from "../../redux/actions/FetchExperienceAction";

export default function CvTemplate() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [addSection, setAddSection] = useState([]);
  const [education, setEducation] = useState([]);
  const [employmentHistory, setEmploymentHistory] = useState([]);
  const [license, setLicense] = useState([]);
  const [skill, setSkill] = useState([]);
  const [personalDetails, setPersonalDetails] = useState("");

  const ownProfiles = useSelector((state) => state?.ownProfiles);

  console.log("OwnProfiles: ", ownProfiles);

  const pdfExportComponent = useRef(null);
  const image = useRef(null);

  const handleExportWithComponent = (event) => {
    pdfExportComponent.current.save();
    // savePDF(image.current, { imageResolution: 36 });
  };

  const dispatch = useDispatch();
  // const state = useSelector((state) => state.changeCVTemplate, shallowEqual);

  // listen route
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchOwnProfiles());
  }, [location]);

  useEffect(() => {
    setData(ownProfiles?.items);
    {
      data.map((arr) => {
        setAddSection(arr?.profileDetails?.addSection);
        setEducation(arr?.profileDetails?.education);
        setEmploymentHistory(arr?.profileDetails?.employmentHistory);
        setLicense(arr?.profileDetails?.license);
        setSkill(arr.profileDetails.skill);
        setPersonalDetails(arr?.profileDetails?.personalDetails);
      });
    }
  }, [ownProfiles]);

  console.log("OwnProfiles Data :", ownProfiles);
  // console.log(
  //   "EmploymentHistory",
  //   ownProfiles?.items[0]?.profileDetails?.employmentHistory
  // );

  // useEffect(() => {
  //   setChangeTemplate(state);
  // }, [state]);

  // const [changeTemplate, setChangeTemplate] = useState(state);

  // const [data, setData] = useState([]);

  // const token =
  //   "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJibGFjay5tb25zdGVyLm1ha2VyQGdtYWlsLmNvbSIsImlhdCI6MTY1NjkzMjU5NSwiZXhwIjoxNjU5NTYyMzk1fQ.p7_P8Y4BXroRmZL4s1ejgpVJrJnPB4nNqsOzSuRbPwSm9UCC8bhYUBL-5WB7Z92TzPhYS2JhJBw_LJXBfQojDA";
  const token = decryptToken();
  useEffect(() => {
    api
      .get(
        "/profiles/ownProfiles",
        // {},
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => console.log(res.data.payload))
      .catch((response) => console.log(response.data));
  }, []);

  return (
    <>
      {/* {data.map((parentItems, i) => ( */}
      <div className="h-full mb-10">
        <div class="ml-5 laptop:ml-20">
          <div class="grid grid-cols-8">
            <div class="col-span-6">
              {/* {changeTemplate ? (
              <HrdCvTemplate />
            ) : ( */}
              <PDFExport ref={pdfExportComponent} paperSize="A4">
                <center>
                  <div className="shadow w-350 laptop:w-222 mt-10">
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
                                ref={image}
                                className="absolute bg-gray-500 rounded-full laptop:h-28 laptop:w-28 h-28 w-28 left-2 top-2"
                                src="https://wallpaperaccess.com/full/6235574.jpg"
                                alt=""
                              />
                              <div className="absolute rounded-full bg-regal-rgb laptop:h-14 laptop:w-14 laptop:left-20"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="laptop:col-span-2 bg-white">
                          <div className="mt-1 ml-5 text-left laptop:mt-12">
                            <span className="text-4xl font-bold font-maven ">
                              {personalDetails?.lastName}
                            </span>
                            &nbsp;
                            <span className="text-3xl font-bold font-maven text-regal-bg">
                              {personalDetails?.firstName}
                            </span>
                          </div>

                          <div>
                            {/* {skill?.map((sk) => { */}
                            <h2 className="ml-5 text-xl text-left font-maven">
                              {personalDetails?.summary}
                            </h2>
                            {/* })} */}
                          </div>
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
                              <span>{personalDetails?.address}, </span>
                              {/* <span>phnom penh, </span>
                              <span className="break-words">Cambodia</span> */}
                            </p>
                            <p>{personalDetails?.phoneNumber}</p>
                            <p className="mb-2 break-words text-regal-blue">
                              {personalDetails?.email}
                            </p>
                            <p className="font-bold">Nationality</p>
                            <p>khmer</p>
                          </div>
                        </div>
                      </div>
                      <div className="laptop:col-span-2 bg-white">
                        <div className="mt-4 laptop:mt-5 ">
                          <h2 class="font-maven text-left ml-5  font-bold text-xl">
                            Profile
                          </h2>
                        </div>
                        <div>
                          <p className="mt-2 ml-5 text-xs text-left font-maven">
                            Our free cover letter examples + expert guides are
                            packed with useful tips and the best practices for
                            getting hired in dozens of industries. Combine these
                            samples with our templates and cover letter builder
                            tool to finish your application in minutes.{" "}
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

                          {/* {education?.map((edu) => { */}
                          <div className="mt-2 ml-5 text-xs text-left font-maven">
                            <div>
                              <div className="w-20 h-4 text-left rounded bg-[#8CC0DE]">
                                <center>
                                  <span className="font-bold">
                                    {/* ({edu?.startDate}) - ({edu?.endDate}) */}
                                  </span>
                                </center>
                              </div>
                              <p className="mt-1">
                                {/* <span>{edu?.degree}, </span> */}
                                <span>Rupp, </span>
                                <span>phnom penh</span>
                              </p>
                            </div>
                            <div className="mt-5">
                              <div className="w-20 h-4 text-left rounded bg-[#8CC0DE]">
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
                              <div className="w-20 h-4 text-left rounded bg-[#8CC0DE]">
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

                          {/* })} */}

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

                          {skill?.map((sk) => {
                            <div className="mt-2 ml-5 text-xs text-left font-maven">
                              <div className="grid grid-cols-3 gap-4">
                                <div class="">
                                  <p>{sk?.skill}</p>
                                </div>
                                <div class="col-span-2">
                                  <div className="flex justify-start gap-2 mt-1 laptop:grid laptop:grid-cols-6">
                                    <div className="w-3 h-3 rounded-full bg-[#8CC0DE]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#8CC0DE]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#8CC0DE]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#8CC0DE]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#8CC0DE]"></div>
                                  </div>
                                </div>
                              </div>
                              <div class="grid grid-cols-3 gap-4 mt-3">
                                <div class="...">
                                  <p>Docker</p>
                                </div>
                                <div class="col-span-2">
                                  <div className="flex justify-start gap-2 mt-1 laptop:grid laptop:grid-cols-6">
                                    <div className="w-3 h-3 rounded-full bg-[#8CC0DE]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#8CC0DE]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#8CC0DE]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#8CC0DE]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#D9D9D9]"></div>
                                  </div>
                                </div>
                              </div>
                              <div class="grid grid-cols-3 gap-4 mt-3">
                                <div class="...">
                                  <p>Node js</p>
                                </div>
                                <div class="col-span-2">
                                  <div className="flex justify-start gap-2 mt-1 laptop:grid laptop:grid-cols-6">
                                    <div className="w-3 h-3 rounded-full bg-[#8CC0DE]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#8CC0DE]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#8CC0DE]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#8CC0DE]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#8CC0DE]"></div>
                                  </div>
                                </div>
                              </div>
                              <div class="grid grid-cols-3 gap-4 mt-3">
                                <div class="...">
                                  <p>Python</p>
                                </div>
                                <div class="col-span-2">
                                  <div className="flex justify-start gap-2 mt-1 laptop:grid laptop:grid-cols-6">
                                    <div className="w-3 h-3 rounded-full bg-[#8CC0DE]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#8CC0DE]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#8CC0DE]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#D9D9D9]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#8CC0DE]"></div>
                                  </div>
                                </div>
                              </div>
                              <div class="grid grid-cols-3 gap-4 mt-3">
                                <div class="...">
                                  <p>HTML5</p>
                                </div>
                                <div class="col-span-2 justify-items-end">
                                  <div className="flex justify-start gap-2 mt-1 laptop:grid laptop:grid-cols-6">
                                    <div className="w-3 h-3 rounded-full bg-[#8CC0DE]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#8CC0DE]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#8CC0DE]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#8CC0DE]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#D9D9D9]"></div>
                                  </div>
                                </div>
                              </div>
                            </div>;
                          })}
                        </div>

                        {/* End Skills  */}
                      </div>
                      <div className="laptop:col-span-2 bg-white">
                        <div className="laptop:mt-0 mt-">
                          <h2 class="font-maven text-left ml-5 font-bold text-xl">
                            Employment History
                          </h2>
                        </div>

                        {employmentHistory?.map((item) => (
                          <div className="mt-4 ml-5 font-maven">
                            <div className="mb-1 text-left">
                              <span>{item?.jobTitle},</span> &nbsp;&nbsp;
                              <span>{item?.employee},</span> &nbsp;&nbsp;
                              <span>{item?.city}</span>
                            </div>
                            <div className="text-left">
                              <div className="w-48 h-4 text-xs rounded bg-[#8CC0DE]">
                                <center>
                                  <span className="font-bold">
                                    ({item?.startDate}) - ({item?.endDate})
                                  </span>
                                </center>
                              </div>
                              <p className="mt-3 text-xs">
                                {item?.description}
                              </p>
                            </div>
                          </div>
                        ))}

                        {/* <div className="mt-4 ml-5 font-maven">
                        <div className="mb-1 text-left">
                          <span>Web devloper, </span> &nbsp;&nbsp;
                          <span>employer, </span> &nbsp;&nbsp;
                          <span>phnom penh</span>
                        </div>
                        <div className="text-left">
                          <div className="w-48 h-4 text-xs rounded bg-[#8CC0DE]">
                            <center>
                              <span className="font-bold">
                                JANUARY 2019 - MARCH 2020
                              </span>
                            </center>
                          </div>
                          <p className="mt-3 text-xs">
                            Combine these samples with our templates and
                            coverccc letter builder tool to finish your
                            application in minutes.
                          </p>
                        </div>
                      </div> */}
                        {/* <div className="mt-4 ml-5 font-maven">
                        <div className="mb-1 text-left">
                          <span>Web devloper, </span> &nbsp;&nbsp;
                          <span>employer, </span> &nbsp;&nbsp;
                          <span>phnom penh</span>
                        </div>
                        <div className="text-left">
                          <div className="w-48 h-4 text-xs rounded bg-[#8CC0DE]">
                            <center>
                              <span className="font-bold">
                                JANUARY 2019 - MARCH 2020
                              </span>
                            </center>
                          </div>
                          <p className="mt-3 text-xs">
                            Combine these samples with our templates and
                            coverccc letter builder tool to finish your
                            application in minutes.
                          </p>
                        </div>
                      </div> */}
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
              </PDFExport>
              {/* )} */}
            </div>

            <div class="col-span-2 mt-10 ml-10 hidden laptop:block">
              {/* <button
              class="mb-5 py-2 text-white text-lg rounded-lg w-full"
              style={styles}
              onClick={handleExportWithComponent}
            >
              Export as PDF
            </button> */}

              <button
                class="mb-5 py-2 text-white text-lg rounded-lg w-full hidden laptop:block"
                style={styles}
                onClick={() => dispatch(fetchChangeCVTemplate(true))}
              >
                Change Template
              </button>

              <button
                class="py-2 text-white text-lg rounded-lg w-full hidden laptop:block"
                style={styles}
                onClick={() => dispatch(fetchChangeCVTemplate(false))}
              >
                Rollback Template
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-row ">
          <div className="laptop:ml-auto">
            <button
              className="ml-12 px-12 py-2 text-sm laptop:text-md desktop:text-lg text-white bg-transparent border rounded-md hover:border-transparent"
              style={styles}
              onClick={() => navigate("/sidebar/resume")}
            >
              Finish
            </button>

            <button
              className="mb-10 px-10 py-2 mt-10 ml-3 text-sm laptop:text-md desktop:text-lg text-blue-600 bg-transparent border rounded-md hover:border-transparent"
              onClick={() => navigate("/sidebar/createNewCV")}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
      {/* ))} */}
    </>
    // </div>
  );
}

const styles = {
  backgroundColor: colors.content,
};
