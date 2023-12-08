
import React from "react";
import * as Icons from "@/lib/common/components/Icons";

export type IconName = keyof typeof Icons;
export type IconsProps = (typeof Icons)[IconName];
export type IconProps = Omit<IconsProps, "size" | "color"> & {
  name: IconName;
  color?: string;
  size?: number;
  onClick?: (...args: any) => void;
  className?: string;
  [key: string]: any
};

export const Icon = (props: IconProps) => {
  const { name, size = 24, color, ...rest } = props;

  const Component = Icons[name];

  return (
    <Component
      width={size}
      height={size}
      color={color ?? "var(--simentic-on-surface, #121416)"}
      {...rest}
    />
  );
};
