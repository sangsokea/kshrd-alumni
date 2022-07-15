import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import img1 from "../../images/logo.jpg";
import img2 from "../../images/Rectangle.png";
import alumni1 from "../../commons/images/Alumni/alumni1.jpg";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchChangeCVTemplate } from "../../redux/actions/localAction/ChangeCVTemplateAction";
import { colors } from "../../commons/colors/colors";
import { decryptToken } from "../../redux/actions/LoginAction";
import { api } from "../../api";
import { fetchOwnProfiles } from "../../redux/actions/OwnProfilesAction";
import { Pagination } from "@mui/material";

export default function HrdCvTemplate({ object }) {
  const pdfExportComponent = useRef(null);
  const image = useRef(null);

  const handleExportHrdTemplate = (event) => {
    if (pdfExportComponent.current) {
      // savePDF(image.current);
      pdfExportComponent.current.save();
    }
  };

  console.log("In HrdTemplate ", object);

  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const [addSection, setAddSection] = useState([]);
  const [education, setEducation] = useState([]);
  const [employmentHistory, setEmploymentHistory] = useState([]);
  const [license, setLicense] = useState([]);
  const [skill, setSkill] = useState([]);
  const [personalDetails, setPersonalDetails] = useState("");
  const [languages, setLanguage] = useState([]);
  const [currentData, setCurrentData] = useState(object);
  const [currenIndex, setCurrenIndex] = useState(0);

  const ownProfiles = useSelector((state) => state?.ownProfiles);

  console.log("OwnProfiles: ", ownProfiles);

  // const state1 = useSelector((state1) => state1.changeCVTemplate, shallowEqual);
  React.useEffect(() => {
    setCurrentData(object);
  }, [object]);

  console.log("OwnProfiles Data :", ownProfiles);
  console.log("Language", currentData?.profileDetails?.languages);
  // console.log(
  //   "EmploymentHistory",
  //   ownProfiles?.items[0]?.profileDetails?.employmentHistory
  // );

  // useEffect(() => {
  //   setChangeTemplate(state1);
  // }, [state1]);

  // const [changeTemplate, setChangeTemplate] = useState(state1);

  // const [data, setData] = useState([]);

  // const token =
  //   "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJibGFjay5tb25zdGVyLm1ha2VyQGdtYWlsLmNvbSIsImlhdCI6MTY1NjkzMjU5NSwiZXhwIjoxNjU5NTYyMzk1fQ.p7_P8Y4BXroRmZL4s1ejgpVJrJnPB4nNqsOzSuRbPwSm9UCC8bhYUBL-5WB7Z92TzPhYS2JhJBw_LJXBfQojDA";

  return (
    <div className="h-full mb-10">
      <div>
        <div className="col-span-6">
          <p
            onClick={handleExportHrdTemplate}
            className="cursor-pointer hover:underline hover:underline-offset-2 hover:text-blue-800 font-bold"
          >
            Export as PDF
          </p>

          <PDFExport
            ref={pdfExportComponent}
            paperSize="A4"
            // scale={0.85}
            fileName="HrdTemplate.pdf"
            margin="1cm"
          >
            {currentData && (
              <section class="laptop:min-w-[595px] w-full min-h-[842px] pb-10 lg:pb-20 border ml-5 laptop:ml-0">
                <div class=" gap-6  grid grid-cols-1 laptop:p-10 p-2 laptop:grid-cols-6 tablet:grid tablet:grid-cols-1">
                  <div className="flex flex-col">
                    <div>
                      <img
                        src={img1}
                        className="laptop:mt-5 ml-8 laptop:ml-0 tablet:ml-16"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-span-4">
                    <p className="text-sm laptop:text-md laptop:mt-10 text-center font-maven font-bold">
                      Korea Software HRD Center Student's Background <br></br>
                      #12, St 323, Boeungkak II Commune, Toul Kork District,
                      Phnom Penh. <br></br>
                      Tel:(855) 23 99 13 14/012 998 919 <br></br>
                      www.kshrd.com.kh/FB. www.facebook.com/ksignhrd
                    </p>
                  </div>
                  <div>
                    <img
                      src={
                        currentData?.profileDetails?.personalDetails?.profile
                      }
                      className=" object-cover laptop:mt-4  ml-12 laptop:ml-0  tablet:ml-10"
                      alt="user profile"
                    />
                  </div>
                </div>
                <div className="h-1 bg-blue-900 w-full"></div>
                <div className="flex items-center justify-center font-bold mt-3 text-sm laptop:text-md">
                  CURRICULUM VITAE
                </div>
                <div className="font-bold  laptop:text-md text-sm laptop:ml-10 ml-4 mt-3">
                  <div className="uppercase">
                    <span>
                      {currentData?.profileDetails?.personalDetails?.lastName}{" "}
                    </span>
                    <span>
                      {currentData?.profileDetails?.personalDetails?.firstName}
                    </span>
                  </div>
                </div>
                <div class="laptop:text-md text-sm">
                  <dl>
                    <div class="bg-white ml-4 laptop:mt-4 mt-3 tablet:grid tablet:grid-cols-3 tablet:gap-4 tablet:px-6">
                      <dt class="  font-medium text-gray-500 laptop:flex justify-between">
                        Address <span>:</span>
                      </dt>
                      <dd class="mt-1  text-gray-900 tablet:mt-0 tablet:col-span-2">
                        {currentData?.profileDetails?.personalDetails?.address}
                      </dd>
                    </div>
                    <div class="text-sm laptop:text-md bg-white ml-4 mt-2 tablet:grid tablet:grid-cols-3 tablet:gap-4 tablet:px-6">
                      <dt class=" font-medium text-gray-500 laptop:flex justify-between">
                        Phone <span>:</span>
                      </dt>
                      <dd class="mt-1  text-gray-900 tablet:mt-0 tablet:col-span-2">
                        <span>0</span>
                        {
                          currentData?.profileDetails?.personalDetails
                            ?.phoneNumber
                        }
                      </dd>
                    </div>
                    <div class="text-sm laptop:text-md bg-white ml-4 mt-2 tablet:grid tablet:grid-cols-3 tablet:gap-4 tablet:px-6">
                      <dt class=" font-medium text-gray-500 laptop:flex justify-between">
                        Email <span className="laptop:ml-[113px]">:</span>
                      </dt>
                      <dd class="mt-1  tablet:mt-0 tablet:col-span-2 text-blue-600">
                        {currentData?.profileDetails?.personalDetails?.email}
                      </dd>
                    </div>
                  </dl>
                </div>
                <div className="laptop:mt-4  font-bold laptop:ml-10 ml-4 mt-3 text-sm laptop:text-md">
                  <span>1. </span>
                  <span>PROFILE</span>
                </div>
                <div class="laptop:text-md text-sm">
                  <dl>
                    <div class="text-sm laptop:text-md bg-white ml-4 laptop:mt-5 mt-3 tablet:grid tablet:grid-cols-3 tablet:gap-4 tablet:px-6">
                      <dt class="font-medium text-gray-500 laptop:flex justify-between">
                        Gender <span className="laptop:ml-[100px]">:</span>
                      </dt>
                      <dd class="mt-1  text-gray-900 tablet:mt-0 tablet:col-span-2">
                        {currentData?.profileDetails?.personalDetails?.gender}
                      </dd>
                    </div>
                    <div class="text-sm laptop:text-md bg-white ml-4 mt-2 tablet:grid tablet:grid-cols-3 tablet:gap-4 tablet:px-6">
                      <dt class=" font-medium text-gray-500 laptop:flex justify-between">
                        Date of Birth <span className="">:</span>
                      </dt>
                      <dd class="mt-1  text-gray-900 tablet:mt-0 tablet:col-span-2">
                        {currentData?.profileDetails?.personalDetails?.dob}
                      </dd>
                    </div>
                    <div class="text-sm laptop:text-md bg-white ml-4 mt-2 tablet:grid tablet:grid-cols-3 tablet:gap-4 tablet:px-6">
                      <dt class=" font-medium text-gray-500 laptop:flex justify-between">
                        Place of Birth <span>:</span>
                      </dt>
                      <dd class="mt-1 text-gray-900 tablet:mt-0 tablet:col-span-2">
                        {currentData?.profileDetails?.personalDetails?.pob}
                      </dd>
                    </div>
                    <div class="text-sm laptop:text-md bg-white ml-4 mt-2 tablet:grid tablet:grid-cols-3 tablet:gap-4 tablet:px-6">
                      <dt class=" font-medium text-gray-500 laptop:flex justify-between">
                        Nationality <span>:</span>
                      </dt>
                      <dd class="mt-1  text-gray-900 tablet:mt-0 tablet:col-span-2">
                        {
                          currentData?.profileDetails?.personalDetails
                            ?.nationality
                        }
                      </dd>
                    </div>
                  </dl>
                </div>
                <div className="laptop:mt-4  font-bold laptop:ml-10 ml-4 mt-3 text-sm laptop:text-md">
                  <span>2. </span>
                  <span>Education</span>
                </div>
                {currentData?.profileDetails?.education.map((edu) => {
                  return (
                    <div class="laptop:text-md  text-sm">
                      <dl>
                        <div class="bg-white ml-4 laptop:mt-4 mt-3 tablet:grid tablet:grid-cols-3 tablet:gap-4 tablet:px-6">
                          <dt class="  font-medium text-gray-500 laptop:flex justify-between">
                            {edu?.startDate} -{" "}
                            {edu?.endDate ? edu?.endDate : "present"}{" "}
                            <span>:</span>
                          </dt>
                          <dd class="mt-1  text-gray-900 tablet:mt-0 tablet:col-span-2">
                            {edu?.description ? (
                              edu?.description
                            ) : (
                              <span className="text-red-600 text-sm laptop:text-md">No data</span>
                            )}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  );
                })}
                <div className="laptop:mt-4  font-bold laptop:ml-10 ml-4 mt-3 text-sm laptop:text-md">
                  <span>3. </span>
                  <span>Employment History</span>
                </div>
                {currentData?.profileDetails?.employmentHistory?.map((item) => {
                  return (
                    <div class="laptop:text-[12px] text-sm">
                      <dl>
                        <div class="bg-white ml-4 laptop:mt-4 mt-3 tablet:grid tablet:grid-cols-3 tablet:gap-4 tablet:px-6">
                          <dt class="  font-medium text-gray-500 laptop:flex justify-between">
                            {item?.startDate} -{" "}
                            {item?.endDate ? item?.endDate : "present"}{" "}
                            <span>:</span>
                          </dt>
                          <dd class="mt-1  text-gray-900 tablet:mt-0 tablet:col-span-2">
                            {item?.description ? (
                              item?.description
                            ) : (
                              <span className="text-red-600 text-sm laptop:text-md">No data</span>
                            )}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  );
                })}
                <div className="laptop:mt-4  font-bold laptop:ml-10 ml-4 mt-3 text-sm laptop:text-md">
                  <span>4. </span>
                  <span>LANGUAGES</span>
                </div>
                {currentData?.profileDetails?.languages?.map((langua) => {
                  console.log("Language", langua);
                  return (
                    <div class="laptop:text-md text-sm">
                      <dl>
                        <div class="bg-white ml-4 laptop:mt-4 mt-3 tablet:grid tablet:grid-cols-3 tablet:gap-4 tablet:px-6">
                          <dt class=" font-medium text-gray-500 laptop:flex justify-between">
                            {langua?.lang} <span>:</span>
                          </dt>
                          <dd class="mt-1  text-gray-900 tablet:mt-0 tablet:col-span-2">
                            {langua?.languageLevel}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  );
                })}
                <div className="laptop:mt-4  font-bold laptop:ml-10 ml-4 mt-3 text-sm laptop:text-md">
                  <span>5. </span>
                  <span>REFERENCES</span>
                </div>
                <div className="laptop:mt-4  font-bold laptop:ml-10 ml-4 mt-3 text-sm laptop:text-md">
                  <span className="capitalize">Mr. </span>
                  <span>Chen </span>
                  <span>Phirum</span>
                </div>
                <div className="laptop:text-md text-sm">
                  <dl>
                    <div class="text-sm laptop:text-md bg-white ml-4 laptop:mt-4 mt-3 tablet:grid tablet:grid-cols-3 tablet:gap-4 tablet:px-6">
                      <dt class=" font-medium text-gray-500 laptop:flex justify-between">
                        Job
                        <span>:</span>
                      </dt>
                      <dd class="mt-1  text-gray-900 tablet:mt-0 tablet:col-span-2 text-sm laptop:text-md">
                        Deputy Director of Korea Software HRD Center{" "}
                      </dd>
                    </div>
                  </dl>
                </div>
                <div className="laptop:text-md text-sm">
                  <dl>
                    <div class="bg-white  ml-4 mt-2 tablet:grid tablet:grid-cols-3 tablet:gap-4 tablet:px-6">
                      <dt class="  font-medium text-gray-500 laptop:flex justify-between">
                        Phone
                        <span>:</span>
                      </dt>
                      <dd class="mt-1  text-gray-900 tablet:mt-0 tablet:col-span-2">
                        012 99 89 19
                      </dd>
                    </div>
                  </dl>
                </div>
                <div class="laptop:text-md text-sm">
                  <dl>
                    <div class="bg-white ml-4 mt-2 tablet:grid tablet:grid-cols-3 tablet:gap-4 tablet:px-6">
                      <dt class=" font-medium text-gray-500 laptop:laptop:flex justify-between">
                        Email
                        <span>:</span>
                      </dt>
                      <dd class="mt-1  text-gray-900 tablet:mt-0 tablet:col-span-2">
                        phirum.gm@gmail.com
                      </dd>
                    </div>
                  </dl>
                </div>
              </section>
            )}
          </PDFExport>
        </div>

        <div class="col-span-2 mt-10 ml-10 hidden laptop:block">
          {/* <button
            class="mb-5 py-2 text-white text-lg rounded-lg w-full"
            style={styles}
            onClick={handleExportWithComponent}
          >
            Download as PDF
          </button> */}

          {/* <button
              class="py-2 text-white text-lg rounded-lg w-full hidden laptop:block"
              style={styles}
              onClick={() => dispatch(fetchChangeCVTemplate(false))}
            >
              Rollback Template
            </button> */}
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

const styles = {
  backgroundColor: colors.content,
};
