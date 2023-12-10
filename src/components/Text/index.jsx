import React from "react";

const sizeClasses = {
  txtMonaSansBold48: "font-bold font-monasans",
  txtMonaSansBold36: "font-bold font-monasans",
  txtMonaSansBold20Gray900: "font-bold font-monasans",
  txtMonaSansRegular18Gray600: "font-monasans font-normal",
  txtMonaSansRegular18: "font-monasans font-normal",
  txtMonaSansBold24Gray900: "font-bold font-monasans",
  txtMonaSansBold36Black900: "font-bold font-monasans",
  txtMonaSansRegular20: "font-monasans font-normal",
  txtMonaSansBold24Gray200: "font-bold font-monasans",
  txtMonaSansBold64Gray50: "font-bold font-monasans",
  txtMonaSansMedium28: "font-medium font-monasans",
  txtInterBold20: "font-bold font-inter",
  txtMonaSansBold64: "font-bold font-monasans",
  txtMonaSansBold20: "font-bold font-monasans",
  txtRobotoRomanRegular20: "font-normal font-roboto",
  txtMonaSansBold24: "font-bold font-monasans",
  txtMonaSansBold48Black900: "font-bold font-monasans",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
