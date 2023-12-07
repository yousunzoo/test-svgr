const comments = `
// svgr-cli에 의해 자동으로 생성되는 파일입니다. 파일을 직접 수정하지 마세요!
// /scripts/icons/svg-template.js에서 설정을 확인할 수 있습니다.
// 아이콘 컴포넌트를 업데이트 하려면 아래의 명령어를 실행하세요.
// pnpm run icons:create
`;

const template = (variables, {tpl}) => {
  return tpl`
${comments}
${variables.imports};
${variables.interfaces};
const ${variables.componentName} = (${variables.props}) => (
  ${variables.jsx}
);
${variables.exports};
`;
};

module.exports = template;