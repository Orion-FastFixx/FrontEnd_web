import React from "react";

import { Button, Img, Text } from "components";

const MasukHeader = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[50px] w-[140px]"
          src="images/img_layerx00201.svg"
          alt="layerx00201"
        />
        <div className="flex flex-row gap-6 items-center justify-center w-auto">
          <div className="flex flex-col items-center justify-center w-auto">
            <Text
              className="text-gray-900 text-lg w-auto"
              size="txtMonaSansRegular18"
            >
              {props?.navlinks}
            </Text>
          </div>
          <Button
            className="cursor-pointer font-bold font-monasans leading-[normal] min-w-[106px] text-center text-lg"
            shape="round"
            color="red_600"
            size="md"
            variant="fill"
          >
            {props?.useraction}
          </Button>
        </div>
      </div>
    </>
  );
};

MasukHeader.defaultProps = {
  navlinks: "Belum punya akun?",
  useraction: "Daftar",
};

export default MasukHeader;
