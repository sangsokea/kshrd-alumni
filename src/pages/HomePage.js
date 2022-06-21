import React from "react";
import Slider from "react-slick";
import homepage from "../commons/images/Cover_homepage.jpeg";

// card slides
import director_picture from "../commons/images/card-slide/director.7a1c2126.jpg";
import graduated_student_2 from "../commons/images/card-slide/graduated student(2).jpg";
import graduated_student from "../commons/images/card-slide/graduated student.jpg";
import event from "../commons/images/card-slide/event.jpg";
import sport from "../commons/images/card-slide/sport.jpg";
import closing from "../commons/images/card-slide/closing.jpg";

// partners
import ckcc from "../commons/images/partner logo/ckcc.jpg";
import king_sejong_institute from "../commons/images/partner logo/king sejong institute.png";
import koica from "../commons/images/partner logo/koica.jpg";
import kosign from "../commons/images/partner logo/kosign.jpg";
import morakot from "../commons/images/partner logo/morakot.png";
import nipa from "../commons/images/partner logo/nipa.png";
import webcash from "../commons/images/partner logo/webcash.jpg";
import WeMB from "../commons/images/partner logo/WeMB.png";

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 3,
  speed: 500,
  dots: true,
  arrows: true,
};

export default function HomePage() {
  return (
    <div class="container mx-auto mt-3">
      <section class="body-font font-maven text-sm laptop:text-md">
        <img src={homepage} alt="9th gen image"></img>
        <div class="hidden laptop:block">
          {/* Our Achievement Section */}
          <h1 class="text-2xl mt-5 mb-5">Our Achievements</h1>
          {/* <p class="text-orange-700 -mt-5" style={{fontWeight: "1200"}}>_______</p> */}
          <div>
            <Slider {...settings}>
              <div class="px-2">
                <img
                  class="rounded-md"
                  src={director_picture}
                  alt="director's picture"
                />
              </div>

              <div class="px-2">
                <img
                  class="rounded-md "
                  src={graduated_student_2}
                  alt="alumni archievement"
                />
              </div>

              <div class="px-2">
                <img
                  class="rounded-md "
                  src={event}
                  alt="other event"
                />
              </div>
              <div class="px-2">
                <img
                  class="rounded-md "
                  src={graduated_student}
                  alt="graduated student"
                />
              </div>
              <div class="px-2">
                <img
                  class="rounded-md "
                  src={sport}
                  alt="sport event"
                />
              </div>
              <div class="px-2">
                <img
                  class="rounded-md "
                  src={closing}
                  alt="closing day"
                />
              </div>
            </Slider>
          </div>
        </div>

        {/* Our Partner Section */}
        <div class="text-sm ml-3 mr-3 laptop:text-md desktop:text-lg">
          <h1 class="text-2xl mt-6 mb-3">Our Partners</h1>
          <p>
            We have a network of dedicated partners, each brining their special
            expertise and contribution. We successfully cooperate with many
            local and international partners such as KOSIGN Co., Ltd,
            government, and universities for mutual improvement.
          </p>

          <div class="mt-4">
            <div class="grid grid-row-1">
              <div class="grid grid-cols-2 laptop:grid-cols-3">
                <div class="col-span-1">
                  <ul class="bg-white rounded-lg w-30 text-gray-900 ">
                    <li class="py-2 border-b border-gray-200 w-full rounded-t-lg grid grid-rows-1">
                      Public Sector
                    </li>
                    <li class="py-2 border-b border-gray-200 w-full grid grid-rows-1">
                      Universities
                    </li>
                    <li class="py-2 border-b border-gray-200 w-full grid grid-rows-1">
                      Global Companies
                    </li>
                    <li class="py-2 border-b border-gray-200 w-full grid grid-rows-1">
                      Local Companies
                    </li>
                    <li class="py-2 w-full rounded-b-lg grid grid-rows-1">
                      Bank & Finance
                    </li>
                  </ul>
                </div>

                <div class="hidden col-span-1 laptop:col-span-2 laptop:block">
                  <div class="grid-rows-2">
                    <div class="grid grid-cols-4 ">
                      <div>
                        <img src={nipa} alt="nipa"></img>
                      </div>
                      <div>
                        <img class="px-2" src={ckcc} alt="ckcc"></img>
                      </div>
                      <div>
                        <img
                        class="px-2"
                          src={king_sejong_institute}
                          alt="king sejong institute"
                        ></img>
                      </div>
                      <div>
                        <img class="px-2" src={koica} alt="koica"></img>
                      </div>
                    </div>

                    <div class="grid grid-cols-4 px-2">
                      <div>
                        <img class="px-2" src={kosign} alt="kosign"></img>
                      </div>
                      <div>
                        <img class="px-2" src={morakot} alt="morakot"></img>
                      </div>
                      <div>
                        <img class="px-2" src={webcash} alt="webcash"></img>
                      </div>
                      <div>
                        <img class="px-2" src={WeMB} alt="WeMB"></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
    </div>
  );
}
