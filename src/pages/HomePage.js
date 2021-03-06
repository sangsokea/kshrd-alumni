import React from "react";
import Slider from "react-slick";
import homepage from "../commons/images/Cover_homepage.jpeg";
import { colors } from "../commons/colors/colors";

// card slides
import director_picture from "../commons/images/card-slide/director.7a1c2126.jpg";
import graduated_student_2 from "../commons/images/card-slide/graduated student(2).jpg";
import graduated_student from "../commons/images/card-slide/graduated student.jpg";
import event from "../commons/images/card-slide/event.jpg";
import sport from "../commons/images/card-slide/sport.jpg";
import closing from "../commons/images/card-slide/closing.jpg";

// partners

import PartnerSideComponent from "../components/partner-section/PartnerSideComponent";

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
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetCente);
export default function HomePage() {
  const scrollRef = React.useRef(null);
  const executeScroll = () => scrollToRef(scrollRef);

  React.useEffect(() => {
    executeScroll();
  }, []);
  return (
    <div ref={scrollRef} className="container mx-auto mt-3">
      <section className="text-sm body-font font-maven laptop:text-md">
        <img src={homepage} alt="9th gen image"></img>
        <div className="hidden laptop:block">
          {/* Our Achievement Section */}
          <h1 className="mt-5 mb-5 text-2xl font-bold" style={textStyle}>Our Achievements</h1>

          <div>
            <Slider {...settings}>
              <div className="px-2">
                <img
                  className="rounded-md"
                  src={director_picture}
                  alt="director's picture"
                />
              </div>

              <div className="px-2">
                <img
                  className="rounded-md "
                  src={graduated_student_2}
                  alt="alumni archievement"
                />
              </div>

              <div className="px-2">
                <img className="rounded-md " src={event} alt="other event" />
              </div>
              <div className="px-2">
                <img
                  className="rounded-md "
                  src={graduated_student}
                  alt="graduated student"
                />
              </div>
              <div className="px-2">
                <img className="rounded-md " src={sport} alt="sport event" />
              </div>
              <div className="px-2">
                <img className="rounded-md " src={closing} alt="closing day" />
              </div>
            </Slider>
          </div>
        </div>

        {/* Our Partner Section */}
        <div className="ml-3 mr-3 text-sm laptop:text-md desktop:text-lg">
          <h1 className="mt-6 mb-3 text-2xl font-bold" style={textStyle}>Our Partners</h1>
          <p>
            We have a network of dedicated partners, each brining their special
            expertise and contribution. We successfully cooperate with many
            local and international partners such as KOSIGN Co., Ltd,
            government, and universities for mutual improvement.
          </p>

          <div className="mt-4">
            <PartnerSideComponent />
          </div>
        </div>
      </section>
    </div>
  );
}

const textStyle = {
  color: colors.content
}