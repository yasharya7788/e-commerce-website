import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform that allows businesses and individuals to buy and sell products or services over the internet. It provides a seamless shopping experience, enabling customers to browse products, add them to their cart, make secure payments, and track their orders—all from the comfort of their homes.</p>
            <p>Modern e-commerce websites include features like product search, customer reviews, personalized recommendations, and multiple payment options, making online shopping easy and convenient.</p>
        </div>
    </div>
  )
}

export default DescriptionBox