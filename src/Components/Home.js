import React from "react";
import stoomImg from "../images/bg_img.svg";
import "./HomeStyle.css";
export default function Home() {
  return (
    <>
      <div className="complete_container">
        <div className="main_logo">
          <img className="stoom_image" src={stoomImg} alt="" />
        </div>
        <div className="content_div">
          <p className="english_text language_para">
            <p className="p_l1_p1 para_line"> Site is under construction,</p>
            <p className="p_l1_p2 para_line">
              We take projects offline via call :&nbsp;
              <a href="tel:+91-8980820097" className="clickable_numbers">
                +91 89808 20097
              </a>
              &nbsp;/ whatsapp :&nbsp;
              <a
                href="https://wa.me/+91-9408997494"
                target="_blank"
                className="clickable_numbers"
                rel="noopener noreferrer"
              >
                +91 94089 97494
              </a>
              . 🤘🏻
            </p>
          </p>
          <p className="gujarati_text language_para">
            <p className="p_l2_p1 para_line">
              વેબસાઈટનું કામ પૂર જોશમાં ચાલી રહ્યું છે,
            </p>
            <p className="p_l2_p2 para_line">
              હાલમાં પ્રોજેક્ટ/કામ આપવા કોલ :&nbsp;
              <a href="tel:+91-8980820097" className="clickable_numbers">
                +91 89808 20097
              </a>
              / વોટ્સએપ :&nbsp;
              <a
                href="https://wa.me/+91-9408997494"
                target="_blank"
                className="clickable_numbers"
                rel="noopener noreferrer"
              >
                +91 94089 97494
              </a>
              &nbsp;દ્વારા અમારો સંપર્ક કરો. 🤘🏻
            </p>
          </p>
          <p className="hindi_text language_para">
            <p className="p_l3_p1 para_line">
              हम इंटरनेटपे दुकान बड़ी कर रहे है,
            </p>
            <p className="p_l3_p2 para_line">
              तो फिलहाल आप कॉल :&nbsp;
              <a href="tel:+91-8980820097" className="clickable_numbers">
                +91 89808 20097
              </a>
              &nbsp;/ व्हाट्सएप :&nbsp;
              <a
                href="https://wa.me/+91-9408997494"
                target="_blank"
                className="clickable_numbers"
                rel="noopener noreferrer"
              >
                +91 94089 97494
              </a>
              &nbsp;से हमे संपर्क करे। 🤘🏻
            </p>
          </p>
        </div>
      </div>
    </>
  );
}
