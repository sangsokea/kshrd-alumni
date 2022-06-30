import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { colors } from "../commons/colors/colors";
import ViewOwnerProfileEdit from "./ViewOwnerProfileEdit";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { fetchAboutMePage } from "../redux/actions/localAction/AboutMePageAction";

export default function ViewOwnerProfilePage() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.aboutMePage, shallowEqual);

  useEffect(() => {
    setIsEdit(state);
  }, [state]);

  const [isEdit, setIsEdit] = useState(state);

  return (
    <>
      {isEdit ? (
        <ViewOwnerProfileEdit />
      ) : (
        <div className="mx-10 laptop:mt-5 body-font font-maven ">
          <div>
            {/* <img className='w-72 h-72' src={nop} alt="Image" /> */}
            <img
              className="w-[300px] laptop:w-full h-auto"
              src="https://i.pinimg.com/originals/a6/cd/63/a6cd63445858ab32de5a829c1d22b77c.png"
              alt="Image"
            />
          </div>
          <div className="flex laptop:justify-between mt-8 laptop:w-full">
            <p
              className="text-lg laptop:text-2xl desktop:text-4xl font-bold"
              style={styles}
            >
              Vong Yuoyi
            </p>

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
            Full Stack Developer
          </p>
          <p className="mt-5 laptop:mt-8 laptop:w-full text-sm laptop:text-md desktop:text-lg w-[300px]">
            Hi, my name is Vong Yuoyi and I'm a senior software engineer.
            Welcome to my personal website! in frontend and backend development
            for complex scalable web apps. If you want to know how I may help
            your project? Check out my project portfolio and online resume.
          </p>
          <p class="border-[1px] border-solid border-bgSkill laptop:w-full mt-12 w-[300px]"></p>
          <div class="flex mt-12 laptop:mb-10 mb-5">
            <p
              class="border border-solid h-10 border-3"
              style={borderStyle}
            ></p>
            <p
              class="font-bold ml-4 text-lg laptop:text-2xl desktop:text-4xl "
              style={styles}
            >
              What I can do{" "}
            </p>
          </div>
          <p className="laptop:mt-8 laptop:w-full text-sm laptop:text-md desktop:text-lg w-[300px]">
            I am gratuated student from HRD and have more than 2 years'
            experience building software for clients. Below is a quick overview
            of my main technical skill sets and technologies I use.{" "}
          </p>

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
              <p className="text-sm laptop:text-md desktop:text-lg">
                Java Script is a dynamic programming language that's used for
                web development.
              </p>
            </div>

            <div className="">
              <img
                className="w-auto h-12 mt-5"
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--zrUJwvgZ--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bupbqc9fctvw4j7r14it.png"
                alt="Spring Boot"
              />
              <p className="text-md laptop:text-lg desktop:text-xl font-bold">
                Spring Boot
              </p>
              <p className="text-sm laptop:text-md desktop:text-lg">
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
              <p className="text-sm laptop:text-md desktop:text-lg">
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
