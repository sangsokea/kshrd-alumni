import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { colors } from "../commons/colors/colors";
import ViewOwnerProfileEdit from "./ViewOwnerProfileEdit";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { fetchAboutMePage } from "../redux/actions/localAction/AboutMePageAction";
import ScrollToTop from "react-scroll-up";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetCente);
export default function ViewOwnerProfilePage() {
  const scrollRef = React.useRef(null);
  const executeScroll = () => scrollToRef(scrollRef);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.aboutMePage, shallowEqual);
  const isAuth = useSelector((state) => state.isAuth, shallowEqual);
  const ownProfiles = useSelector((state) => state.ownProfiles, shallowEqual);
  const [fromViewAlumni, setFromViewAlumni] = useState(false);
  const [dataFromViewAlumni, setDataFromViewAlumni] = useState({});
  const [isShowEdit, setisShowEdit] = useState(false);

  const [backToTop, setBackToTop] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsEdit(state);
  }, [state]);

  const handleEdite = () => {
    let uuid = localStorage.getItem("currentUuid");
    setTimeout(
      () =>
        navigate(`/sidebar/editNewCV/${uuid}`, {
          state: { profileDetails: { ...dataFromViewAlumni } },
        }),
      10,
    );
  };

  useEffect(() => {
    let isFromAlumni = location?.state?.fromViewAlumni;
    setFromViewAlumni(isFromAlumni);
    if (isFromAlumni) {
      executeScroll();

      const localData = localStorage.getItem("view");
      const itemFromAlumni = localData && JSON.parse(localData);
      isFromAlumni && setDataFromViewAlumni(itemFromAlumni);
    } else {
      const localData = localStorage.getItem("ownProfile");
      const itemFromAlumni = localData && JSON.parse(localData);
      setDataFromViewAlumni(
        itemFromAlumni ? itemFromAlumni?.profileDetails : {},
      );
    }
  }, [location, ownProfiles]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
    executeScroll()
  }, []);

  React.useEffect(() => {
    let isFromAlumni = location?.state?.fromViewAlumni;
    if (isAuth && !isFromAlumni) {
      const isEmpty = localStorage.getItem("isProfileEmpty");
      isEmpty && JSON.parse(isEmpty)
        ? setisShowEdit(false)
        : setisShowEdit(true);
    } else {
      setisShowEdit(false);
    }
    return () => {
      setisShowEdit(true);
    };
  }, [ownProfiles, location, window.location.reload]);

  const [isEdit, setIsEdit] = useState(state);

  console.log(dataFromViewAlumni);

  return (
    <>
      {isEdit ? (
        <ViewOwnerProfileEdit />
      ) : (
        <section class=" p-6 w-full rounded-md  shadow-[0_4px_100px_10px_rgba(0,0,0,0.1)] laptop:ml-2 laptop:px-20">
        <div class="">
          <div className="">
           
          <div
          ref={scrollRef}
          className="  body-font font-maven"
        >
          <div>
            {/* <img className='w-72 h-72' src={nop} alt="Image" /> */}
            <img
              className="w-auto laptop:w-full h-56 object-cover"
              src="https://images.alphacoders.com/109/1092814.jpg"
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

            {isShowEdit && (
              <button
                onClick={() => handleEdite()}
                className="font-medium text-lg text-ccon hover:text-blue-500 flex transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
                Edit
              </button>
            )}
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
                <div class="bg-white shadow overflow-hidden tablet:rounded-lg mt-5">
                  <div class="px-4 py-5 tablet:px-6">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                      <span className="text-bg2 font-bold">Education</span>{" "}
                      Information
                    </h3>
                    <p class="mt-1 max-w-2xl text-sm text-gray-500">
                      Education details and application.
                    </p>
                  </div>
                  <div class="border-t border-gray-200">
                    <dl>
                      <div class="bg-gray-50 px-4 py-5 tablet:grid tablet:grid-cols-3 tablet:gap-4 tablet:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                          School
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 tablet:mt-0 tablet:col-span-2">
                          {obj?.school ? (
                            obj?.school
                          ) : (
                            <span className="text-red-500">
                              Empty Information !
                            </span>
                          )}
                        </dd>
                      </div>
                      <div class="bg-white px-4 py-5 tablet:grid tablet:grid-cols-3 tablet:gap-4 tablet:px-6">
                        <dt class="text-sm font-medium text-gray-500">City</dt>
                        <dd class="mt-1 text-sm text-gray-900 tablet:mt-0 tablet:col-span-2">
                          {obj?.city ? (
                            obj?.city
                          ) : (
                            <span className="text-red-500">
                              Empty Information !
                            </span>
                          )}
                        </dd>
                      </div>
                      <div class="bg-gray-50 px-4 py-5 tablet:grid tablet:grid-cols-3 tablet:gap-4 tablet:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                          Degree
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 tablet:mt-0 tablet:col-span-2">
                          {obj?.degree ? (
                            obj?.degree
                          ) : (
                            <span className="text-red-500">
                              Empty Information !
                            </span>
                          )}
                        </dd>
                      </div>
                      <div class="bg-white px-4 py-5 tablet:grid tablet:grid-cols-3 tablet:gap-4 tablet:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                          {" "}
                          Start Date
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 tablet:mt-0 tablet:col-span-2">
                          {obj?.startDate ? (
                            obj?.startDate
                          ) : (
                            <span className="text-red-500">
                              Empty Information !
                            </span>
                          )}
                        </dd>
                      </div>
                      <div class="bg-gray-50 px-4 py-5 tablet:grid tablet:grid-cols-3 tablet:gap-4 tablet:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                          End Date
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 tablet:mt-0 tablet:col-span-2">
                          {obj?.endDate ? (
                            obj?.endDate
                          ) : (
                            <span className="">Present</span>
                          )}
                        </dd>
                      </div>
                      <div class="bg-white px-4 py-5 tablet:grid tablet:grid-cols-3 tablet:gap-4 tablet:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                          Description
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 tablet:mt-0 tablet:col-span-2">
                          {obj.description ? (
                            obj?.description
                          ) : (
                            <span className="text-red-500">
                              Empty Information !
                            </span>
                          )}
                        </dd>
                      </div>
                    </dl>
                  </div>
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
                <div class="bg-white shadow overflow-hidden tablet:rounded-lg mt-5">
                  <div class="px-4 py-5 tablet:px-6">
                    <h3 class="text-lg leading-6 ">
                      {obj?.jobTitle ? (
                        <span className="text-bg2 font-bold">
                          {obj?.jobTitle}
                        </span>
                      ) : (
                        "Applicant Information"
                      )}
                    </h3>
                    <p class="mt-1 max-w-2xl text-sm text-gray-500">
                      Experienced details and application.
                    </p>
                  </div>
                  <div class="border-t border-gray-200">
                    <dl>
                      <div class="bg-gray-50 px-4 py-5 tablet:grid tablet:grid-cols-3 tablet:gap-4 tablet:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                          {" "}
                          Company
                        </dt>

                        <dd class="mt-1 text-sm text-gray-900 tablet:mt-0 tablet:col-span-2">
                          {obj?.employee ? (
                            obj?.employee
                          ) : (
                            <span className="text-red-500">
                              Empty Information !
                            </span>
                          )}
                        </dd>
                      </div>
                      <div class="bg-white px-4 py-5 tablet:grid tablet:grid-cols-3 tablet:gap-4 tablet:px-6">
                        <dt class="text-sm font-medium text-gray-500">City</dt>
                        <dd class="mt-1 text-sm text-gray-900 tablet:mt-0 tablet:col-span-2">
                          {obj?.city ? (
                            obj?.city
                          ) : (
                            <span className="text-red-500">
                              Empty Information !
                            </span>
                          )}
                        </dd>
                      </div>
                      <div class="bg-gray-50 px-4 py-5 tablet:grid tablet:grid-cols-3 tablet:gap-4 tablet:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                          {" "}
                          Position{" "}
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 tablet:mt-0 tablet:col-span-2">
                          {obj?.jobTitle ? (
                            obj?.jobTitle
                          ) : (
                            <span className="text-red-500">
                              Empty Information !
                            </span>
                          )}
                        </dd>
                      </div>
                      <div class="bg-white px-4 py-5 tablet:grid tablet:grid-cols-3 tablet:gap-4 tablet:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                          Start Date
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 tablet:mt-0 tablet:col-span-2">
                          {obj?.startDate ? (
                            obj?.startDate
                          ) : (
                            <span className="text-red-500">
                              Empty Information !
                            </span>
                          )}
                        </dd>
                      </div>
                      <div class="bg-gray-50 px-4 py-5 tablet:grid tablet:grid-cols-3 tablet:gap-4 tablet:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                          End Date
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 tablet:mt-0 tablet:col-span-2">
                          {obj?.endDate ? (
                            obj?.endDate
                          ) : (
                            <span className="">Present</span>
                          )}
                        </dd>
                      </div>
                      <div class="bg-white px-4 py-5 tablet:grid tablet:grid-cols-3 tablet:gap-4 tablet:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                          Description
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 tablet:mt-0 tablet:col-span-2">
                          {obj.description ? (
                            obj.description
                          ) : (
                            <span className="text-red-500">
                              Empty Information !
                            </span>
                          )}
                        </dd>
                      </div>
                    </dl>
                  </div>
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
                <div class="bg-white shadow overflow-hidden tablet:rounded-lg mt-5">
                  <div class="px-4 py-5 tablet:px-6">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                      Skill{" "}
                      <span className="text-bg2 font-bold">
                        {obj?.skill ? obj?.skill : ""}
                      </span>{" "}
                      Information
                    </h3>
                    <p class="mt-1 max-w-2xl text-sm text-gray-500">
                      Skill details and application.
                    </p>
                  </div>
                  <div class="border-t border-gray-200">
                    <dl>
                      <div class="bg-gray-50 px-4 py-5 tablet:grid tablet:grid-cols-3 tablet:gap-4 tablet:px-6">
                        <dt class="text-sm font-medium text-gray-500">Skill</dt>

                        <dd class="mt-1 text-sm text-gray-900 tablet:mt-0 tablet:col-span-2">
                          {obj?.skill ? (
                            obj?.skill
                          ) : (
                            <span className="text-red-500">
                              Empty Information !
                            </span>
                          )}
                        </dd>
                      </div>
                      <div class="bg-white px-4 py-5 tablet:grid tablet:grid-cols-3 tablet:gap-4 tablet:px-6">
                        <dt class="text-sm font-medium text-gray-500">Level</dt>
                        <dd class="mt-1 text-sm text-gray-900 tablet:mt-0 tablet:col-span-2">
                          {obj?.levelExpert ? (
                            obj?.levelExpert
                          ) : (
                            <span className="text-red-500">
                              Empty Information !
                            </span>
                          )}
                        </dd>
                      </div>
                    </dl>
                  </div>
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
          {dataFromViewAlumni?.license ? (
            <>
              {dataFromViewAlumni?.license?.map((obj, i) => (
                <div class="bg-white shadow overflow-hidden tablet:rounded-lg mt-5">
                  <div class="px-4 py-5 tablet:px-6">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                      Licenses At{" "}
                      {obj?.school ? (
                        <span className="text-bg2 uppercase font-bold">
                          {obj?.school}
                        </span>
                      ) : (
                        "Licenses"
                      )}
                    </h3>
                    <p class="mt-1 max-w-2xl text-sm text-gray-500">
                      Licenses & Cerifications details and application.
                    </p>
                  </div>
                  <div class="border-t border-gray-200">
                    <dl>
                      <div class="bg-gray-50 px-4 py-5 tablet:grid tablet:grid-cols-3 tablet:gap-4 tablet:px-6">
                        <dt class="text-sm font-medium text-gray-500">Image</dt>

                        <dd class="mt-1 text-sm text-gray-900 tablet:mt-0 tablet:col-span-2">
                          <div class="overflow-x-auto flex">
                            {obj?.image ? (
                              <img
                                src={obj?.image}
                                class="max-w-full h-36 rounded-lg"
                                alt=""
                              />
                            ) : (
                              <span className="text-red-500">No Image</span>
                            )}
                          </div>
                        </dd>
                      </div>
                      <div class="bg-white px-4 py-5 tablet:grid tablet:grid-cols-3 tablet:gap-4 tablet:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                          School
                        </dt>

                        <dd class="mt-1 text-sm text-gray-900 tablet:mt-0 tablet:col-span-2">
                          {obj?.school ? (
                            obj?.school
                          ) : (
                            <span className="text-red-500">
                              Empty Information !
                            </span>
                          )}
                        </dd>
                      </div>
                      <div class="bg-gray-50 px-4 py-5 tablet:grid tablet:grid-cols-3 tablet:gap-4 tablet:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                          Degree
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 tablet:mt-0 tablet:col-span-2">
                          {obj?.degree ? (
                            obj?.degree
                          ) : (
                            <span className="text-red-500">
                              Empty Information !
                            </span>
                          )}
                        </dd>
                      </div>
                    </dl>
                  </div>
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
                      {obj?.customSection ? (
                        obj?.customSection
                      ) : (
                        <span className="text-red-700 font-xl">
                          Empty Information
                        </span>
                      )}
                    </p>
                  </div>
                  <div className="rounded-md bg-gray-50">
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
            ""
          )}

          <div className="grid grid-cols-1 gap-5  laptop:grid-cols-3 justify-between mx-3 laptop:mt-10 mt-5">
            <div className="">
              <img
                className="w-auto h-12 mt-5"
                src="https://www.datocms-assets.com/45470/1631110818-logo-react-js.png"
                alt="JavaScript"
              />
              <p className="text-md laptop:text-lg desktop:text-xl font-bold">
                React
              </p>
              <p className="text-sm laptop:text-md desktop:text-md w-auto laptop:w-full">
                React is a declarative, efficient, and flexible JavaScript
                library for building user interfaces or UI components.
              </p>
            </div>

            <div className="">
              <img
                className="w-auto h-12 mt-5"
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--zrUJwvgZ--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bupbqc9fctvw4j7r14it.png"
                alt="Spring Boot"
              />
              <p className="text-md laptop:text-lg desktop:text-xl font-bold ">
                Spring Boot
              </p>
              <p className="text-sm laptop:text-md desktop:text-md w-[300px] laptop:w-full">
                Spring Boot is a tool that makes developing web application and
                microservices faster.
              </p>
            </div>

            <div className="mb-10">
              <img
                className="w-auto h-12 mt-5"
                src="https://killbill.io/wp-content/uploads/2014/11/docker1.png"
                alt="Java Programming"
              />
              <p className="text-md laptop:text-lg desktop:text-xl font-bold">
                Docker
              </p>
              <p className="text-sm laptop:text-md desktop:text-md w-auto laptop:w-full">
                Docker is a set of platform as a service products that use
                OS-level virtualization to deliver software in packages called
                containers.
              </p>
            </div>
          </div>
          {backToTop && (
            <ScrollToTop showUnder={0} duration={1000}>
              <div className="animate-bounce fixed bottom-10 right-10">
                <button
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  class="inline-block p-3 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out bottom-5 right-5"
                  id="btn-back-to-top"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    class="w-4 h-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
                    ></path>
                  </svg>
                </button>
              </div>
            </ScrollToTop>
          )}
        </div>
           
          </div>
        </div>

      </section>
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
