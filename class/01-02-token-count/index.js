console.log("Hello World")

function getToken(n) {

    if (n !== undefined) {
        if (n >= 2) {
            if (n < 10) {
                let result = String(Math.floor(Math.random() * 10 ** n)).padStart(n, '0')
                console.log(result)
            } else {
                console.log("너무 많습니다")
            }
        } else {
            console.log("너무 작습니다")
        }
    } else {
        console.log("error")
    }
}

getToken()


