import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { colors } from "../commons/colors/colors";
import ViewOwnerProfileEdit from "./ViewOwnerProfileEdit";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { fetchAboutMePage } from "../redux/actions/localAction/AboutMePageAction";

export default function ViewOwnerProfilePage() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.aboutMePage, shallowEqual);
  const [fromViewAlumni, setFromViewAlumni] = useState(false);
  const [dataFromViewAlumni, setDataFromViewAlumni] = useState({});

  const location = useLocation();

  useEffect(() => {
    setIsEdit(state);
  }, [state]);

  useEffect(() => {
    let isFromAlumni = location?.state?.fromViewAlumni;
    setFromViewAlumni(isFromAlumni);
    if (isFromAlumni) {
      const localData = localStorage.getItem("view");
      const itemFromAlumni = JSON.parse(localData);
      isFromAlumni && setDataFromViewAlumni(itemFromAlumni);
    }
  }, [location]);

  const [isEdit, setIsEdit] = useState(state);

  console.log(dataFromViewAlumni);

  return (
    <>
      {isEdit ? (
        <ViewOwnerProfileEdit />
      ) : (
        <div className="ml-5 mt-5 mr-5 laptop:mt-5 laptop:ml-10 body-font font-maven">
          <div>
            {/* <img className='w-72 h-72' src={nop} alt="Image" /> */}
            <img
              className="w-auto laptop:w-full h-auto"
              src="https://i.pinimg.com/originals/a6/cd/63/a6cd63445858ab32de5a829c1d22b77c.png"
              alt="Image"
            />
          </div>
          <div className="flex laptop:justify-between mt-8 laptop:w-full">
            {dataFromViewAlumni?.personalDetails ? (
              <p
                className="text-lg laptop:text-2xl desktop:text-4xl font-bold"
                style={styles}
              >
                {dataFromViewAlumni?.personalDetails?.firstName}{" "}
                {dataFromViewAlumni?.personalDetails?.lastName}
              </p>
            ) : (
              <p
                className="text-lg laptop:text-2xl desktop:text-4xl font-bold"
                style={styles}
              >
                Name is empty
              </p>
            )}

            <button
              type="button"
              onClick={() => dispatch(fetchAboutMePage(true))}
              className="ml-auto"
            >
              {/* <NavLink to=""> */}
              <span className="">
                <svg
                  className="w-6 h-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </span>
              {/* </NavLink> */}
            </button>
          </div>

          <p className="mt-3 text-md laptop:text-lg desktop:text-2xl">
            {" "}
            My summary Below
          </p>
          {dataFromViewAlumni?.personalDetails?.summary ? (
            <p className="mt-5 laptop:mt-8 laptop:w-full text-sm laptop:text-md desktop:text-lg w-auto">
              {dataFromViewAlumni?.personalDetails?.summary}
            </p>
          ) : (
            <p className="mt-5 laptop:mt-8 laptop:w-full text-sm laptop:text-md desktop:text-lg w-auto">
              summary is empty
            </p>
          )}
          <p class="border-[1px] border-solid border-bgSkill laptop:w-full mt-12 w-[300px]"></p>
          {/* education */}
          <div class="flex mt-12 laptop:mb-10 mb-5">
            <p
              class="border border-solid h-10 border-3"
              style={borderStyle}
            ></p>
            <p
              class="font-bold ml-4 text-lg laptop:text-2xl desktop:text-4xl "
              style={styles}
            >
              Education{" "}
            </p>
          </div>
          {dataFromViewAlumni?.education ? (
            <>
              {dataFromViewAlumni?.education?.map((obj, i) => (
                <div className="rounded-md p-5 my-5 bg-gray-100">
                  <h4 className="flex justify-between tablet:w-1/2 w-full">
                    ➡️ School
                    <span className="block w-1/2">: {obj?.school}</span>
                  </h4>
                  <h4 className="flex justify-between tablet:w-1/2 w-full">
                    ➡️ City <span className="block w-1/2">: {obj?.city}</span>
                  </h4>
                  <h4 className="flex justify-between tablet:w-1/2 w-full">
                    ➡️ Degree{" "}
                    <span className="block w-1/2">: {obj?.degree}</span>
                  </h4>
                  <h4 className="flex justify-between tablet:w-1/2 w-full mr-2">
                    ➡️ Start Date{" "}
                    <span className="block w-1/2">: {obj?.startDate}</span>{" "}
                  </h4>
                  <h4 className="flex justify-between tablet:w-1/2 w-full">
                    ➡️ Start Date{" "}
                    <span className="block w-1/2">
                      : {obj?.endDate ? obj?.endDate : "present"}
                    </span>
                  </h4>

                  {obj?.description && (
                    <p className="mt-5 laptop:mt-8 laptop:w-full text-sm laptop:text-md desktop:text-lg w-auto">
                      {obj.description}
                    </p>
                  )}
                </div>
              ))}
            </>
          ) : (
            "Empty"
          )}
          {/* employee history */}
          <div class="flex mt-12 laptop:mb-10 mb-5">
            <p
              class="border border-solid h-10 border-3"
              style={borderStyle}
            ></p>
            <p
              class="font-bold ml-4 text-lg laptop:text-2xl desktop:text-4xl "
              style={styles}
            >
              Experienced{" "}
            </p>
          </div>
          {dataFromViewAlumni?.employmentHistory ? (
            <>
              {dataFromViewAlumni?.employmentHistory?.map((obj, i) => (
                <div className="rounded-md p-5 my-5 bg-gray-100">
                  <h4 className="flex justify-between tablet:w-1/2 w-full">
                    ➡️ Company
                    <span className="block w-1/2">: {obj?.employee}</span>
                  </h4>
                  <h4 className="flex justify-between tablet:w-1/2 w-full">
                    ➡️ City <span className="block w-1/2">: {obj?.city}</span>
                  </h4>
                  <h4 className="flex justify-between tablet:w-1/2 w-full">
                    ➡️ Position{" "}
                    <span className="block w-1/2">: {obj?.jobTitle}</span>
                  </h4>
                  <h4 className="flex justify-between tablet:w-1/2 w-full mr-2">
                    ➡️ Start Date{" "}
                    <span className="block w-1/2">: {obj?.startDate}</span>{" "}
                  </h4>
                  <h4 className="flex justify-between tablet:w-1/2 w-full">
                    ➡️ Start Date{" "}
                    <span className="block w-1/2">
                      : {obj?.endDate ? obj?.endDate : "present"}
                    </span>
                  </h4>

                  {obj?.description && (
                    <p className="mt-5 laptop:mt-8 laptop:w-full text-sm laptop:text-md desktop:text-lg w-auto">
                      {obj.description}
                    </p>
                  )}
                </div>
              ))}
            </>
          ) : (
            "Empty"
          )}

          {/* Skill */}
          <div class="flex mt-12 laptop:mb-10 mb-5">
            <p
              class="border border-solid h-10 border-3"
              style={borderStyle}
            ></p>
            <p
              class="font-bold ml-4 text-lg laptop:text-2xl desktop:text-4xl "
              style={styles}
            >
              Skills{" "}
            </p>
          </div>
          {dataFromViewAlumni?.skill ? (
            <>
              {dataFromViewAlumni?.skill?.map((obj, i) => (
                <div className="rounded-md p-5 my-5 bg-gray-100">
                  <h4 className="flex justify-between tablet:w-1/2 w-full">
                    ➡️ Skill
                    <span className="block w-1/2">: {obj?.skill}</span>
                  </h4>
                  <h4 className="flex justify-between tablet:w-1/2 w-full">
                    ➡️ Level{" "}
                    <span className="block w-1/2">: {obj?.levelExpert}</span>
                  </h4>

                  {obj?.description && (
                    <p className="mt-5 laptop:mt-8 laptop:w-full text-sm laptop:text-md desktop:text-lg w-auto">
                      {obj.description}
                    </p>
                  )}
                </div>
              ))}
            </>
          ) : (
            "Empty"
          )}

          {/* Licenses & Cerifications */}
          <div class="flex mt-12 laptop:mb-10 mb-5">
            <p
              class="border border-solid h-10 border-3"
              style={borderStyle}
            ></p>
            <p
              class="font-bold ml-4 text-lg laptop:text-2xl desktop:text-4xl "
              style={styles}
            >
              Licenses & Cerifications{" "}
            </p>
          </div>
          {dataFromViewAlumni?.education ? (
            <>
              {dataFromViewAlumni?.education?.map((obj, i) => (
                <div className="rounded-md p-5 my-5 bg-gray-100">
                  <h4 className="flex justify-between tablet:w-1/2 w-full">
                    ➡️ School
                    <span className="block w-1/2">: {obj?.school}</span>
                  </h4>
                  <h4 className="flex justify-between tablet:w-1/2 w-full">
                    ➡️ City <span className="block w-1/2">: {obj?.city}</span>
                  </h4>
                  <h4 className="flex justify-between tablet:w-1/2 w-full">
                    ➡️ Degree{" "}
                    <span className="block w-1/2">: {obj?.degree}</span>
                  </h4>
                  <h4 className="flex justify-between tablet:w-1/2 w-full mr-2">
                    ➡️ Start Date{" "}
                    <span className="block w-1/2">: {obj?.startDate}</span>{" "}
                  </h4>
                  <h4 className="flex justify-between tablet:w-1/2 w-full">
                    ➡️ Start Date{" "}
                    <span className="block w-1/2">
                      : {obj?.endDate ? obj?.endDate : "present"}
                    </span>
                  </h4>

                  {obj?.description && (
                    <p className="mt-5 laptop:mt-8 laptop:w-full text-sm laptop:text-md desktop:text-lg w-auto">
                      {obj.description}
                    </p>
                  )}
                </div>
              ))}
            </>
          ) : (
            "Empty"
          )}

          {dataFromViewAlumni?.addSection ? (
            <>
              {dataFromViewAlumni?.addSection?.map((obj, i) => (
                <>
                  {/* Section */}
                  <div class="flex mt-12 laptop:mb-10 mb-5">
                    <p
                      class="border border-solid h-10 border-3"
                      style={borderStyle}
                    ></p>
                    <p
                      class="font-bold ml-4 text-lg laptop:text-2xl desktop:text-4xl "
                      style={styles}
                    >
                      {obj?.customSection}
                    </p>
                  </div>
                  <div className="rounded-md bg-gray-100">
                   

                    {obj?.sectionValue && (
                      <p className="p-5 laptop:mt-8 laptop:w-full text-sm laptop:text-md desktop:text-lg w-auto">
                        {obj.sectionValue}
                      </p>
                    )}
                  </div>
                </>
              ))}
            </>
          ) : (
            "Empty"
          )}

          <div className="grid grid-cols-1 gap-5 laptop:grid-cols-3 justify-between mx-3 laptop:mt-10 mt-5">
            <div className="">
              <img
                className="w-auto h-12 mt-5"
                src="https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png"
                alt="JavaScript"
              />
              <p className="text-md laptop:text-lg desktop:text-xl font-bold">
                Java Script
              </p>
              <p className="text-sm laptop:text-md desktop:text-lg w-auto laptop:w-full">
                Java Script is a dynamic programming language that's used for
                web development.
              </p>
            </div>

            <div className="hidden laptop:block">
              <img
                className="w-auto h-12 mt-5"
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--zrUJwvgZ--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bupbqc9fctvw4j7r14it.png"
                alt="Spring Boot"
              />
              <p className="text-md laptop:text-lg desktop:text-xl font-bold ">
                Spring Boot
              </p>
              <p className="text-sm laptop:text-md desktop:text-lg w-[300px] laptop:w-full">
                Spring Boot is a tool that makes developing web application and
                microservices faster.
              </p>
            </div>

            <div className="mb-10">
              <img
                className="w-auto h-12 mt-5"
                src="https://www.inapps.net/wp-content/uploads/2022/05/java_logo_640.jpg"
                alt="Java Programming"
              />
              <p className="text-md laptop:text-lg desktop:text-xl font-bold">
                Java Programming
              </p>
              <p className="text-sm laptop:text-md desktop:text-lg w-auto laptop:w-full">
                Java is a high-level, class-based, object-oriented programming
                language.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const styles = {
  color: colors.content,
};

const borderStyle = {
  borderColor: colors.content,
};
