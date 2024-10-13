const DB = [];

function register(user) {
    saveToDB(user, function(user) {
        sendEmail(user, function(user) {
            sendSuccessMessage(user, function() {
                console.log("Registration process completed.");
            });
        });
    });
}

function saveToDB(user, callback) {
    setTimeout(() => {
        DB.push(user);
        console.log("User saved to DB");
        callback(user); // 다음 단계로 이동
    }, 1000);  // 비동기 처리 가정 (1초 후 저장)
}

function sendEmail(user, callback) {
    setTimeout(() => {
        console.log(`Email sent to ${user.email}`);
        callback(user); // 다음 단계로 이동
    }, 1000);  // 비동기 처리 가정 (1초 후 이메일 발송)
}

function sendSuccessMessage(user, callback) {
    setTimeout(() => {
        console.log(`Success! User ${user.name} registered successfully.`);
        callback(); // 마지막 콜백
    }, 500);  // 비동기 처리 가정 (0.5초 후 메시지 전송)
}



// 테스트 실행
const user = { name: "John Doe", email: "john@example.com" };
register(user);