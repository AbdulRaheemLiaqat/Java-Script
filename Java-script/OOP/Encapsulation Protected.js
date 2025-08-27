class BankAccount {
  constructor(owner, balance) {
    this.owner = owner
    this._balance = balance
  }
  deposit(amount) {
    this._balance += amount
    return this._balance
  }
  getBalance() {
    return this._balance
  }
}
const acc = new BankAccount("Maheen", 1000)
acc.deposit(500)
console.log(acc.getBalance())
