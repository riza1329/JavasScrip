/*Export Class
Selain method dan primitive value kita juga dapat melakukan export sebuah class. Pada
contoh kode di bawah ini kita mencoba melakukan export sebuah class : */
modul.exports = class Wallet {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;

    }
    topUP(newbalance) {
        return (this.balance += newbalance);
    }
};