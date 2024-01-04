import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded-[11px]" };
const variants = {
  fill: {
    indigo_900: "bg-indigo-900 text-white-A700",
    black_900: "bg-black-900 text-white-A700",
    blue_gray_900: "bg-blue_gray-900 text-white-A700",
    white_A700: "bg-white-A700 text-black-900",
  },
};
const sizes = { xs: "p-1.5", sm: "p-3", md: "p-[15px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "sm",
  variant = "fill",
  color = "white_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "indigo_900",
    "black_900",
    "blue_gray_900",
    "white_A700",
  ]),
};

export { Button };
