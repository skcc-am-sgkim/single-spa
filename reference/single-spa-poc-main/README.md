- [실행 방법](#실행-방법)
- [주요 실험 내용](#주요-실험-내용)
- [이슈](#이슈)
  - [Single SPA Root Config 구성](#single-spa-root-config-구성)
- [할 일](#할-일)

# 실행 방법(Win)
```bash
# 각 프로젝트 npm 패키지 설치
$ npm install
$ npm run install-root-config
$ npm run install-navbar-react
$ npm run install-app1-react
$ npm run install-app2-react-nexacro
$ npm run install-app3-vue
$ npm run install-import-map
# 각 프로젝트 개발 서버 실행
$ npm run start-root-config
$ npm run start-navbar-react
$ npm run start-app1-react
$ npm run start-app2-react-nexacro
$ npm run start-app3-vue
$ npm run start-import-map
```

# 실행 방법(Linux/Mac)
```bash
# 전체 npm 패키지 설치
$ npm run init
# 각 프로젝트 개발 서버 실행
$ npm run start
```

# 주요 실험 내용
- Single SPA 라우터와 각 App의 라우터가 충돌하는지 확인
- 같은 페이지 내 여러 React App을 구성하여, 각각의 React App이 독립적으로 동작하는지 확인(React 17, 18)

# 이슈
## Single SPA Root Config 구성
GNB, SNB, 전역 레이아웃을 하나의 APP에 구성하기 까다로움

# 할 일
- [x] Single SPA Root Config 구성
- [ ] import map 배포 방법 선정
  - [ ] [import map deployer](https://github.com/single-spa/import-map-deployer)
  - [ ] server side {rendering|template engine}을 이용한 import map 배포
- [x] Global Navigation Bar 구성(React 18 or VanillaJS)
- [ ] ~~Side Navigation Bar 구성(React 18 or VanillaJS)~~ [Single SPA Root Config 구성 이슈](#single-spa-root-config-구성)
- [x] APP1 구성(React17+react-router)
- [x] APP2 구성(React17+Nexacro)
- [x] APP3 구성(Vue3+Vue-Router)
