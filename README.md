# 차찬영

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