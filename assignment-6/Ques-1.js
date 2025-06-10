// 1. Create a class BankAccount with properties balance and owner and methods deposit(), withdraw(), and displayBalance().

class bankAccount {
  constructor(balance, owner) {
    this.balance = balance;
    this.owner = owner;
  }
  deposit(balance) {
    this.balance += balance;
  }
  withdraw(balance) {
    if (this.balance > balance) {
      this.balance -= balance;
    } else {
      console.log("You don't have sufficient balance");
    }
  }
  displayBalance() {
    console.log("Your balance is " + this.balance);
  }
}
const obj = new bankAccount(5000, "Preeti");

obj.displayBalance(); // exiting balance
obj.deposit(2000); // deposit 2000
obj.displayBalance(); // balance after deposit
obj.withdraw(3000); // withdrow 3000
obj.displayBalance(); // display after withdraw
obj.withdraw(5000); // trying to withdraw invalid amount
obj.displayBalance();
