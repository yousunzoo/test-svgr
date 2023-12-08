const fs = require("fs");
const path = require("node:path");

const assetPath = path.resolve(__dirname, "../../public/static/icon");

// Storybook을 사용하게 된다면 다음과 같이 작성할 수 있어요!
const storyDist = path.resolve(
  __dirname,
  "../../src/lib/common/components/Icon/Icon.stories.tsx",
);

// 실제로 우리가 사용할 아이콘 컴포넌트 경로
const iconComponentDist = path.resolve(
  __dirname,
  "../../src/lib/common/components/Icon/Icon.tsx",
);

// 가져올 아이콘 폴더 경로
const images = fs
  .readdirSync(assetPath)
  .filter(file => new RegExp(`.\/|.svg`).test(file));

const ext = /\.\w+/gi;
const snake = /\_(.)/gi;
const space = /\s(.)/gi;

// svg 파일명을 기반으로 다음과 같이 컴포넌트 명을 작성할 수 있어요!
// 팀 내 아이콘 컴포넌트 컨벤션에 따라 커스터마이징이 가능합니다.
const rename = name => {
  return name
    .replace(ext, "")
    .replace(space, i => i[1].toUpperCase())
    .replace(snake, i => i[1].toUpperCase())
    .split("")
    .map((char, idx) => (!idx ? char.toUpperCase() : char))
    .join("");
};

const iconCode = `
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
`;

fs.writeFileSync(iconComponentDist, iconCode);