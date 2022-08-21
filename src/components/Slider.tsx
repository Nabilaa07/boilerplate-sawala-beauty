import React, { Component } from 'react'
import Slider from 'react-slick'
import Button from './Button'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      cssEase: 'linear'
    }
    return (
      <div>
        <Slider {...settings}>
          <div className="py-24 bg-center bg-no-repeat bg-1">
            <div className="text-5xl font-bold text-center text-white uppercase">
              <p>30% OFF</p>
              <p>For All Product</p>
              <p>Serum</p>
            </div>
            <div className="justify-center"></div>
            <Button children={'SHOP NOW'} />
          </div>
          <div className="py-24 bg-center bg-no-repeat rec-1">
            <div className="text-5xl font-bold text-center text-white uppercase">
              <p>30% OFF</p>
              <p>For All Product</p>
              <p>Serum</p>
            </div>
            <div className="justify-center"></div>
            <Button children={'SHOP NOW'} />
          </div>
          <div className="py-24 bg-center bg-no-repeat rec-2">
            <div className="text-5xl font-bold text-center text-white uppercase">
              <p>30% OFF</p>
              <p>For All Product</p>
              <p>Serum</p>
            </div>
            <div className="justify-center"></div>
            <Button children={'SHOP NOW'} />
          </div>
          <div className="py-24 bg-center bg-no-repeat rec-3">
            <div className="text-5xl font-bold text-center text-white uppercase">
              <p>30% OFF</p>
              <p>For All Product</p>
              <p>Serum</p>
            </div>
            <div className="justify-center"></div>
            <Button children={'SHOP NOW'} />
          </div>
          <div className="py-24 bg-center bg-no-repeat rec-4">
            <div className="text-5xl font-bold text-center text-white uppercase">
              <p>30% OFF</p>
              <p>For All Product</p>
              <p>Serum</p>
            </div>
            <div className="justify-center"></div>
            <Button children={'SHOP NOW'} />
          </div>
        </Slider>
      </div>
    )
  }
}
