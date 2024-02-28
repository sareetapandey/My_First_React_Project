import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import b1 from "../../image/image1.jpg";
// import b2 from "../../image/image2.jpg";
// import b3 from "../../image/image3.png";
// import b4 from "../../image/image5.jpg";
// // import b5 from "../../image/banner-5.png";

import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { get } from "../../axios/Fetcher";
import React from "react";

const Carousel = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      const responseData = await get("products?limit=10");
      console.log("data", responseData);
      setData(responseData);
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="flex ">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="w-full h-[500px] px-0 "
        >
          <div>
            {data?.map((item) => (
              <div key={item?.id}>
                <SwiperSlide>
                  <img src={item?.image} alt="no image" />
                </SwiperSlide>
              </div>
            ))}
          </div>
        </Swiper>

        {/* <div className="w-[40%] h-[500px] px-5">
          <div>
            <a href="/">
              <img className="pb-5" src={item?.image} alt="/" />
            </a>
          </div>
          <div>
            <a href="/">
              <img src={item?.image} alt="/" />
            </a>
          </div>
        </div> */}
      </div>
    </>
  );
};
export default Carousel;
