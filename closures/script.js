function UserCard(key) {
    this.balance = 100;
    this.transactionLimit = 100;
    this.historyLogs = [];
    this.key = key;

    this.putCredits = function (money) {
        this.balance += money;
        this.historyLogs.push({
            operationType: "Received credits",
            credits: this.balance,
            operationTime: new Date().toLocaleDateString(),
            transactionLimit: this.transactionLimit
        });
    };

    this.takeCredits = function (money) {
        const credits = this.transactionLimit && this.balance;
        credits > money
            ? this.balance -= money
            : console.error(`Your transaction limit is ${ this.transactionLimit } and your balance is ${ this.balance }`);
        this.historyLogs.push({
            operationType: "Withdrawal of credits",
            credits: this.balance,
            operationTime: new Date().toLocaleDateString(),
            transactionLimit: this.transactionLimit
        });
    };

    this.setTransactionLimit = function (limit) {
        this.transactionLimit = limit;
        this.historyLogs.push({
            operationType: "Transaction limit change",
            credits: this.balance,
            operationTime: new Date().toLocaleDateString(),
            transactionLimit: this.transactionLimit
        });
    };

    this.transferCredits = function (money, card) {
        const credits = this.transactionLimit && this.balance;
        if (credits > money) {
            this.balance -= money - money * 0.05;
            card.balance += money;
        }
    };
}

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
        this.i = 0;
    }


    addCard() {
        if (this.i <= 3) {
            this.i += 1;
            let card = new UserCard(this.i);
            if (this.cards.length <= 3) {
                this.cards.push(card);
            }
        }
    }

    getCardByKey(key) {
        const find = this.cards.find((el) => el.key === key);
        return find;
    }
}


let user = new UserAccount('Bob');

user.addCard();
user.addCard();
user.addCard();
user.addCard();
console.log(user);

const card1 = user.getCardByKey(1);
const card2 = user.getCardByKey(2);
const card3 = user.getCardByKey(3);
card1.takeCredits(50);
card3.transferCredits(45, card1);
console.log(card1);
console.log(card3);
