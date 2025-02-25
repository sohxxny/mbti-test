# MBTI 테스트

## 프로젝트 개요

- React를 이용한 MBTI 테스트입니다.
- <b>배포</b>: [MBTI Test](https://mbti-test-drab.vercel.app/)

<br>

## 주요 페이지 및 기능

- <b>홈 페이지 및 헤더</b>
  - 네비게이션 헤더를 통해 홈, 프로필, 결과, 테스트 페이지로 이동 가능
- <b>프로필 페이지</b>
  - 사용자 닉네임 변경 기능 제공
- <b>테스트 페이지</b>
  - MBTI 테스트
  - 완료 후 테스트 결과 확인 가능
- <b>결과 리스트 페이지</b>
  - 다른 사용자들의 테스트 결과 표시
  - 내 테스트 결과 공개/비공개 설정 및 삭제 기능 제공

<br>

## 기술 스택

### 메인 개발 환경

<img src="https://img.shields.io/static/v1?label=React&message=19.0&color=61DAFB"> <img src="https://img.shields.io/static/v1?label=JavaScript&message=ES6&color=F7DF1E"> <img src="https://img.shields.io/static/v1?label=vite&message=6.1&color=646CFF">

### 주요 라이브러리 및 도구

- <b>Zustand</b> - 전역 상태 관리
- <b>React Router Dom</b> - 클라이언트 사이드 라우팅
- <b>axios</b> - 통신과 HTTP 요청 (JWT 인증 사용)
- <b>json-server</b> - 백엔드 API 목업 및 테스트
- <b>Tailwind CSS</b> - 유틸리티 기반 UI 스타일링
- <b>React Toastify</b> - 서버 통신 및 HTTP 요청 처리
- <b>Vercel</b> - 배포 및 호스팅

<br>

## 프로젝트 폴더 구조

```
src
├─ api/
├─ components/
├─ data/
├─ hooks/
├─ pages/
├─ shared/
├─ utils/
└─ zustand/
```

<br>

## 화면 구성

<p align = "center">
<img width="300" alt="dex page" src="https://github.com/user-attachments/assets/48f7c1ae-681e-4643-b4f4-be1af48ac57a" />
<img width="300" alt="home page" src="https://github.com/user-attachments/assets/c78cd10f-730f-44c0-97a9-05af573e58e2" /> 
<br>
<img width="300" alt="dex page" src="https://github.com/user-attachments/assets/6373e65b-494d-410a-b0ab-1ec7c702c07c" />
<img width="300" alt="dex page" src="https://github.com/user-attachments/assets/a9b31a98-5cc2-4766-a7a2-f6487642e6db" />
<br>
</p>
