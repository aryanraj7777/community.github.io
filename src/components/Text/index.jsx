import React from "react";

const sizeClasses = {
  txtHammersmithOneRegular26: "font-hammersmithone font-normal",
  txtHammersmithOneRegular12: "font-hammersmithone font-normal",
  txtInterBold14: "font-bold font-inter",
  txtInterBold36: "font-bold font-inter",
  txtInterBold16: "font-bold font-inter",
  txtInterBold27: "font-bold font-inter",
  txtHelveticaBold24: "font-bold font-helvetica",
  txtHammersmithOneRegular28: "font-hammersmithone font-normal",
  txtInterBold73: "font-bold font-inter",
  txtInterBold63: "font-bold font-inter",
  txtInterBold20: "font-bold font-inter",
  txtAlmaraiBold24: "font-almarai font-bold",
  txtInterRegular33: "font-inter font-normal",
  txtInikaBold15: "font-bold font-inika",
  txtInterRegular26WhiteA700: "font-inter font-normal",
  txtInterRegular24: "font-inter font-normal",
  txtInterRegular26: "font-inter font-normal",
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
