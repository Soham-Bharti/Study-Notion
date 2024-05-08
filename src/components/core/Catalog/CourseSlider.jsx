import React, { useEffect, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
// import "../../.."
// Import required modules
import { FreeMode, Navigation, Pagination, Autoplay } from "swiper/modules"

// import { getAllCourses } from "../../services/operations/courseDetailsAPI"
import CourseCard from "./CourseCard"

function CourseSlider({ Courses }) {
  return (
    <>
      {Courses?.length ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={25}
          loop={true}
          navigation={true}
          pagination={
            {
              clickable: true,
            }
          } 
          modules={[FreeMode, Pagination, Navigation, Autoplay]}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
          }}
          className="max-h-[30rem] mySwiper pb-4"
          autoplay={
            {
              delay: 2500,
              disableOnInteraction: false,
            }
          }
        >
          {Courses?.map((course, i) => (
            <SwiperSlide key={i}>
              <CourseCard course={course} Height={"h-[250px]"} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-xl text-richblack-5">No Course Found</p>
      )}
    </>
  )
}

export default CourseSlider

