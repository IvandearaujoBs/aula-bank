
import { Bank } from './bank'

/*const a1 = new Account(123000, 25, "fulano de tal");
const a2 = new Account(1552811, 62, "beltrano fela da gaita");
const a3 = new Account(32345222, 37, "cicrano beltrano");

a1.deposit(1000.000)
a2.withdraw(200.00)
a3.transfer(300.00, a2)

a1.showBalance()
a2.showBalance()
a3.showBalance()*/

const bank = new Bank(999, "BANCO EXEMPLO S/A")

bank.createAccount(11255, 555, 'pedro coelho')
bank.createAccount(98765, 123, 'BELTRANO DA SILVA')
bank.createAccount(82366, 333, 'CICRANO OLIVEIRA')

bank.showAccounts()
const ac1 = bank.getAccount(224, 325841)
ac1?.showBalance()
