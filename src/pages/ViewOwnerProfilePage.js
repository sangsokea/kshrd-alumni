import React from "react";
import { NavLink } from "react-router-dom";

export default function ViewOwnerProfilePage() {
  return (
    <>
      <div class="mt-5 mx-10   maPro ">
        <div>
          {/* <img class='w-72 h-72' src={nop} alt="Image" /> */}
          <img
            class="w-full h-72"
            src="https://i.pinimg.com/originals/a6/cd/63/a6cd63445858ab32de5a829c1d22b77c.png"
            alt="Image"
          />
        </div>
        <div class="flex justify-between mt-8 ">
          <p class="text-4xl text-cB font-bold">Vong Yuoyi</p>
          <NavLink to="profileViewEdit">
            <svg
              class="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </NavLink>
        </div>

        <p class="mt-3 text-2xl"> Full Stack Developer</p>
        <p class="mt-8 text-xl">
          Hi, my name is Vong Yuoyi and I'm a senior software engineer. Welcome
          to my personal website! in frontend and backend development for
          complex scalable web apps. If you want to know how I may help your
          project? Check out my project portfolio and online resume.
        </p>
        <p class="border border-solid border-cB w-full mt-12"></p>
        <div class="flex mt-12">
          <p class="border border-cB border-solid h-10"></p>
          <p class=" font-bold ml-2 text-cB text-4xl">What I can do </p>
        </div>
        <p class="mt-10">
          I am gratuated student from HRD and have more than 2 years' experience
          building software for clients. Below is a quick overview of my main
          technical skill sets and technologies I use.{" "}
        </p>

        <div class="mt-20 flex justify-between mx-3">
          <div class="w-48">
            <img
              class="h-12 w-12 "
              src=" https://www.computerhope.com/jargon/j/javascript.png"
              alt="f1"
            />
            <p class="font-medium text-xl">Java Script</p>
            <p>Sample text text text text text text text.</p>
          </div>

          <div class="w-48">
            <img
              class="h-12 w-12 "
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--zrUJwvgZ--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bupbqc9fctvw4j7r14it.png"
              alt="f1"
            />
            <p class="font-medium text-xl">Spring Boot</p>
            <p>Sample text text text text text text text.</p>
          </div>

          <div class=" w-1/3 items-center">
            <img
              class="h-12 w-12 "
              src="https://www.inapps.net/wp-content/uploads/2022/05/java_logo_640.jpg"
              alt="f1"
            />
            <p class="font-medium text-xl">Java Programming</p>
            Sample text text text text text text text.
          </div>
        </div>
      </div>
    </>
  );
}
