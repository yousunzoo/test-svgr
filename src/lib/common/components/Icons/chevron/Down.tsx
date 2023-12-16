import * as React from "react";
import type { SVGProps } from "react";
const SvgDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.39052 11.057C4.91122 10.5363 5.75544 10.5363 6.27614 11.057L16 20.7809L25.7239 11.057C26.2446 10.5363 27.0888 10.5363 27.6095 11.057C28.1302 11.5777 28.1302 12.4219 27.6095 12.9426L16.9428 23.6093C16.4221 24.13 15.5779 24.13 15.0572 23.6093L4.39052 12.9426C3.86983 12.4219 3.86983 11.5777 4.39052 11.057Z"
      fill="#6D7582"
    />
  </svg>
);
export default SvgDown;
