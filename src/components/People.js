import Image from 'next/image'
import React, { Component } from 'react'
import Slider from 'react-slick'

export default class VerticalSwipeToSlide extends Component {
  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
  }
  next() {
    this.slider.slickNext()
  }
  previous() {
    this.slider.slickPrev()
  }
  render() {
    const settings = {
      // dots: true,
      infinite: true,
      slidesToShow: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 5000,
      cssEase: 'linear',
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
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          <div key={1}>
            <div className="w-full mx-auto mb-6 md:mx-0 focus:outline-none focus:ring-1 focus:ring-[#B48166]">
              <div className="flex w-full space-x-3 overflow-hidden hover:outline hover:outline-1 hover:outline-[#B48166] md:w-96">
                <Image src="/assets/s1.png" alt="" className="flex" width={120} height={120} />
                <p className="pl-5 my-10 font-medium uppercase">
                  Lindsey Philips <br />
                  <span className="capitalize text-sm font-normal text-[#666666] pr-4">Aktris, Singger</span>
                </p>
              </div>
            </div>

            <div className="w-full mx-auto mb-6 md:mx-0 focus:outline-none focus:ring-1 focus:ring-[#B48166]">
              <div className="flex w-full space-x-3 overflow-hidden hover:outline hover:outline-1 hover:outline-[#B48166] md:w-96">
                <Image src="/assets/s2.png" alt="" className="flex" width={120} height={120} />
                <p className="pl-5 my-10 font-medium uppercase">
                  Alena Botosh <br />
                  <span className="capitalize text-sm font-normal text-[#666666] pr-4">Singger, Celebgram</span>
                </p>
              </div>
            </div>

            <div className="w-full mx-auto mb-6 md:mx-0 focus:outline-none focus:ring-1 focus:ring-[#B48166]">
              <div className="flex w-full space-x-3 overflow-hidden hover:outline hover:outline-1 hover:outline-[#B48166] md:w-96">
                <Image src="/assets/s3.png" alt="" className="flex" width={120} height={120} />
                <p className="pl-5 my-10 font-medium uppercase">
                  Giana Torff <br />
                  <span className="capitalize text-sm font-normal text-[#666666] pr-4">Singer songwriter</span>
                </p>
              </div>
            </div>
          </div>

          <div key={2}>
            <div className="w-full mx-auto mb-6 md:mx-0 focus:outline-none focus:ring-1 focus:ring-[#B48166]">
              <div className="flex w-full space-x-3 overflow-hidden hover:outline hover:outline-1 hover:outline-[#B48166] md:w-96">
                <Image src="/assets/s1.png" alt="" className="flex" width={120} height={120} />
                <p className="pl-5 my-10 font-medium uppercase">
                  Lindsey Philips <br />
                  <span className="capitalize text-sm font-normal text-[#666666] pr-4">Aktris, Singger</span>
                </p>
              </div>
            </div>

            <div className="w-full mx-auto mb-6 md:mx-0 focus:outline-none focus:ring-1 focus:ring-[#B48166]">
              <div className="flex w-full space-x-3 overflow-hidden hover:outline hover:outline-1 hover:outline-[#B48166] md:w-96">
                <Image src="/assets/s2.png" alt="" className="flex" width={120} height={120} />
                <p className="pl-5 my-10 font-medium uppercase">
                  Alena Botosh <br />
                  <span className="capitalize text-sm font-normal text-[#666666] pr-4">Singger, Celebgram</span>
                </p>
              </div>
            </div>

            <div className="w-full mx-auto mb-6 md:mx-0 focus:outline-none focus:ring-1 focus:ring-[#B48166]">
              <div className="flex w-full space-x-3 overflow-hidden hover:outline hover:outline-1 hover:outline-[#B48166] md:w-96">
                <Image src="/assets/s3.png" alt="" className="flex" width={120} height={120} />
                <p className="pl-5 my-10 font-medium uppercase">
                  Giana Torff <br />
                  <span className="capitalize text-sm font-normal text-[#666666] pr-4">Singer songwriter</span>
                </p>
              </div>
            </div>
          </div>

          <div key={3}>
            <div className="w-full mx-auto mb-6 md:mx-0 focus:outline-none focus:ring-1 focus:ring-[#B48166]">
              <div className="flex w-full space-x-3 overflow-hidden hover:outline hover:outline-1 hover:outline-[#B48166] md:w-96">
                <Image src="/assets/s1.png" alt="" className="flex" width={120} height={120} />
                <p className="pl-5 my-10 font-medium uppercase">
                  Lindsey Philips <br />
                  <span className="capitalize text-sm font-normal text-[#666666] pr-4">Aktris, Singger</span>
                </p>
              </div>
            </div>

            <div className="w-full mx-auto mb-6 md:mx-0 focus:outline-none focus:ring-1 focus:ring-[#B48166]">
              <div className="flex w-full space-x-3 overflow-hidden hover:outline hover:outline-1 hover:outline-[#B48166] md:w-96">
                <Image src="/assets/s2.png" alt="" className="flex" width={120} height={120} />
                <p className="pl-5 my-10 font-medium uppercase">
                  Alena Botosh <br />
                  <span className="capitalize text-sm font-normal text-[#666666] pr-4">Singger, Celebgram</span>
                </p>
              </div>
            </div>

            <div className="w-full mx-auto mb-6 md:mx-0 focus:outline-none focus:ring-1 focus:ring-[#B48166]">
              <div className="flex w-full space-x-3 overflow-hidden hover:outline hover:outline-1 hover:outline-[#B48166] md:w-96">
                <Image src="/assets/s3.png" alt="" className="flex" width={120} height={120} />
                <p className="pl-5 my-10 font-medium uppercase">
                  Giana Torff <br />
                  <span className="capitalize text-sm font-normal text-[#666666] pr-4">Singer songwriter</span>
                </p>
              </div>
            </div>
          </div>
        </Slider>
        <div style={{ textAlign: 'center' }}>
          <div className="flex w-20 col-span-4 gap-4 mt-3 mb-24">
            <button className="button" onClick={this.previous}>
              <Image src="/assets/panah-kiri.png" alt="" className="w-full" width={170} height={70} />
            </button>
            <button className="button" onClick={this.next}>
              <Image src="/assets/panah-kanan.png" alt="" className="w-full" width={170} height={70} />
            </button>
          </div>
        </div>
      </div>
    )
  }
}
