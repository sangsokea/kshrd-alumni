import React from "react";
import { NavLink } from "react-router-dom";
import { colors } from "../commons/colors/colors";

export default function ViewOwnerProfilePage() {
  return (
    <>
      <div className="mx-10 mt-5 maPro ">
        <div>
          {/* <img className='w-72 h-72' src={nop} alt="Image" /> */}
          <img
            className="w-full h-72"
            src="https://i.pinimg.com/originals/a6/cd/63/a6cd63445858ab32de5a829c1d22b77c.png"
            alt="Image"
          />
        </div>
        <div className="flex justify-between mt-8 ">
          <p className="text-4xl font-bold" style={styles}>Sang Sokea</p>
          <NavLink to="/sidebar/aboutMeEdit">
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
          </NavLink>
        </div>

        <p className="mt-3 text-2xl"> Full Stack Developer</p>
        <p className="mt-8 text-xl">
          Hi, my name is Sang Sokea and I'm a senior software engineer. Welcome
          to my personal website! in frontend and backend development for
          complex scalable web apps. If you want to know how I may help your
          project? Check out my project portfolio and online resume.
        </p>
        <p className="w-full mt-12 border border-solid border-cB"></p>
        <div class="flex mt-12">
          <p class="border border-solid h-10 border-3" style={borderStyle}></p>
          <p class="font-bold ml-4 text-4xl" style={styles}>
            What I can do{" "}
          </p>
        </div>
        <p className="mt-10">
          I am gratuated student from HRD and have more than 2 years' experience
          building software for clients. Below is a quick overview of my main
          technical skill sets and technologies I use.{" "}
        </p>

        <div className="flex justify-between mx-3 mt-20">
          <div className="w-48">
            <img
              className="w-auto h-12 "
              src=" https://www.computerhope.com/jargon/j/javascript.png"
              alt="JavaScript"
            />
            <p className="text-xl font-medium">Java Script</p>
            <p>Sample text text text text text text text.</p>
          </div>

          <div className="w-48">
            <img
              className="w-auto h-12 "
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--zrUJwvgZ--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bupbqc9fctvw4j7r14it.png"
              alt="Spring Boot"
            />
            <p className="text-xl font-medium">Spring Boot</p>
            <p>Sample text text text text text text text.</p>
          </div>

          <div className="">
            <img
              className="w-auto h-12 "
              src="https://www.inapps.net/wp-content/uploads/2022/05/java_logo_640.jpg"
              alt="Java Programming"
            />
            <p className="text-xl font-medium">Java Programming</p>
            Sample text text text text text text text.
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  color: colors.content,
};

const borderStyle = {
  borderColor: colors.content,
};
