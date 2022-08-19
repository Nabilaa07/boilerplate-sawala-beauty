import tw, { styled } from 'twin.macro'
import Image from 'next/image'
import React, { Fragment, useRef } from 'react'
import Slider, { Settings } from 'react-slick'

// export const VerticalSwipeToSlide2 = () => {

//   return (
//     <div>
//         <Slider ref={(c) => (this.slider = c)} {...settings}>
//           <div key={1}>
//             <div className="w-full mx-auto mb-6 md:mx-0 focus:outline-none focus:ring-1 focus:ring-[#B48166]">
//               <div className="flex w-full space-x-3 overflow-hidden hover:outline hover:outline-1 hover:outline-[#B48166] md:w-96">
//                 <Image src="/assets/s1.png" alt="" className="flex" width={120} height={120} />
//                 <p className="pl-5 my-10 font-medium uppercase">
//                   Lindsey Philips <br />
//                   <span className="capitalize text-sm font-normal text-[#666666] pr-4">Aktris, Singger</span>
//                 </p>
//               </div>
//             </div>

//             <div className="w-full mx-auto mb-6 md:mx-0 focus:outline-none focus:ring-1 focus:ring-[#B48166]">
//               <div className="flex w-full space-x-3 overflow-hidden hover:outline hover:outline-1 hover:outline-[#B48166] md:w-96">
//                 <Image src="/assets/s2.png" alt="" className="flex" width={120} height={120} />
//                 <p className="pl-5 my-10 font-medium uppercase">
//                   Alena Botosh <br />
//                   <span className="capitalize text-sm font-normal text-[#666666] pr-4">Singger, Celebgram</span>
//                 </p>
//               </div>
//             </div>

//             <div className="w-full mx-auto mb-6 md:mx-0 focus:outline-none focus:ring-1 focus:ring-[#B48166]">
//               <div className="flex w-full space-x-3 overflow-hidden hover:outline hover:outline-1 hover:outline-[#B48166] md:w-96">
//                 <Image src="/assets/s3.png" alt="" className="flex" width={120} height={120} />
//                 <p className="pl-5 my-10 font-medium uppercase">
//                   Giana Torff <br />
//                   <span className="capitalize text-sm font-normal text-[#666666] pr-4">Singer songwriter</span>
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div key={2}>
//             <div className="w-full mx-auto mb-6 md:mx-0 focus:outline-none focus:ring-1 focus:ring-[#B48166]">
//               <div className="flex w-full space-x-3 overflow-hidden hover:outline hover:outline-1 hover:outline-[#B48166] md:w-96">
//                 <Image src="/assets/s1.png" alt="" className="flex" width={120} height={120} />
//                 <p className="pl-5 my-10 font-medium uppercase">
//                   Lindsey Philips <br />
//                   <span className="capitalize text-sm font-normal text-[#666666] pr-4">Aktris, Singger</span>
//                 </p>
//               </div>
//             </div>

//             <div className="w-full mx-auto mb-6 md:mx-0 focus:outline-none focus:ring-1 focus:ring-[#B48166]">
//               <div className="flex w-full space-x-3 overflow-hidden hover:outline hover:outline-1 hover:outline-[#B48166] md:w-96">
//                 <Image src="/assets/s2.png" alt="" className="flex" width={120} height={120} />
//                 <p className="pl-5 my-10 font-medium uppercase">
//                   Alena Botosh <br />
//                   <span className="capitalize text-sm font-normal text-[#666666] pr-4">Singger, Celebgram</span>
//                 </p>
//               </div>
//             </div>

