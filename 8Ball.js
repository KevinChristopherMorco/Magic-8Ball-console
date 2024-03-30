class EightBall {
    constructor() {
        this.responses = [
            "Yes, definitely.",
            "It is certain.",
            "Without a doubt.",
            "Most likely.",
            "Outlook good.",
            "Signs point to yes.",
            "Reply hazy, try again.",
            "Ask again later.",
            "Better not tell you now.",
            "Cannot predict now.",
            "Concentrate and ask again.",
            "Don't count on it.",
            "My sources say no.",
            "Outlook not so good.",
            "Very doubtful.",
            "Seems like it"
        ];
    }

    askQuestion() {
        console.log('Hit F in your keyboard if you want to quit.\n')
        let userInput = prompt('Ask me a question:').toUpperCase()

        if (userInput == 'F') {
            console.log('Thank you for using the Magic 8Ball...')
            return true;
        }
    }

}

class User {
    constructor(eightBall) {
        this.eightBall = eightBall
    }

    shake() {
        let random = Math.floor(Math.random() * 15)
        console.log('Shaking the Magic 8Ball...')
        console.log(`Magic 8Ball says: ${this.eightBall.responses[random]}`)
    }

}

let flag = true
let eightBall = new EightBall()
let user = new User(eightBall)
do {

    if (eightBall.askQuestion() == true) {
        break;
    }
    user.shake()

    console.log('\n')


} while (flag == true);


