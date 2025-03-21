export class Account { 
private balance: number

    constructor(
        private id: number, 
        private agency: number, 
        private holder: string
    ){
        this.balance = 0.00
        
        this.id = id
        this.agency = agency
        this.holder = holder
        
        this.balance = this.balance = 0.000
    }
}