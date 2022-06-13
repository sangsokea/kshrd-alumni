import { Collapse } from "bootstrap";
import React from "react";
import Slider from "react-slick";

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
          <img
            src="https://api.kshrd-ite.com/api/v1/image/333c1464-eb9f-4da4-b592-a4c0149a56aa.jpeg"
            alt="9th gen image"
          ></img>
        <div>
          {/* Our Achievement Section */}
          <h1 class="text-2xl mt-6">Our Achievements</h1>
          {/* <p class="text-orange-700 -mt-5" style={{fontWeight: "1200"}}>_______</p> */}
          <div className="p-5">
            <div>
              <Slider {...settings}>
                <div>
                  <img
                    class="rounded"
                    src="https://kshrd.com.kh/static/media/director.7a1c2126.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    class="rounded"
                    src="https://kshrd.com.kh/static/media/director.7a1c2126.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    class="rounded"
                    src="https://kshrd.com.kh/static/media/director.7a1c2126.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    class="rounded"
                    src="https://kshrd.com.kh/static/media/director.7a1c2126.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    class="rounded"
                    src="https://kshrd.com.kh/static/media/director.7a1c2126.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    class="rounded"
                    src="https://kshrd.com.kh/static/media/director.7a1c2126.jpg"
                    alt=""
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>

        {/* Our Partner Section */}
        <div>
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
                <div  class="col-span-1">
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
                        <img
                          src="https://api.kshrd-ite.com/api/v1/image/3beb0547-242a-408b-96c8-7e4417d9b663.png"
                          alt="nipa"
                        ></img>
                      </div>
                      <div>
                        <img
                          src="https://api.kshrd-ite.com/api/v1/image/3beb0547-242a-408b-96c8-7e4417d9b663.png"
                          alt="nipa"
                        ></img>
                      </div>
                      <div>
                        <img
                          src="https://api.kshrd-ite.com/api/v1/image/3beb0547-242a-408b-96c8-7e4417d9b663.png"
                          alt="nipa"
                        ></img>
                      </div>
                      <div>
                        <img
                          src="https://api.kshrd-ite.com/api/v1/image/3beb0547-242a-408b-96c8-7e4417d9b663.png"
                          alt="nipa"
                        ></img>
                      </div>
                    </div>

                    <div class="grid grid-cols-4">
                      <div>
                        <img
                          src="https://api.kshrd-ite.com/api/v1/image/3beb0547-242a-408b-96c8-7e4417d9b663.png"
                          alt="nipa"
                        ></img>
                      </div>
                      <div>
                        <img
                          src="https://api.kshrd-ite.com/api/v1/image/3beb0547-242a-408b-96c8-7e4417d9b663.png"
                          alt="nipa"
                        ></img>
                      </div>
                      <div>
                        <img
                          src="https://api.kshrd-ite.com/api/v1/image/3beb0547-242a-408b-96c8-7e4417d9b663.png"
                          alt="nipa"
                        ></img>
                      </div>
                      <div>
                        <img
                          src="https://api.kshrd-ite.com/api/v1/image/3beb0547-242a-408b-96c8-7e4417d9b663.png"
                          alt="nipa"
                        ></img>
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
