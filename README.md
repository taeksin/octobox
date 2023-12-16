
## 팀 멤버
- 김택신 (학번: 1971194)
- 박소은 (학번: 2191189)
- 전소진 (학번: 2191193)
- 창윤빈 (학번: 1971214)

## Available Scripts

In the project directory, you can run:

## System Requirement
1. node 버전: 18.17.1을 사용합니다.

## Backend

> 데이터 베이스 연동을 위해 별도의 설정을 요구하지 않습니다.

`./backend` 폴더에 `.env`파일이 위치하고 있는지 확인해 주세요.
`.env` 파일은 git에 업로드 되지 않는 DB 비밀번호를 포함하고 있어 유출되지 않도록 유의해주세요.

설정이 완료되었다면, 아래의 단계를 따라 `backend`서버를 가동시킵니다.
### `cd ./backend`
1. backend 폴더로 이동합니다.

### `npm install`
2. 필요한 패키지를 인스톨 합니다.

### `npm run dev`
3. 컴파일 하지 않고 개발환경에서 서버를 가동합니다.


이제 프론트 엔드를 가동시킬 준비가 완료되었습니다.
## Frontend
### `cd ./frontend`
1. frontend 폴더로 이동합니다.

### `npm install`
2. 필요한 패키지를 인스톨 합니다.<br/>
※ 버전을 명시하긴 했지만 혹시 npm install이 안된다면<br/>
`npm install --legacy-peer-deps` or `npm install --force `


### `npm start`
3. 리액트 앱을 실행시키고 브라우저에서 http://localhost:3000으로 접속합니다.

### 실행결과
<img src="https://github.com/taeksin/octobox/assets/90402009/3e45cc38-c654-4710-be2c-808a5a8a28a2" width="400" height="250" style="margin: 10px;" >
<img src="https://github.com/taeksin/octobox/assets/90402009/a666a1e2-1000-41a6-9c94-6bf47b2d0dfd" width="400" height="250" style="margin: 10px;" >
<img src="https://github.com/taeksin/octobox/assets/90402009/11a0255c-060c-4e21-bb02-08ba080b15ab" width="400" height="250" style="margin: 10px;" >
<img src="https://github.com/taeksin/octobox/assets/90402009/493af5d8-bc04-4be1-89cf-0dd756cc7039" width="400" height="250" style="margin: 10px;" >
<img src="https://github.com/taeksin/octobox/assets/90402009/6b0016c8-cd7f-46e3-9540-6670297ac899" width="400" height="250" style="margin: 10px;" >
<img src="https://github.com/taeksin/octobox/assets/90402009/34001b16-c74b-48a4-956f-2a271f6d2fef" width="400" height="250" style="margin: 10px;" >
<img src="https://github.com/taeksin/octobox/assets/90402009/4b7d9107-9022-4b79-9357-10299ea30618" width="400" height="250" style="margin: 10px;" >
<img src="https://github.com/taeksin/octobox/assets/90402009/88992427-8711-4022-b3b5-ffef3c698076" width="400" height="250" style="margin: 10px;" >
<img src="https://github.com/taeksin/octobox/assets/90402009/d42a93e5-7bd7-4f45-90f0-b0c042403d0a" width="400" height="250" style="margin: 10px;" >
<img src="https://github.com/taeksin/octobox/assets/90402009/3d67a0c4-478b-4a12-9905-b3720b602557" width="400" height="250" style="margin: 10px;" >

## File Structure Chart
<div class="details-btn" onclick="toggleDetails()">📦OCTOBOX</div>
<div class="octobox-details">
  <pre>
