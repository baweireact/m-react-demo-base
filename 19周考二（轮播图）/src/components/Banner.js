import React, { Component } from 'react'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import './index.css'

let mySwiper
export default class Banner extends Component {
  handleBannerNav(index) {
    mySwiper.slideTo(index + 1, 1000)
  }

  initSwiper() {
    if (mySwiper) {
      mySwiper.destroy()
    }
    mySwiper = new Swiper('#m-banner', {
      loop: true,
      autoplay: {
        delay: 3000
      },  
      pagination: {
        el: '.swiper-pagination',
      }, 
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },               
    })
  }

  componentDidUpdate() {
    this.initSwiper()
  }

  render() {
    let {
      bannerList
    } = this.props

    let bannerDom = bannerList.map((item) => (
      <a href={item.href} key={item.id} className="swiper-slide">
        <img src={item.path} alt={item.href} className="m-swiper-img" ></img>
      </a>
    ))

    let bannerNavDom = bannerList.map((item, index) => (
      <img 
        key={item.id}
        src={item.path} 
        alt={item.href} 
        className="m-swiper-img-nav"
        onClick={this.handleBannerNav.bind(this, index)}></img>
    ))
    return (
      <div>
        <div id="m-banner" className="swiper-container">
          <div className="swiper-wrapper">
            {bannerDom}
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>          
        </div>
        <div className="m-banner-nav">
          {bannerNavDom}
        </div>
      </div>
    )
  }
}
