# 차찬영

# [5월 18일]
로그인 관리 구현
firebase에서 신호를 받으면, 해당 로직을 처리한 뒤 반환함
예제에선 userOBJ라는 이름으로 받아서 처리...
console을 통해 객체가 잘 전달되었는지, 결과가 잘 나올 수 있는지 확인할 수 있음.
Nweet 컴포넌트 생성. 기존 Home 컴포넌트의 '개별 트윗 출력' 부분과 유사함.



# [5월 11일]
전 주에 확인했던 원인 불명 에러 제거.
수업 중 진도를 건너뛰었거나 놓쳤을 때, teams 확인하여 보충할것.
Nweet 기능 구현 시작...
CRUD기능을 순차적으로 구현함 (Action 6)
nweetobject를 통해 문서를 읽어옴...

# [5월 4일]
폴더 clone, 내용 일부 바뀜 (시작시 원인 불명의 error 있음, 찾아야 함.)
social login 기능 추가.
로그인 되었을 때 로직을 추가.

# [4월 27일]
프로젝트 폴더가 망가짐
정상적인 실행 불가능
pull/push 과정에서 문제 발생(커밋은 되나 푸시가 안됨)
원인은 각 시간마다 다른 컴퓨터를 사용하며 push 과정에서 문제가 있었던걸로 추정됨

.env 파일 복구, 약 2~3주간 기록한 자료가 사라짐

auth 파일 작성, 로그인 폼 작성 (이메일 형식이나 로그인 과정은 firebase에서 진행됨)

button togglemode...


# [4월 20일]
*중간고사*

# [4월 13일]
중간고사 - 시험지 그대로 따라하면 됨
1. REACT 프로젝트 생성 및 렌더링..
2. MARKDOWN 문법 숙지
3. REACT 렌더링 방식 이해
4. 필요한 파일, 필요 없는 파일 구별하기
리포지토리 생성 및 렌더링..
npm cache clean -force
npm이 이상하게 동작할때(설치 및 업데이트 오류 시)
firebase 버전 8.8.0 업데이트
막힐땐 easysit github 참조
OAuth App 생성, 콜백URL과 clientid 제대로 가져오기...
history를 잘 활용할것, 문제 발생시에 롤백하여 해결할 수도 있음...
Auth.js -> 회원가입 및 로그인 로직 처리

# [4월 6일]
Router.js 수정, react-route-dom 버전 5.2.0으로 고정 (다운그레이드)
신 구문을 사용하기보단, 교재의 내용을 제대로 학습하기 위함.
새 프로젝트를 만들 시엔 최신버전을 사용하는것이 좋을듯?
Router.js에서, 교재 버전에선 Switch태그를 사용하지만
신버전 node에서는 switch를 사용하지 않음. 참고 해둘것
리소스 경로는 절대경로를 사용하는것이 좋다...
오류가 많이 발생하니 커밋을 자주하자

# [3월 30일]
git add . (변경 사항 저장할 때)
firebase import시 다음과 같이 붙여넣음
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

최신버전이 9버전 이상이므로 이상의 import문을 따르고,
이하의 버전일 경우 아래의 import문을 작성함
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

파일 추가/삭제 등의 작업 수행 시 커밋을 잊지 말자.
오늘 추가한 firebase.js 파일엔 firebase 시스템을 활용하기 위한 중요 정보들(계정 고유 정보 등)이 담겨있음.

apikey는 가장 중요한 정보이므로, 암호화하여 숨겨야 함
env 파일에 키를 입력하고, gitignore를 활용해 숨김 (키 파일 업로드 방지)

react 공식 문서에서 필요한 부분만 찾아낼 수 있는 요령을 익히자.
class 형태가 아닌 function 형태로, Hook을 잘 사용할 수 있어야 함

어떤 컴포넌트를 렌더링할지 결정하는 router의 역할을 이해해야 함

Hooks를 사용하기 위한 useState함수, 인자로 [상태, 상태관리함수, 이름]

# [3월 23일]

[3월 23일]
npx create-react-app@latest app1 (디렉토리생성)
cd (폴더명)
npm start

(마지막 버전으로 다시 설치할 경우)
npm install -g create-react-app@latest

저장소의 전체적인 설정은 깃허브 페이지의 settings 탭에 있음

git config user.name (이름)
git config user.email (이메일)

업데이트는 내용 작성(변경) - COMMIT - PUSH - PULL의 과정으로 진행

불필요한 파일은 최소화하고,
커밋을 자주하되 핵심 내용을 잘 요약해서 코멘트를 쓰자
중대한 변경(파일 추가/삭제)시엔 반드시 커밋해서 히스토리 만들기