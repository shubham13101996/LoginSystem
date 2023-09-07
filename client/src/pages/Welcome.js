import React from "react";
import Layouts from "../components/Layout/Layouts";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Welcome = () => {
  return (
    <Layouts title={"Wecome to Metaverse"}>
      <div className="row display ">
        <div className="col-md-12 ">
          <img
            src="https://i.ytimg.com/vi/eJG0hhPafsI/maxresdefault.jpg"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">JOIN US</h1>
          <p className="text-justify mt-2">
            any query and info about product feel free to call us anytime, we
            are 24 X 7 available
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@ecommerceapp.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layouts>
  );
};

export default Welcome;
