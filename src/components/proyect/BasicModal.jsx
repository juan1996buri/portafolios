import * as React from "react";
import Modal from "@mui/material/Modal";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";

export default function BasicModal({ open, setOpen, proyect }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <div className="absolute top-1/2 left-1/2 lg:w-7/12 w-[95%]  transform -translate-x-1/2 -translate-y-1/2 bg-white outline-none  ">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper">
            <div className=" flex flex-col justify-center items-center bg-red-500">
              {proyect.information.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="flex flex-col justify-center items-center  py-2">
                  <img src={item.image} alt="" className="h-72 " />
                  <p className="font-sansSerif font-semibold">
                    {item.description}
                  </p>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </Modal>
    </div>
  );
}
