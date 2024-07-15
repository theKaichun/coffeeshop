import React from "react";
import { FaFacebook, FaInstagram, FaLine } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-black">
      <div className="bg-secondary min-h-[200px] flex items-center justify-center px-4">
        <div className="container grid md:grid-cols-3 gap-4 p-5 text-center md:text-left">
          {/* Company details */}
          <div className="py-8 px-4 ">
            <a
              href="#"
              className="font-semibold tracking-widest text-2xl sm:text-3xl font-cursive"
            >
              Coffee Cafe
            </a>
            <p className="pt-4">咖啡中的小人物 而且口感淡薄~~</p>
            <a
              href="https://www.instagram.com/nobody_about_cafe/"
              target="_blank"
              className="inline-block bg-primary py-2 px-4 mt-5 text-sm rounded-full"
            >
              Our Instagram
            </a>
          </div>

          {/* Company Address section */}
          <div className="py-8 px-4">
            <h1 className="text-xl font-semibold mb-3">Address</h1>
            <p className="mb-3">台北市大安區復興南路二段368號</p>
            <p>0968 976 860</p>
            <p>nobodyaboutcafe@gmail.com</p>
            {/* Social links */}
            <div className="space-x-3 mt-6">
              <a
                href="https://www.facebook.com/nobodyaboutcafe/?locale=zh_TW"
                target="_blank"
              >
                <FaFacebook className="text-3xl inline-block hover:scale-105 duration-200" />
              </a>
              <a
                href="https://www.instagram.com/nobody_about_cafe/"
                target="_blank"
              >
                <FaInstagram className="text-3xl inline-block hover:scale-105 duration-200" />
              </a>
              <a
                href="https://line.me/ti/p/~nobodyaboutcafe?from=page&openQrModal=true&searchId=471vnurh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLine className="text-3xl inline-block hover:scale-105 duration-200" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
