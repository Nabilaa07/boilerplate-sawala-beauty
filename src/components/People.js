import Image from 'next/image'
import React, { Component } from 'react'
import Slider from 'react-slick'

export default class VerticalSwipeToSlide extends Component {
  render() {
    const settings = {
      // dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      swipeToSlide: true,
      beforeChange: function (currentSlide, nextSlide) {
        console.log('before change', currentSlide, nextSlide)
      },
      afterChange: function (currentSlide) {
        console.log('after change', currentSlide)
      }
    }
    return (
      <div>
        <Slider {...settings}>
          <div className="w-full px-6 mx-auto lg:-ml-6 mb-6 md:mx-0">
            <div className="flex w-full space-x-3 overflow-hidden hover:outline hover:outline-1 hover:outline-[#B48166] md:w-96">
              <Image src="/assets/s1.png" alt="" className="flex" width={120} height={120} />
              <p className="pl-5 my-10 font-medium uppercase">
                Lindsey Philips <br />
                <span className="capitalize text-sm font-normal text-[#666666] pr-4">Aktris, Singger</span>
              </p>
            </div>
          </div>

          <div className="w-full px-6 mx-auto lg:-ml-6  mb-6  md:mx-0">
            <div className="flex w-full space-x-3 overflow-hidden hover:outline hover:outline-1 hover:outline-[#B48166] md:w-96">
              <Image src="/assets/s2.png" alt="" className="flex" width={120} height={120} />
              <p className="pl-5 my-10 font-medium uppercase">
                Alena Botosh <br />
                <span className="capitalize text-sm font-normal text-[#666666] pr-4">Singger, Celebgram</span>
              </p>
            </div>
          </div>

          <div className="w-full px-6 mx-auto lg:-ml-6 md:mx-0  mb-6 ">
            <div className="flex w-full Space-x-3 overflow-hidden hover:outline hover:outline-1 hover:outline-[#B48166] md:w-96">
              <Image src="/assets/s3.png" alt="" className="flex" width={120} height={120} />
              <p className="pl-5 my-10 font-medium uppercase">
                Giana Torff <br />
                <span className="capitalize text-sm font-normal text-[#666666] pr-4">Singer songwriter</span>
              </p>
            </div>
          </div>

          <div className="w-full px-6 mx-auto lg:-ml-6 mb-6 md:mx-0">
            <div className="flex w-full space-x-3 overflow-hidden hover:outline hover:outline-1 hover:outline-[#B48166] md:w-96">
              <Image src="/assets/s1.png" alt="" className="flex" width={120} height={120} />
              <p className="pl-5 my-10 font-medium uppercase">
                Lindsey Philips <br />
                <span className="capitalize text-sm font-normal text-[#666666] pr-4">Aktris, Singger</span>
              </p>
            </div>
          </div>

          <div className="w-full px-6 mx-auto lg:-ml-6 md:mx-0  mb-6 ">
            <div className="flex w-full Space-x-3 overflow-hidden hover:outline hover:outline-1 hover:outline-[#B48166] md:w-96">
              <Image src="/assets/s2.png" alt="" className="flex" width={120} height={120} />
              <p className="pl-5 my-10 font-medium uppercase">
                Alena Botosh <br />
                <span className="capitalize text-sm font-normal text-[#666666] pr-4">Singger, Celebgram</span>
              </p>
            </div>
          </div>

          <div className="w-full px-6 mx-auto lg:-ml-6 md:mx-0  mb-6 ">
            <div className="flex w-full space-x-3 overflow-hidden hover:outline hover:outline-1 hover:outline-[#B48166] md:w-96">
              <Image src="/assets/s3.png" alt="" className="flex" width={120} height={120} />
              <p className="pl-5 my-10 font-medium uppercase">
                Giana Torff <br />
                <span className="capitalize text-sm font-normal text-[#666666] pr-4">Singer songwriter</span>
              </p>
            </div>
          </div>
        </Slider>
      </div>
    )
  }
}
