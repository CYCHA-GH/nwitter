# 차찬영

# [4월 13일]
?? 4월 6일거 왜 푸쉬안됨
확인하기
중간고사 - 시험지 그대로 따라하면 됨
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