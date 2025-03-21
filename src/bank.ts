export class Bank {
    private id: number;
    private name: string;

    constructor(id: number, name: string) {
    console.log("Bank()");

    this.id = id;
    this.name = name;
    }

  // GETTER,
    getId(): number {
    return this.id;
    }

  // SETTER
    setId(id: number): void {
    if (id > 0) {
    this.id = id;
    }
    }

  // GETTER
    getName(): string {
    return this.name;
    }

  // SETTER
    setName(name: string): void {
    this.name = name;
    }
}
          //new, instancia, local reservado na memoria
const b1 = new Bank(990, "BANCO SIMPLEX S/A");
let b2 = new Bank(995, "BANCO TOTAL S/A"); //(argumentos)

b1.setId(104);
b1.setName("CAIXA ECONÔMICA FEDERAL");

console.log("Cod  Banco:", b1.getId());
console.log("Nome Banco:", b1.getName());
