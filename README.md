# 웹 프레임워크1  3조  문어의 꿈

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
<img src="https://github.com/taeksin/octobox/assets/90402009/8e12b933-0587-42f0-ab4a-d8f7facd2501" width="400" height="250" style="margin: 10px;" >
<img src="https://github.com/taeksin/octobox/assets/90402009/a7231297-de5d-466b-96fe-85431103f93b" width="400" height="250" style="margin: 10px;" >
<img src="https://github.com/taeksin/octobox/assets/90402009/74bf3483-35fe-433e-9e3c-b6d7892f3609" width="400" height="250" style="margin: 10px;" >
<img src="https://github.com/taeksin/octobox/assets/90402009/c113f75a-79e4-4df7-8ad5-4fe67e1ac75d" width="400" height="250" style="margin: 10px;" >
<img src="https://github.com/taeksin/octobox/assets/90402009/9ce9ce91-baf6-41b6-81d2-4b24b5c062f4" width="400" height="250" style="margin: 10px;" >
<img src="https://github.com/taeksin/octobox/assets/90402009/714b776c-31e5-4bfb-ae86-5cc2de3a3967" width="400" height="250" style="margin: 10px;" >
<img src="https://github.com/taeksin/octobox/assets/90402009/c9025370-32ff-4db7-97eb-d2dcd8e4636e" width="400" height="250" style="margin: 10px;" >
<img src="https://github.com/taeksin/octobox/assets/90402009/083ed083-cf60-4613-849e-1a08d10b068d" width="400" height="250" style="margin: 10px;" >
<img src="https://github.com/taeksin/octobox/assets/90402009/519c6dac-99de-4000-a62d-fb6701ff4552" width="400" height="250" style="margin: 10px;" >
<img src="https://github.com/taeksin/octobox/assets/90402009/d87a357d-1831-4edb-ada9-7808b7c1f1e4" width="400" height="250" style="margin: 10px;" >


## File Structure Chart

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
