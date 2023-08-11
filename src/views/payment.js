import React from 'react'

import { Helmet } from 'react-helmet'

import './payment.css'

const Payment = (props) => {
  return (
    <div className="payment-container">
      <Helmet>
        <title>Payment - Active Online Software Page</title>
        <meta
          property="og:title"
          content="Payment - Active Online Software Page"
        />
      </Helmet>
      <div className="payment-container1">
        <span className="payment-account">Complete Payment</span>
        <span className="payment-text">
          Enter your credit or debit card details below
        </span>
        <button type="submit" className="payment-button button">
          Confirm Payment
        </button>
        <input
          type="text"
          placeholder="Card Number"
          className="payment-textinput input"
        />
        <div className="payment-container2">
          <span className="payment-text1">Order Summary</span>
          <span className="payment-text2">Plan Name</span>
          <span className="payment-text3">Plan Price</span>
          <span className="payment-text4">Mobile</span>
          <span className="payment-text5">100</span>
          <div className="payment-container3"></div>
          <div className="payment-container4"></div>
          <span className="payment-text6">Billing Cycle</span>
          <span className="payment-text7">Monthly</span>
          <div className="payment-container5"></div>
        </div>
      </div>
    </div>
  )
}

export default Payment