//             <div className="w-full mx-auto mb-6 md:mx-0 focus:outline-none focus:ring-1 focus:ring-[#B48166]">
//               <div className="flex w-full space-x-3 overflow-hidden hover:outline hover:outline-1 hover:outline-[#B48166] md:w-96">
//                 <Image src="/assets/s3.png" alt="" className="flex" width={120} height={120} />
//                 <p className="pl-5 my-10 font-medium uppercase">
//                   Giana Torff <br />
//                   <span className="capitalize text-sm font-normal text-[#666666] pr-4">Singer songwriter</span>
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div key={3}>
//             <div className="w-full mx-auto mb-6 md:mx-0 focus:outline-none focus:ring-1 focus:ring-[#B48166]">
//               <div className="flex w-full space-x-3 overflow-hidden hover:outline hover:outline-1 hover:outline-[#B48166] md:w-96">
//                 <Image src="/assets/s1.png" alt="" className="flex" width={120} height={120} />
//                 <p className="pl-5 my-10 font-medium uppercase">
//                   Lindsey Philips <br />
//                   <span className="capitalize text-sm font-normal text-[#666666] pr-4">Aktris, Singger</span>
//                 </p>
//               </div>
//             </div>

//             <div className="w-full mx-auto mb-6 md:mx-0 focus:outline-none focus:ring-1 focus:ring-[#B48166]">
//               <div className="flex w-full space-x-3 overflow-hidden hover:outline hover:outline-1 hover:outline-[#B48166] md:w-96">
//                 <Image src="/assets/s2.png" alt="" className="flex" width={120} height={120} />
//                 <p className="pl-5 my-10 font-medium uppercase">
//                   Alena Botosh <br />
//                   <span className="capitalize text-sm font-normal text-[#666666] pr-4">Singger, Celebgram</span>
//                 </p>
//               </div>
//             </div>

//             <div className="w-full mx-auto mb-6 md:mx-0 focus:outline-none focus:ring-1 focus:ring-[#B48166]">
//               <div className="flex w-full space-x-3 overflow-hidden hover:outline hover:outline-1 hover:outline-[#B48166] md:w-96">
//                 <Image src="/assets/s3.png" alt="" className="flex" width={120} height={120} />
//                 <p className="pl-5 my-10 font-medium uppercase">
//                   Giana Torff <br />
//                   <span className="capitalize text-sm font-normal text-[#666666] pr-4">Singer songwriter</span>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </Slider>
//         <div style={{ textAlign: 'center' }}>
//           <div className="flex w-20 col-span-4 gap-4 mt-3 mb-24">
//             <button className="button" onClick={this.previous}>
//               <Image src="/assets/panah-kiri.png" alt="" className="w-full" width={170} height={70} />
//             </button>
//             <button className="button" onClick={this.next}>
//               <Image src="/assets/panah-kanan.png" alt="" className="w-full" width={170} height={70} />
//             </button>
//           </div>
//         </div>
//       </div>
//   )
// }
const WrapperSlider = styled.div`
  ${tw`relative`}
  .slick-slider {
    overflow: hidden;
  }
`
export const SLiderHome = () => {
  const setting: Settings = {
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    rows: 3,
    slidesPerRow: 1
  }
  const sliderRef = useRef<any>(null)
  const gotoNext = () => {
    sliderRef.current.slickNext()
  }
  const gotoPrev = () => {
    sliderRef.current.slickPrev()
  }
  return (
    <Fragment>
      <WrapperSlider>
        <Slider {...setting} ref={sliderRef}>
          {[...Array(10)].map(() => (
            <div className="w-full h-32" key={Math.random()}>
              <div className="w-full mx-auto mb-6 md:mx-0 focus:outline-none focus:ring-1 focus:ring-[#B48166]">
                <div className="flex w-full space-x-3 overflow-hidden hover:outline hover:outline-1 hover:outline-[#B48166] md:w-96">
                  <Image src="/assets/s1.png" alt="" className="flex" width={120} height={120} />
                  <p className="pl-5 my-10 font-medium uppercase">
                    Lindsey Philips <br />
                    <span className="capitalize text-sm font-normal text-[#666666] pr-4">Aktris, Singger</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </WrapperSlider>
      <div tw="w-full flex space-x-3">
        <div className="flex w-20 col-span-4 gap-4 mt-3 mb-24">
          <button className="button" onClick={() => gotoPrev()}>
            <Image src="/assets/panah-kiri.png" alt="" className="w-full" width={170} height={70} />
          </button>
          <button className="button" onClick={() => gotoNext()}>
            <Image src="/assets/panah-kanan.png" alt="" className="w-full" width={170} height={70} />
          </button>
        </div>
      </div>
    </Fragment>
  )
}
