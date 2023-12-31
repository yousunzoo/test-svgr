import * as React from "react";
import type { SVGProps } from "react";
const SvgChecked = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width={props.width || 24}
    height={props.height || 24}
    style={props.style || {}}
    onClick={props.onClick}
    {...props}
  >
    <g id="24 / chatting / comment-checked">
      <path
        id="icon"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0868 18L6 21.8042V18H4C2.89543 18 2 17.1046 2 16V4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V16C22 17.1046 21.1046 18 20 18H12.0868ZM8 18.1958L11.5132 16H20V4H4V16H8V18.1958ZM15.2929 6.29289L11 10.5858L8.70711 8.29289L7.29289 9.70711L11 13.4142L16.7071 7.70711L15.2929 6.29289Z"
        fill="black"
      />
    </g>
  </svg>
);
export default SvgChecked;
