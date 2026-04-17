import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="  bg-[#244D3F] text-[#FFF] pt-10 pb-5 px-10">
      <div className="flex items-center justify-center flex-col text-center sm:footer-horizontal mb-10">
        <div>
          <h1 className="text-3xl md:text-7xl font-bold mb-5">KeenKeeper</h1>
          {/* <img src={footerLogo} alt="" /> */}
          <p>
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
        </div>

        <div className="mt-5">
          <h6 className="footer-title">Social Links</h6>
          <div className="flex gap-2">
            <a
              href="https://www.instagram.com/?hl=en"
              target="blank"
              className="link link-hover bg-white text-black w-10 h-10 rounded-full flex items-center justify-center"
            >
              <FaInstagramSquare />
            </a>
            <a
              href="https://web.facebook.com/?_rdc=1&_rdr#"
              target="blank"
              className="link link-hover bg-white text-black w-10 h-10 rounded-full flex items-center justify-center"
            >
              <FaSquareFacebook />
            </a>
            <a
              href="https://x.com/"
              target="blank"
              className="link link-hover bg-white text-black w-10 h-10 rounded-full flex items-center justify-center"
            >
              <FaSquareXTwitter />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col  space-y-3 sm:flex-row justify-between pt-5 border-t border-[#1A8862] text-[12px]">
        <p> @copy KeenKeeper. All rights reserved.</p>

        <div className="flex gap-5">
          <p>Privacy Policy </p>
          <p>Terms of Service</p>
          <p> Cookies </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
