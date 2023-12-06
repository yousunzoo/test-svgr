# SVGR cli Test

## 목표

- [ ] svg 파일 저장 시 아이콘 컴포넌트 생성 자동화
- [ ] 디자인 시스템에 맞게 아이콘 컴포넌트 Props 지정

---

## SVGO(SVG Optimizer)
- SVG 파일을 최적화하기 위한 Nodejs 기반 도구
- SVG 렌더링 결과에 영향을 미치지 않는 디자인 도구의 메타 데이터, 주석, 사용되지 않는 요소 등을 안전하게 제거하거나 변환할 수 있다.

### 세팅된 플러그인

> 다른 프로젝트의 예시를 들고 온 것으로, 플러그인은 상황에 맞게 설정! [SVGO 플러그인 종류 더 보기](https://a11y.gitbook.io/graphics-aria/svg-graphics/svg-optimize)


- removeXMLNS : `xmls` 속성 제거
- removeDimensions : viewBox 속성이 있을 경우, width / height 속성 제거
- removeUselessStorkeAndFill : 불필요한 stroke, fill 속성 제거
- removeMetadata : `<metadata>` 제거
- removeDoctype : `doctype` 선언 제거