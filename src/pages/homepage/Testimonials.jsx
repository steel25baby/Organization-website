import React from "react";
import avatarIImg from "../../assets/1.jpg";
import avatarIIImg from "../../assets/2.jpg";
import avatarIIIImg from "../../assets/3.jpg";
import avatarIVImg from "../../assets/4.png";
import avatarVImg from "../../assets/5.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Correct way to import Swiper modules
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Optional, if using navigation arrows

// Import custom CSS (optional, adjust path as needed)
// import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section>
      <div className="main">
        <div className="head-p">
          <span style={{ paddingRight: "5px" }}>GET AN</span>
          <span style={{ color: "#1D8BA0" }}> OPINION</span>
        </div>
        <div className="head">TESTIMONIALS</div>

        <Swiper
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          navigation={true}
          modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
          effect="coverflow"
          coverflowEffect={{
            rotate: 10,
            stretch: 50,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 150 },
          }}
        >
          {[avatarIImg, avatarIIImg, avatarIIIImg, avatarIVImg, avatarVImg].map((avatar, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div style={{ padding: "0 20px" }}>
                <div className="testimonials-profile-circle">
                  <img
                    src={avatar}
                    alt={`testimonial-avatar-${index + 1}`}
                    className="testimonial-avatar"
                    loading="lazy"
                  />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Temporibus suscipit deserunt reprehenderit harum tenetur placeat.
                </p>
                <h6 className="review-by">- Lorem ipsum dolor sit amet.</h6>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
