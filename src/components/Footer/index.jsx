import React from "react";

import { Img, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
          <Img
            className="md:flex-1 h-[50px] sm:h-auto object-cover w-[277px] md:w-full"
            src="images/img_copyoffx3.png"
            alt="copyoffxThree"
          />
          <div className="flex flex-col gap-4 items-end justify-start w-auto">
            <div className="flex flex-row gap-3 items-start justify-start w-auto">
              <Img
                className="h-8 md:h-auto object-cover w-8"
                src="images/img_linkedin.png"
                alt="linkedin"
              />
              <Img
                className="h-8 md:h-auto object-cover w-8"
                src="images/img_facebook.png"
                alt="facebook"
              />
              <Img
                className="h-8 md:h-auto object-cover w-8"
                src="images/img_instagram.png"
                alt="instagram"
              />
              <Img
                className="h-8 md:h-auto object-cover w-8"
                src="images/img_twitterx.png"
                alt="twitterx"
              />
            </div>
            <Text
              className="text-gray-600 text-lg w-auto"
              size="txtMonaSansRegular18Gray600"
            >
              ©️ 2023 Fastfixx | All Rights Reserved{" "}
            </Text>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
