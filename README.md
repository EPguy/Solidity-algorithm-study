# [web3oj](https://app.web3oj.com/app/home/) 문제 풀이

## 실행방법
1. [alchemy](https://www.alchemy.com/)에 회원가입합니다.
2. CREATE APP 버튼을 눌러 Goerli 네트워크 기반으로 앱을 생성합니다.
3. 프로젝트로 돌아와 Root 폴더에 .env 파일을 생성합니다.
4. 아래와 같이 설정코드를 작성합니다. 
```
   GOERLI_URL = https://eth-goerli.g.alchemy.com/v2/alchemy api key를 입력해주세요.
   PRIVATE_KEY = 여기엔 지갑 비밀키를 입력해주세요.
```
5. 아래 명령어로 패키지 설치 후 컴파일합니다.
```
    npm install
    npx hardhat --network goerli run .\scripts\LockProblem.ts
```

