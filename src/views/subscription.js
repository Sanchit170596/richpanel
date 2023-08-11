import React from 'react'

import { Helmet } from 'react-helmet'

import './subscription.css'

const Subscription = (props) => {
  function handlem(e){
    var mon = document.getElementById("Monthly");
    var yr = document.getElementById("Yearly");
    yr.style.color = "#FFFFFF";
    yr.style.backgroundColor = "#00000000";
    mon.style.color = "#1E4C91";
    mon.style.backgroundColor = "#FFFFFF";
    document.getElementById("mp").textContent = 100;
    document.getElementById("bp").textContent = 200;
    document.getElementById("sp").textContent = 500;
    document.getElementById("pp").textContent = 700;
    document.getElementById("t1").textContent = "Monthly Price";
  }
  function handley(e){
    var mon = document.getElementById("Monthly");
    var yr = document.getElementById("Yearly");
    mon.style.color = "#FFFFFF";
    mon.style.backgroundColor = "#00000000";
    yr.style.color = "#1E4C91";
    yr.style.backgroundColor = "#FFFFFF";
    document.getElementById("mp").textContent = 1000;
    document.getElementById("bp").textContent = 2000;
    document.getElementById("sp").textContent = 5000;
    document.getElementById("pp").textContent = 7000;
    document.getElementById("t1").textContent = "Monthly Price";
  }
  function handley(e){
    var mon = document.getElementById("Monthly");
    var yr = document.getElementById("Yearly");
    mon.style.color = "#FFFFFF";
    mon.style.backgroundColor = "#00000000";
    yr.style.color = "#1E4C91";
    yr.style.backgroundColor = "#FFFFFF";
    document.getElementById("mp").textContent = 1000;
    document.getElementById("bp").textContent = 2000;
    document.getElementById("sp").textContent = 5000;
    document.getElementById("pp").textContent = 7000;
    document.getElementById("t1").textContent = "Yearly Price";
  }
  function mobile(e){
    document.getElementById("t2").style.color="#1E4C91";
    document.getElementById("t6").style.color="#1E4C91";
    document.getElementById("t10").style.color="#1E4C91";
    document.getElementById("t11").style.color="#1E4C91";
    document.getElementById("mp").style.color="#1E4C91";
    document.getElementById("bp").style.color="#595959";
    document.getElementById("sp").style.color="#595959";
    document.getElementById("pp").style.color="#595959";
    document.getElementById("t3").style.color="#595959";
    document.getElementById("t4").style.color="#595959";
    document.getElementById("t5").style.color="#595959";
    document.getElementById("t7").style.color="#595959";
    document.getElementById("t8").style.color="#595959";
    document.getElementById("t9").style.color="#595959";
    document.getElementById("t12").style.color="#595959";
    document.getElementById("t13").style.color="#595959";
    document.getElementById("t14").style.color="#595959";
    document.getElementById("t15").style.color="#595959";
    document.getElementById("t16").style.color="#595959";
    document.getElementById("t17").style.color="#595959";
    document.getElementById("t18").style.color="#595959";
    document.getElementById("t19").style.color="#595959";
    document.getElementById("t20").style.color="#595959";
    document.getElementById("t21").style.color="#595959";
    document.getElementById("a4").style.visibility='hidden';
    document.getElementById("a2").style.visibility='hidden';
    document.getElementById("a3").style.visibility='hidden';
    document.getElementById("a1").style.visibility='visible';
    document.getElementById("b4").style.backgroundColor="#6883A6";
    document.getElementById("b2").style.backgroundColor="#6883A6";
    document.getElementById("b3").style.backgroundColor="#6883A6";
    document.getElementById("b1").style.backgroundColor="#1E4C91";
  }
  function basic(e){
    document.getElementById("t2").style.color="#595959";
    document.getElementById("t6").style.color="#595959";
    document.getElementById("t10").style.color="#595959";
    document.getElementById("t11").style.color="#595959";
    document.getElementById("mp").style.color="#595959";
    document.getElementById("bp").style.color="#1E4C91";
    document.getElementById("sp").style.color="#595959";
    document.getElementById("pp").style.color="#595959";
    document.getElementById("t3").style.color="#1E4C91";
    document.getElementById("t4").style.color="#595959";
    document.getElementById("t5").style.color="#595959";
    document.getElementById("t7").style.color="#1E4C91";
    document.getElementById("t8").style.color="#595959";
    document.getElementById("t9").style.color="#595959";
    document.getElementById("t12").style.color="#1E4C91";
    document.getElementById("t13").style.color="#1E4C91";
    document.getElementById("t14").style.color="#595959";
    document.getElementById("t15").style.color="#595959";
    document.getElementById("t16").style.color="#595959";
    document.getElementById("t17").style.color="#595959";
    document.getElementById("t18").style.color="#595959";
    document.getElementById("t19").style.color="#595959";
    document.getElementById("t20").style.color="#595959";
    document.getElementById("t21").style.color="#595959";
    document.getElementById("a1").style.visibility='hidden';
    document.getElementById("a4").style.visibility='hidden';
    document.getElementById("a3").style.visibility='hidden';
    document.getElementById("a2").style.visibility='visible';
    document.getElementById("b1").style.backgroundColor="#6883A6";
    document.getElementById("b4").style.backgroundColor="#6883A6";
    document.getElementById("b3").style.backgroundColor="#6883A6";
    document.getElementById("b2").style.backgroundColor="#1E4C91";
  }
  function standard(e){
    document.getElementById("t2").style.color="#595959";
    document.getElementById("t6").style.color="#595959";
    document.getElementById("t10").style.color="#595959";
    document.getElementById("t11").style.color="#595959";
    document.getElementById("mp").style.color="#595959";
    document.getElementById("bp").style.color="#595959";
    document.getElementById("sp").style.color="#1E4C91";
    document.getElementById("pp").style.color="#595959";
    document.getElementById("t3").style.color="#595959";
    document.getElementById("t4").style.color="#1E4C91";
    document.getElementById("t5").style.color="#595959";
    document.getElementById("t7").style.color="#595959";
    document.getElementById("t8").style.color="#1E4C91";
    document.getElementById("t9").style.color="#595959";
    document.getElementById("t12").style.color="#595959";
    document.getElementById("t13").style.color="#595959";
    document.getElementById("t14").style.color="#1E4C91";
    document.getElementById("t15").style.color="#1E4C91";
    document.getElementById("t16").style.color="#1E4C91";
    document.getElementById("t17").style.color="#1E4C91";
    document.getElementById("t18").style.color="#595959";
    document.getElementById("t19").style.color="#595959";
    document.getElementById("t20").style.color="#595959";
    document.getElementById("t21").style.color="#595959";
    document.getElementById("a1").style.visibility='hidden';
    document.getElementById("a2").style.visibility='hidden';
    document.getElementById("a4").style.visibility='hidden';
    document.getElementById("a3").style.visibility='visible';
    document.getElementById("b1").style.backgroundColor="#6883A6";
    document.getElementById("b2").style.backgroundColor="#6883A6";
    document.getElementById("b4").style.backgroundColor="#6883A6";
    document.getElementById("b3").style.backgroundColor="#1E4C91";
  }
  function premium(e){
    document.getElementById("t2").style.color="#595959";
    document.getElementById("t6").style.color="#595959";
    document.getElementById("t10").style.color="#595959";
    document.getElementById("t11").style.color="#595959";
    document.getElementById("mp").style.color="#595959";
    document.getElementById("bp").style.color="#595959";
    document.getElementById("sp").style.color="#595959";
    document.getElementById("pp").style.color="#1E4C91";
    document.getElementById("t3").style.color="#595959";
    document.getElementById("t4").style.color="#595959";
    document.getElementById("t5").style.color="#1E4C91";
    document.getElementById("t7").style.color="#595959";
    document.getElementById("t8").style.color="#595959";
    document.getElementById("t9").style.color="#1E4C91";
    document.getElementById("t12").style.color="#595959";
    document.getElementById("t13").style.color="#595959";
    document.getElementById("t14").style.color="#595959";
    document.getElementById("t15").style.color="#595959";
    document.getElementById("t16").style.color="#595959";
    document.getElementById("t17").style.color="#595959";
    document.getElementById("t18").style.color="#1E4C91";
    document.getElementById("t19").style.color="#1E4C91";
    document.getElementById("t20").style.color="#1E4C91";
    document.getElementById("t21").style.color="#1E4C91";
    document.getElementById("a1").style.visibility='hidden';
    document.getElementById("a2").style.visibility='hidden';
    document.getElementById("a3").style.visibility='hidden';
    document.getElementById("a4").style.visibility='visible';
    document.getElementById("b1").style.backgroundColor="#6883A6";
    document.getElementById("b2").style.backgroundColor="#6883A6";
    document.getElementById("b3").style.backgroundColor="#6883A6";
    document.getElementById("b4").style.backgroundColor="#1E4C91";
  }
  return (
    <div className="subscription-container">
      <Helmet>
        <title>Subscription - Active Online Software Page</title>
        <meta
          property="og:title"
          content="Subscription - Active Online Software Page"
        />
      </Helmet>
      <h2 className="subscription-text">Choose the right plan for you</h2>
      <div className="subscription-mobile" onClick={(e)=>mobile(e)} id="b1">
        <span className="subscription-text01">Mobile</span>
      </div>
      <div className="subscription-container01" id="a1"></div>
      <div className="subscription-basic" onClick={(e)=>basic(e)} id="b2">
        <span className="subscription-text02">Basic</span>
      </div>
      <div className="subscription-container02" id="a2"></div>
      <div className="subscription-standard" onClick={(e)=>standard(e)} id="b3">
        <span className="subscription-text03">Standard</span>
      </div>
      <div className="subscription-container03" id="a3"></div>
      <div className="subscription-premium" onClick={(e)=>premium(e)} id="b4">
        <span className="subscription-text04">Premium</span>
      </div>
      <div className="subscription-container04" id="a4"></div>
      <div className="subscription-container05">
        <button type="button" className="subscription-monthly button" id="Monthly" onClick={(e)=>handlem(e)}>
          Monthly
        </button>
        <button type="button" className="subscription-yearly button" id="Yearly" onClick={(e)=>handley(e)}>
          Yearly
        </button>
      </div>
      <div className="subscription-container06">
        <span className="subscription-text05" id="t1">Monthly Price</span>
        <img
          alt="image"
          src="/logos/rupee%20(1)-200h.png"
          className="subscription-image"
        />
        <span className="subscription-mobile-price" id="mp">100</span>
        <img
          alt="image"
          src="/logos/rupee%20(1)-200h.png"
          className="subscription-image1"
        />
        <span className="subscription-basic-price" id="bp">200</span>
        <img
          alt="image"
          src="/logos/rupee%20(1)-200h.png"
          className="subscription-image2"
        />
        <span className="subscription-standards-price" id="sp">500</span>
        <img
          alt="image"
          src="/logos/rupee%20(1)-200h.png"
          className="subscription-image3"
        />
        <span className="subscription-premium-price" id="pp">700</span>
      </div>
      <div className="subscription-container07">
        <span className="subscription-text06">Video Quality</span>
        <span className="subscription-mobile-quality" id="t2">Good</span>
        <span className="subscription-basic-quality" id="t3">Good</span>
        <span className="subscription-standards-quality" id="t4">Better</span>
        <span className="subscription-premium-quality" id="t5">Best</span>
      </div>
      <div className="subscription-container08">
        <span className="subscription-text07">Resolution</span>
        <span className="subscription-mobile-quality1" id="t6">480p</span>
        <span className="subscription-basic-quality1" id="t7">480p</span>
        <span className="subscription-standards-quality1" id="t8">1080p</span>
        <span className="subscription-premium-quality1" id="t9">4K+HDR</span>
      </div>
      <div className="subscription-container09">
        <span className="subscription-text08">
          Devices you can use to watch
        </span>
        <span className="subscription-text09" id="t10">Phone</span>
        <span className="subscription-text10" id="t11">Tablet</span>
        <span className="subscription-text11" id="t12">Phone</span>
        <span className="subscription-text12" id="t13">Tablet</span>
        <span className="subscription-text13" id="t14">Phone</span>
        <span className="subscription-text14" id="t15">Tablet</span>
        <span className="subscription-text15" id="t16">Computer</span>
        <span className="subscription-text16" id="t17">TV</span>
        <span className="subscription-text17" id="t18">Phone</span>
        <span className="subscription-text18" id="t19">Tablet</span>
        <span className="subscription-text19" id="t20">Computer</span>
        <span className="subscription-text20" id="t21">TV</span>
      </div>
      <Link to="/payment">
      <button type="button" className="subscription-button button">
        Next
      </button>
      </Link>
    </div>
  )
}

export default Subscription
