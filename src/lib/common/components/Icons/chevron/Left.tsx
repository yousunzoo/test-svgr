import * as React from "react";
import type { SVGProps } from "react";
const SvgLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    width={props.width || 24}
    height={props.height || 24}
    style={props.style || {}}
    onClick={props.onClick}
    {...props}
  >
    <g id="icon/chevron-left-32">
      <path
        id="Vector 46 (Stroke)"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.9428 4.39052C21.4635 4.91122 21.4635 5.75544 20.9428 6.27614L11.219 16L20.9428 25.7239C21.4635 26.2446 21.4635 27.0888 20.9428 27.6095C20.4221 28.1302 19.5779 28.1302 19.0572 27.6095L8.39052 16.9428C7.86983 16.4221 7.86983 15.5779 8.39052 15.0572L19.0572 4.39052C19.5779 3.86983 20.4221 3.86983 20.9428 4.39052Z"
        fill="#6D7582"
      />
    </g>
  </svg>
);
export default SvgLeft;
