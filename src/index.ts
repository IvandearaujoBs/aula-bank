import { Account } from "./account";
import { Bank } from "./bank";
const b1 = new Bank(1,"BANCO DO BRASIL S/A");

console.log(b1);
console.log("Banco\t:", b1.getId());
console.log("Nome\t:", b1.getName());

const a1 = new Account(123000, 25, "fulano");
const a2 = new Account(1552811, 25, "beltrano");
const a3 = new Account(32345222, 25, "cicrano");

console.log(b1);

console.log(a1)
console.log(a2)
console.log(a3)


