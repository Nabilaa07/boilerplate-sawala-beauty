import Image from 'next/image'
import React, { Component } from 'react'
import Slider from 'react-slick'

export default class PreviousNextMethods extends Component {
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
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return (
      <div>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          <div key={1} className="w-full mx-auto mb-6 md:mx-0 focus:outline-none focus:ring-1 focus:ring-[#B48166]">
            <div className="flex w-full space-x-3 overflow-hidden hover:outline hover:outline-1 hover:outline-[#B48166] md:w-96">
              <Image src="/assets/s1.png" alt="" className="flex" width={120} height={120} />
              <p className="pl-5 my-10 font-medium uppercase">
                Lindsey Philips <br />
                <span className="capitalize text-sm font-normal text-[#666666] pr-4">Aktris, Singger</span>
              </p>
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

          <div key={2} className="w-full mx-auto mb-6 md:mx-0 focus:outline-none focus:ring-1 focus:ring-[#B48166]">
            <div className="flex w-full space-x-3 overflow-hidden hover:outline hover:outline-1 hover:outline-[#B48166] md:w-96">
              <Image src="/assets/s1.png" alt="" className="flex" width={120} height={120} />
              <p className="pl-5 my-10 font-medium uppercase">
                Lindsey Philips <br />
                <span className="capitalize text-sm font-normal text-[#666666] pr-4">Aktris, Singger</span>
              </p>
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

          <div key={1} className="w-full mx-auto mb-6 md:mx-0 focus:outline-none focus:ring-1 focus:ring-[#B48166]">
            <div className="flex w-full space-x-3 overflow-hidden hover:outline hover:outline-1 hover:outline-[#B48166] md:w-96">
              <Image src="/assets/s1.png" alt="" className="flex" width={120} height={120} />
              <p className="pl-5 my-10 font-medium uppercase">
                Lindsey Philips <br />
                <span className="capitalize text-sm font-normal text-[#666666] pr-4">Aktris, Singger</span>
              </p>
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
          <button className="button" onClick={this.previous}>
            Previous
          </button>
          <button className="button" onClick={this.next}>
            Next
          </button>
        </div>
      </div>
    )
  }
}
