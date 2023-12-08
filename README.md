# SVGR cli Test

## Checkpoint

- [x] 지정한 폴더 안에서 폴더 세분화 시 폴더 나눠서 컴포넌트가 생성되는가?
  - 폴더 나눠서 컴포넌트 생성됨. 다만 index.ts에 대한 작업 필요

---

## SVGO(SVG Optimizer)

- SVG 파일을 최적화하기 위한 Nodejs 기반 도구
- SVG 렌더링 결과에 영향을 미치지 않는 디자인 도구의 메타 데이터, 주석, 사용되지 않는 요소 등을 안전하게 제거하거나 변환할 수 있다.

### 세팅된 플러그인

> 다른 프로젝트의 예시를 들고 온 것으로, 플러그인은 상황에 맞게 설정! [SVGO 플러그인 종류 더 보기](https://a11y.gitbook.io/graphics-aria/svg-graphics/svg-optimize)

- removeXMLNS : `xmls` 속성 제거
- removeDimensions : viewBox 속성이 있을 경우, width / height 속성 제거
- removeUselessStrokeAndFill : 불필요한 stroke, fill 속성 제거
- removeMetadata : `<metadata>` 제거
- removeDoctype : `doctype` 선언 제거

## SVGR Config 설정

[SVGR Config 옵션 보기](https://react-svgr.com/docs/options)

그 중에서 현재 이런 설정을 사용하고 있어요.

```json
{
  "typescript": true,
  "params": {},
  "replaceAttrValues": {
    "#121416": "{props.color || `#121416`}",
    "#1C1B1F": "{props.color || `#1C1B1F`}"
  },
  "svgProps": {
    "width": "{props.width || 24}",
    "height": "{props.height || 24}",
    "style": "{props.style || {}}",
    "onClick": "{props.onClick}"
  }
}
```

## Command Line 설정

위의 파일들을 바탕으로, 다음과 같은 코드가 작성되었어요!

```
"icons:create" : "npx @svgr/cli --no-dimensions --typescript -d ./src/lib/common/components/Icons ./public/static/icon --config-file ./scripts/icons/svgr-config.json --template ./scripts/icons/svg-template.js --svgo-config ./scripts/icons/svgo-config.json && node ./scripts/icons/setIcon"
```

`-d` 뒤부터 꼼꼼히 봐볼까요?

```
아이콘_컴포넌트가_저장될_경로 SVG_파일이_저장된_경로 SVGR_설정_파일 --template 아이콘_컴포넌트를_만드는데_필요한_템플릿_파일 --svgo-config SVGO_설정_파일 && node 아이콘_컴포넌트_만드는_파일
```