```
📦OCTOBOX
 ┣ 📂backend
 ┣ 📂frontend
 ┃ ┣ 📂public
 ┃ ┃ ┣ 📜favicon.ico
 ┃ ┃ ┣ 📜index.html
 ┃ ┃ ┣ 📜logo192.png
 ┃ ┃ ┣ 📜logo512.png
 ┃ ┃ ┣ 📜manifest.json
 ┃ ┃ ┗ 📜robots.txt
 ┃ ┣ 📂src
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📂answers
 ┃ ┃ ┃ ┃ ┣ 📜AnswerCreate.js
 ┃ ┃ ┃ ┃ ┣ 📜AnswerItem.js
 ┃ ┃ ┃ ┃ ┗ 📜AnswerList.js
 ┃ ┃ ┃ ┣ 📂aside
 ┃ ┃ ┃ ┃ ┣ 📜Sidebar.js
 ┃ ┃ ┃ ┃ ┗ 📜SidebarRight.js
 ┃ ┃ ┃ ┣ 📂css
 ┃ ┃ ┃ ┃ ┣ 📜Filter.css
 ┃ ┃ ┃ ┃ ┣ 📜FilterComponent.css
 ┃ ┃ ┃ ┃ ┣ 📜Ranking.css
 ┃ ┃ ┃ ┃ ┣ 📜ReadMe.css
 ┃ ┃ ┃ ┃ ┗ 📜SolutionCreate.css
 ┃ ┃ ┃ ┣ 📂editor
 ┃ ┃ ┃ ┃ ┗ 📜Editor.js
 ┃ ┃ ┃ ┣ 📂filter
 ┃ ┃ ┃ ┃ ┣ 📜Filter.js
 ┃ ┃ ┃ ┃ ┗ 📜FilterComponent.jsx
 ┃ ┃ ┃ ┣ 📂footer
 ┃ ┃ ┃ ┃ ┗ 📜Footer.js
 ┃ ┃ ┃ ┣ 📂home
 ┃ ┃ ┃ ┃ ┣ 📜Card.js
 ┃ ┃ ┃ ┃ ┗ 📜Pagination.js
 ┃ ┃ ┃ ┣ 📂loading
 ┃ ┃ ┃ ┃ ┗ 📜Loading.js
 ┃ ┃ ┃ ┣ 📂login
 ┃ ┃ ┃ ┃ ┗ 📜LoginInfo.js
 ┃ ┃ ┃ ┣ 📂notfound
 ┃ ┃ ┃ ┃ ┗ 📜NotFound.js
 ┃ ┃ ┃ ┣ 📂ranking
 ┃ ┃ ┃ ┃ ┣ 📜CRanking.js
 ┃ ┃ ┃ ┃ ┣ 📜CppRanking.js
 ┃ ┃ ┃ ┃ ┣ 📜JavaRanking.js
 ┃ ┃ ┃ ┃ ┣ 📜JavascriptRanking.js
 ┃ ┃ ┃ ┃ ┣ 📜PythonRanking.js
 ┃ ┃ ┃ ┃ ┣ 📜RankingComponent.Style.js
 ┃ ┃ ┃ ┃ ┣ 📜RankingComponent.js
 ┃ ┃ ┃ ┃ ┣ 📜TopRankingProfiles.js
 ┃ ┃ ┃ ┃ ┗ 📜TopRankingProfiles.style.js
 ┃ ┃ ┃ ┣ 📂readme
 ┃ ┃ ┃ ┃ ┣ 📜ReadMe.js
 ┃ ┃ ┃ ┃ ┗ 📜ReadMe.style.js
 ┃ ┃ ┃ ┣ 📂signup
 ┃ ┃ ┃ ┃ ┣ 📜SOInfo.js
 ┃ ┃ ┃ ┃ ┗ 📜SignupInfo.js
 ┃ ┃ ┃ ┣ 📂solve
 ┃ ┃ ┃ ┃ ┗ 📜Card.js
 ┃ ┃ ┃ ┣ 📂toast
 ┃ ┃ ┃ ┃ ┗ 📜Toast.js
 ┃ ┃ ┃ ┗ 📜common.css
 ┃ ┃ ┣ 📂images
 ┃ ┃ ┃ ┣ 📜1.png
 ┃ ┃ ┃ ┣ 📜2.png
 ┃ ┃ ┃ ┣ 📜3.png
 ┃ ┃ ┃ ┣ 📜AD3.jpeg
 ┃ ┃ ┃ ┣ 📜ask-background.svg
 ┃ ┃ ┃ ┣ 📜hansung.jpg
 ┃ ┃ ┃ ┣ 📜identicon1.jpeg
 ┃ ┃ ┃ ┣ 📜logo.png
 ┃ ┃ ┃ ┣ 📜newsozipImage.png
 ┃ ┃ ┃ ┣ 📜tiredocto.gif
 ┃ ┃ ┃ ┣ 📜김택신-w.png
 ┃ ┃ ┃ ┣ 📜로고_글씨1.png
 ┃ ┃ ┃ ┣ 📜박소은.png
 ┃ ┃ ┃ ┣ 📜윤빈2.png
 ┃ ┃ ┃ ┣ 📜은2.png
 ┃ ┃ ┃ ┣ 📜전소진.png
 ┃ ┃ ┃ ┣ 📜전소진1.png
 ┃ ┃ ┃ ┣ 📜창윤빈.png
 ┃ ┃ ┃ ┣ 📜창윤빈1.png
 ┃ ┃ ┃ ┣ 📜창윤빈2.png
 ┃ ┃ ┃ ┣ 📜창윤빈3.png
 ┃ ┃ ┃ ┣ 📜창윤빈4.png
 ┃ ┃ ┃ ┣ 📜창윤빈5.png
 ┃ ┃ ┃ ┗ 📜택2.png
 ┃ ┃ ┣ 📂pages
 ┃ ┃ ┃ ┣ 📜Home.js
 ┃ ┃ ┃ ┣ 📜Login.js
 ┃ ┃ ┃ ┣ 📜Question.js
 ┃ ┃ ┃ ┣ 📜QuestionCreate.js
 ┃ ┃ ┃ ┣ 📜QuestionDetail.js
 ┃ ┃ ┃ ┣ 📜Ranking.js
 ┃ ┃ ┃ ┣ 📜Signup.js
 ┃ ┃ ┃ ┣ 📜SolutionCreate.js
 ┃ ┃ ┃ ┗ 📜SolveList.js
 ┃ ┃ ┣ 📂util
 ┃ ┃ ┃ ┣ 📂ranking
 ┃ ┃ ┃ ┃ ┣ 📜cRankingsData.js
 ┃ ┃ ┃ ┃ ┣ 📜cppRankingsData.js
 ┃ ┃ ┃ ┃ ┣ 📜javaRankingsData.js
 ┃ ┃ ┃ ┃ ┣ 📜javascriptRankingsData.js
 ┃ ┃ ┃ ┃ ┗ 📜pythonRankingsData.js
 ┃ ┃ ┃ ┣ 📜convertor.js
 ┃ ┃ ┃ ┣ 📜fetchAnswer.js
 ┃ ┃ ┃ ┣ 📜fetchLogin.js
 ┃ ┃ ┃ ┣ 📜fetchQuestion.js
 ┃ ┃ ┃ ┗ 📜fetchSignup.js
 ┃ ┃ ┣ 📜App.css
 ┃ ┃ ┣ 📜App.js
 ┃ ┃ ┣ 📜App.test.js
 ┃ ┃ ┣ 📜Header.js
 ┃ ┃ ┣ 📜index.css
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┣ 📜logo.svg
 ┃ ┃ ┣ 📜reportWebVitals.js
 ┃ ┃ ┗ 📜setupTests.js
 ┃ ┣ 📜package.json
 ┃ ┗ 📜tailwind.config.js
 ┣ 📜.gitignore
```
  </pre>
</div>


/* 기존 CSS에 아래 내용을 추가 */
.details-btn {
  cursor: pointer;
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.octobox-details {
  display: none;
  font-size: 1rem;
  line-height: 1.5;
}

/* 버튼을 눌렀을 때 열리도록 하는 스타일 */
.details-btn.active + .octobox-details {
  display: block;
}

// 기존의 JavaScript에 아래 내용을 추가
function toggleDetails() {
  const detailsBtn = document.querySelector('.details-btn');
  detailsBtn.classList.toggle('active');
}