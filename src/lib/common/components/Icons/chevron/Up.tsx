import * as React from "react";
import type { SVGProps } from "react";
const SvgUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    width={props.width || 24}
    height={props.height || 24}
    style={props.style || {}}
    onClick={props.onClick}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.0572 8.39052C15.5779 7.86983 16.4221 7.86983 16.9428 8.39052L27.6095 19.0572C28.1302 19.5779 28.1302 20.4221 27.6095 20.9428C27.0888 21.4635 26.2446 21.4635 25.7239 20.9428L16 11.219L6.27614 20.9428C5.75544 21.4635 4.91122 21.4635 4.39052 20.9428C3.86983 20.4221 3.86983 19.5779 4.39052 19.0572L15.0572 8.39052Z"
      fill="#6D7582"
    />
  </svg>
);
export default SvgUp;
