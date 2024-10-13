// 비동가 : 콜백 => 프로미스 

const DB = [];

// 1. DB에 유저를 저장하는 함수 (Promise 반환)
function saveDB(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            DB.push(user);
            console.log("User saved to DB");
            resolve(user); // 성공적으로 저장되면 resolve 호출
        }, 1000);  // 비동기 처리 가정 (1초 후 저장)
    });
}

// 2. 유저에게 이메일을 보내는 함수 (Promise 반환)
function sendEmail(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Email sent to ${user.email}`);
            resolve(user); // 이메일 발송 후 다음 단계로 넘어감
        }, 1000);  // 비동기 처리 가정 (1초 후 이메일 발송)
    });
}

// 3. 유저 등록 결과 메시지를 반환하는 함수 (Promise 반환)
function getResult(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const message = `Success! User ${user.name} registered successfully.`;
            resolve(message); // 결과 메시지 반환
        }, 500);  // 비동기 처리 가정 (0.5초 후 메시지 전송)
    });
}

// 4. Promise 기반 유저 등록 함수
function registerByPromise(user) {
    return saveDB(user)  // DB에 저장
        .then(sendEmail)  // 이메일 발송
        .then(getResult); // 결과 메시지 반환
}

// 5. 유저 정보
const myUser = { name: "John Doe", email: "john@example.com" };

// 6. Promise 실행 및 결과 출력
const result = registerByPromise(myUser);

result.then(console.log) // 성공 메시지를 출력
      .catch(console.error); // 에러 발생 시 처리