import express from 'express'
import swaggerUi from 'swagger-ui-express'
// import swaggerDocument from './swagger.json'
import swaggerJsdoc from 'swagger-jsdoc'

const app = express()

app.use(express.json())



const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Hello World',
            version: '1.0.0',
        },
    },
    apis: ['./swagger/*.swagger.js'],
};

// const openapiSpecification = swaggerJsdoc(options)


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));



app.get('/', function (req, res) {
    res.send('보드 성공')
})


export function checkValidationPhone(myphone) {
    if (myphone.length !== 10 && myphone.length !== 11) {
        console.log('에러 발생!!! 핸드폰 번호를 제대로 입력해 주세요!!!');
        return false;
    } else {
        return true; // 검증 통과
    }
}

export function getToken() {
    const count = 6
    if (count === undefined) {
        console.log('에러 발생!!! 갯수를 제대로 입력해 주세요!!!');
        return;
    } else if (count <= 0) {
        console.log('에러 발생!!! 갯수가 너무 적습니다!!!');
        return;
    } else if (count > 10) {
        console.log('에러 발생!!! 갯수가 너무 많습니다!!!');
        return;
    }

    const result = String(Math.floor(Math.random() * 10 ** count)).padStart(
        count,
        '0'
    );
    return result;
    // console.log(result);
}

export function sendTokenToSMS(myphone, token) {
    console.log(myphone + '번호로 인증번호' + token + '를 전송합니다!!!');
}



app.post("/token/phone", (req, res) => {
    const myphone = req.body.myphone;
    const isValid = checkValidationPhone(myphone);
    if (isValid) {
        const mytoken = getToken();
        sendTokenToSMS(myphone, mytoken);
        res.send('인증완료!!!');
    }
})



app.listen(3000, () => {

    console.log("서버 프로그램")

})