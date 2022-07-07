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

export default function HrdCvTemplate() {
  const pdfExportComponent = useRef(null);
  const image = useRef(null);

  const handleExportWithComponent = (event) => {
    pdfExportComponent.current.save();
    // savePDF(image.current, { imageResolution: 36 });
  };

  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const [addSection, setAddSection] = useState([]);
  const [education, setEducation] = useState([]);
  const [employmentHistory, setEmploymentHistory] = useState([]);
  const [license, setLicense] = useState([]);
  const [skill, setSkill] = useState([]);
  const [personalDetails, setPersonalDetails] = useState("");

  const ownProfiles = useSelector((state) => state?.ownProfiles);

  console.log("OwnProfiles: ", ownProfiles);

  // const state1 = useSelector((state1) => state1.changeCVTemplate, shallowEqual);

  // listen route
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchOwnProfiles());
  }, [location]);

  useEffect(() => {
    setData(ownProfiles?.items);
    {
      data &&
        data?.map((arr) => {
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
  //   setChangeTemplate(state1);
  // }, [state1]);

  // const [changeTemplate, setChangeTemplate] = useState(state1);

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
    <div className="h-full mt-10">
      <div class="ml-5">
        {/* <div className="grid grid-cols-8"> */}
        <div className="col-span-6">
          <PDFExport ref={pdfExportComponent} paperSize="A4">
            <center>
              <div className="shadow laptop:w-full">
                <div class="tablet:gap-4 h-44 tablet:grid tablet:grid-cols-5 grid grid-cols-3 ">
                  <div className="mt-10">
                    <img src={img1} className="w-89 h-69 tablet:ml-10" alt="" />
                  </div>
                  <div class="tablet:col-span-3 col-span-2 border-b-4 text-sm laptop:text-md desktop:text-lg">
                    <p className="mt-10 font-bold text-tiny font-Maven tablet:mt-28 mb-5">
                      Korea Software HRD Center Student's Background <br></br>
                      #12, St 323, Boeungkak II Commune, Toul Kork District,
                      Phnom Penh. <br></br>
                      Tel:(855) 23 99 13 14/012 998 919 <br></br>
                      www.kshrd.com.kh/FB. www.facebook.com/ksignhrd
                    </p>
                  </div>

                  <div className="h-1 mt-4 ml-5 bg-regal-blue_hrd w-80 tabelt:ml-1 tablet:hidden ">
                    {" "}
                  </div>

                  <div class="tablet:mt-10 mt-10">
                    <div>
                      <img
                        src={alumni1}
                        className="w-87 h-100 tablet:-ml-14"
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-4 min-h-1/25 text-sm laptop:text-md desktop:text-lg">
                  <div className="tablet:bg-regal-blue_hrd tablet:h-1 tablet:w-543">
                    {" "}
                  </div>

                  <div>
                    <div className="grid grid-cols-4 mt-36">
                      <div className="col-span-3">
                        <center>
                          <p className="laptop:text-md desktop:text-lg ml-20 text-xs font-extrabold font-maven tablet:mt-5 tablet:ml-44 text-regal-color_hrd">
                            CURRICULUM VITAE
                          </p>
                        </center>
                      </div>
                    </div>
                  </div>
                  <div className="px-3">
                    <div className="text-sm laptop:text-md desktop:text-lg mt-3 ml-2 font-extrabold text-left uppercase tablet:mt-6 tablet:ml-10 font-maven">
                      <span className="capitalize">Mr./Ms. </span>
                      <span>{personalDetails?.lastName} </span>
                      <span>{personalDetails?.firstName}</span>
                    </div>
                    <div className="grid grid-cols-3 mt-2 ml-2 text-left tablet:grid tablet:grid-cols-6 tablet:mt-3 tablet:ml-10 font-maven text-tinys">
                      <div>
                        <p className="font-extrabold">Address</p>
                      </div>
                      <div className="font-extrabold">
                        <p>:</p>
                      </div>
                      <div className="tablet:col-span-4">
                        <p className="-ml-16">{personalDetails?.address} </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 mt-2 ml-2 text-left tablet:grid tablet:grid-cols-6 tablet:mt-1 tablet:ml-10 font-maven text-tinys">
                      <div>
                        <p className="font-extrabold">Phone</p>
                      </div>
                      <div className="font-extrabold">
                        <p>:</p>
                      </div>
                      <div className="tablet:col-span-4">
                        <p className="-ml-16">{personalDetails?.phoneNumber}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 mt-2 ml-2 text-left tablet:grid tablet:grid-cols-6 tablet:mt-1 tablet:ml-10 font-maven text-tinys">
                      <div>
                        <p className="font-extrabold">Email</p>
                      </div>
                      <div className="font-extrabold">
                        <p>:</p>
                      </div>
                      <div className="tablet:col-span-4">
                        <p className="-ml-16">{personalDetails?.email}</p>
                      </div>
                    </div>
                    <div className="mt-3 ml-2 font-extrabold text-left uppercase tablet:mt-4 text-regal-color_hrd tablet:ml-10 font-maven text-tinys">
                      <span>1. </span>
                      <span>PROFILE</span>
                    </div>
                    <div className="grid grid-cols-3 mt-2 ml-2 text-left tablet:grid tablet:grid-cols-6 tablet:mt-3 tablet:ml-10 font-maven text-tinys">
                      <div className="font-extrabold">
                        <p>Sex</p>
                      </div>
                      <div className="font-extrabold">
                        <p>:</p>
                      </div>
                      <div className="tablet:col-span-4">
                        <p className="-ml-16 capitalize">
                          {personalDetails?.gender}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 mt-2 ml-2 text-left tablet:grid tablet:grid-cols-6 tablet:mt-1 tablet:ml-10 font-maven text-tinys">
                      <div className="font-extrabold">
                        <p>Date of Birth</p>
                      </div>
                      <div className="font-extrabold">
                        <p>:</p>
                      </div>
                      <div className="tablet:col-span-4">
                        <p className="-ml-16">{personalDetails?.dateOfBirth}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 mt-2 ml-2 text-left tablet:grid tablet:grid-cols-6 tablet:mt-1 tablet:ml-10 font-maven text-tinys">
                      <div className="font-extrabold">
                        <p>Place of Birth </p>
                      </div>
                      <div className="font-extrabold">
                        <p>:</p>
                      </div>
                      <div className="tablet:col-span-4">
                        <p className="-ml-16">{personalDetails?.placeOfBirth}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 mt-2 ml-2 text-left tablet:grid tablet:grid-cols-6 tablet:mt-1 tablet:ml-10 font-maven text-tinys">
                      <div className="font-extrabold ">
                        <p>Nationality</p>
                      </div>
                      <div className="font-extrabold ">
                        <p>:</p>
                      </div>
                      <div className="tablet:col-span-4">
                        <p className="-ml-16">Khmer</p>
                      </div>
                    </div>
                    <div className="mt-3 ml-2 font-extrabold text-left uppercase tablet:mt-4 text-regal-color_hrd tablet:ml-10 font-maven text-tinys">
                      <span>2. </span>
                      <span>Education</span>
                    </div>

                    {education?.map((edu) => {
                      return (
                        <div className="grid grid-cols-3 mt-2 ml-2 text-left tablet:grid tablet:grid-cols-6 tablet:mt-3 tablet:ml-10 font-maven text-tinys">
                          <div className="font-extrabold">
                            <p>
                              {edu?.startDate} - {edu?.endDate}
                            </p>
                          </div>
                          <div className="font-extrabold">
                            <p>:</p>
                          </div>
                          <div className="tablet:col-span-4">
                            <p className="-ml-16">{edu?.description}</p>
                          </div>
                        </div>
                      );
                    })}

                    <div className="mt-3 ml-2 font-extrabold text-left uppercase tablet:mt-4 text-regal-color_hrd tablet:ml-10 font-maven text-tinys">
                      <span>3. </span>
                      <span>Employment History</span>
                    </div>

                    {employmentHistory?.map((item) => {
                      return (
                        <div className="grid grid-cols-3 mt-2 ml-2 text-left tablet:grid tablet:grid-cols-6 tablet:mt-3 tablet:ml-10 font-maven text-tinys">
                          <div className="font-extrabold">
                            <p>{item?.startDate} - {item?.endDate}</p>
                          </div>
                          <div className="font-extrabold">
                            <p>:</p>
                          </div>
                          <div className="tablet:col-span-4">
                            <p className="-ml-16">
                              {item?.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}

                    <div className="mt-3 ml-2 font-extrabold text-left uppercase tablet:mt-4 text-regal-color_hrd tablet:ml-10 font-maven text-tinys">
                      <span>4. </span>
                      <span>LANGUAGES</span>
                    </div>
                    <div className="grid grid-cols-3 mt-2 ml-2 text-left tablet:grid tablet:grid-cols-6 tablet:mt-3 tablet:ml-10 font-maven text-tinys">
                      <div className="font-extrabold">
                        <p>Khmer</p>
                      </div>
                      <div className="font-extrabold">
                        <p>:</p>
                      </div>
                      <div className="tablet:col-span-4">
                        <p className="-ml-16">Native Speaker</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 mt-2 ml-2 text-left tablet:grid tablet:grid-cols-6 tablet:mt-1 tablet:ml-10 font-maven text-tinys">
                      <div className="font-extrabold">
                        <p>English</p>
                      </div>
                      <div className="font-extrabold">
                        <p>:</p>
                      </div>
                      <div className="tablet:col-span-4">
                        <p className="-ml-16">Highly proficient</p>
                      </div>
                    </div>
                    <div className="mt-3 ml-2 font-extrabold text-left uppercase tablet:mt-4 text-regal-color_hrd tablet:ml-10 font-maven text-tinys">
                      <span>5. </span>
                      <span>LANGUAGES</span>
                    </div>
                    <div className="text-sm laptop:text-md desktop:text-lg mt-2 ml-2 font-extrabold text-left uppercase tablet:mt-3 tablet:ml-10 font-maven">
                      <span className="capitalize">Mr. </span>
                      <span>Chen </span>
                      <span>Phirum</span>
                    </div>
                    <div className="grid grid-cols-3 mt-2 ml-2 text-left tablet:grid tablet:grid-cols-6 m tablet:ml-10 font-maven text-tinys">
                      <div className="font-extrabold">
                        <p>Job</p>
                      </div>
                      <div className="font-extrabold">
                        <p>:</p>
                      </div>
                      <div className="tablet:col-span-4">
                        <p className="-ml-16">
                          Deputy Director of Korea Software HRD Center{" "}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 mt-2 ml-2 text-left tablet:grid tablet:grid-cols-6 tablet:mt-1 tablet:ml-10 font-maven text-tinys">
                      <div className="font-extrabold">
                        <p>Phone</p>
                      </div>
                      <div className="font-extrabold">
                        <p>:</p>
                      </div>
                      <div className="tablet:col-span-4">
                        <p className="-ml-16">012 99 89 19 </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 mt-2 ml-2 text-left tablet:grid tablet:grid-cols-6 tablet:mt-1 tablet:ml-10 font-maven text-tinys">
                      <div className="font-extrabold mb-10">
                        <p>Email</p>
                      </div>
                      <div className="font-extrabold">
                        <p>:</p>
                      </div>
                      <div className="tablet:col-span-4">
                        <p className="-ml-16">Phirum.gm@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </center>
          </PDFExport>
        </div>

        {/* <div class="col-span-2 mt-10 ml-10 hidden laptop:block">
            <button
              class="mb-5 py-2 text-white text-lg rounded-lg w-full"
              style={styles}
              onClick={handleExportWithComponent}
            >
              Export as PDF
            </button>

            <button
              class="py-2 text-white text-lg rounded-lg w-full hidden laptop:block"
              style={styles}
              onClick={() => dispatch(fetchChangeCVTemplate(false))}
            >
              Rollback Template
            </button>
          </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}

const styles = {
  backgroundColor: colors.content,
};
