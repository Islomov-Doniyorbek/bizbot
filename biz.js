
function userConnectMeTgBot() {
    let form = document.querySelector("form")
    let bot = {
        TOKEN: "7917979982:AAEAulfKidjQySBqEzarWUnoP0A4urBgl3k",
        chatID: "5126880787"
    }
    let bot2 = {
        TOKEN: "7917979982:AAEAulfKidjQySBqEzarWUnoP0A4urBgl3k",
        chatID: "6701885240"
    }
    let bot3 = {
        TOKEN: "7917979982:AAEAulfKidjQySBqEzarWUnoP0A4urBgl3k",
        chatID: "8011678584"
    }
    form.addEventListener("submit", e => {
        e.preventDefault();
        let date = new Date();

        let studentsChecking = new String();
        let students = document.querySelectorAll("#checkbox");
        let n = 0;
        for (let i = 0; i < students.length; i++) {
            if (students[i].checked) {
                studentsChecking += `%0A - ${students[i].parentElement.querySelector("span").innerText};`;                
                n++;
            }
        }
        let information;
        if (n == 0) {
            information = `Assalomu alaykum! %0A ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} %0A Ishga hamma 100% keldi!`;
        } else {
            information = `Assalomu alaykum. %0A ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} %0A Ishga: ${studentsChecking} %0A kelmadi.`;
        }

        function sendMessage(token, id, info) {
            fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${id}&text=${info}`, {
                method: "GET"
            })
            .then(success => {
                alert("Amaliyot yakunlandi")
            }, error => {
                alert("Xabar yuborilmadi!")
                console.log(error);
            })

            let xayr = [
                "Kuningiz xayrli o'tsin!", "Salomat bo'ling!", "Sizni xabardor qilganimdan mamnunman!", "Kuningiz barokatli o'tsin!", "Sog' bo'ling"
            ]
            let rn = Math.floor(Math.random() * xayr.length)
            setTimeout(() => {
                    fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${id}&text=${xayr[rn]}`, {
                    method: "GET"
                })
                
            }, 1500)

            // location.reload()
        }

        sendMessage(bot.TOKEN, bot.chatID, information)
        sendMessage(bot2.TOKEN, bot2.chatID, information)
        sendMessage(bot3.TOKEN, bot3.chatID, information)

        
    
    
        

    })
}
let login = prompt("Loginni kiriting:");
let code = prompt("Parol");

if ((login == "Rayxona2824" || login == "Doniyor2824" ) && code == "B2i8z24") {
    userConnectMeTgBot()
}
