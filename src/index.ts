import { Account } from './account'

const a1 = new Account(123000, 25, "fulano");
const a2 = new Account(1552811, 25, "beltrano");
const a3 = new Account(32345222, 25, "cicrano");

a1.deposit(1000.000)
a1.withdraw(200.00)
a1.transfer(300.00, a2)

a1.showBalance()
a2.showBalance();


